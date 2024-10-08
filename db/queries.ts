import {cache} from "react"
import db from "@/db/drizzle"
import { auth } from "@clerk/nextjs/server";
import { challenges, courses, lessons, units, userProgress } from "./schema";
import { eq } from "drizzle-orm";

export const getUserProgress = cache(async () => {
    const { userId } = await auth();

    console.log("User ID:", userId); 

    if (!userId) {
        return null;
    }

    const data = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        },
    });

    console.log("User Progress Data:", data); // Debugging

    return data;
});

export const getUnits = cache(async () => {
    const userProgress = await getUserProgress();

    if (!userProgress?.activeCourseId) {
        return [];
    }

    const data = await db.query.units.findMany({
        where: eq(units.courseId, userProgress.activeCourseId),
        with: {
            lessons: {
                with: {
                    challenges: {
                        with: {
                            challengeProgress: true,
                        }
                    }
                }
            }
        }
    });

    const nomalizeData = data.map((unit) => {
        const lessonWithCompletedStatus = unit.lessons.map((lesson) => {
            const allCompletedChallenge = lesson.challenges.every((challenge) => {
                return challenge.challengeProgress
                    && challenge.challengeProgress.length > 0
                    && challenge.challengeProgress.every((progress) => progress.completed);
            });
            return { ...lesson, completed: allCompletedChallenge };
        });
        return { ...unit, lessons: lessonWithCompletedStatus };
    });

    return nomalizeData;
});


export const getCourses = cache(async ()=> {

    const data = await db.query.courses.findMany();
    
    return data;
});

export const getCourseById = cache(async (courseId: number) => {
    const data =  await db.query.courses.findFirst({
        where: eq(courses.id, courseId),
        
    });

    return data;
})