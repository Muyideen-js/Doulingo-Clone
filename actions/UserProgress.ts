"use server";

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
    const { userId } = await auth();
    const user = await currentUser();
    
    if (!userId || !user) {
        throw new Error("Unauthorized access");
    }
    
  const course = await getCourseById(courseId);

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      username: user.firstName || "User",
      UserimageSrc: user.imageUrl || "/mascot.svg",
    });

    revalidatePath("/learn")
    revalidatePath("/courses")
    redirect('/learn')
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    username: user.firstName || "User",
    UserimageSrc: user.imageUrl || "/mascot.svg",
  });

  revalidatePath("/learn")
  revalidatePath("/courses")
  redirect('/learn')
};
