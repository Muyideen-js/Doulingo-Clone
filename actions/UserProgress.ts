"use server";

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
  // Assuming auth() does not return a Promise, remove the await
  const { userId } = auth(); // No await here
  const user = await currentUser(); // Assuming currentUser() is async
  console.log("userId:", userId); // Log userId to see if it's defined
  console.log("user:", user); 

  if (!userId || !user) {
    redirect("/");
    return;
  }

  const course = await getCourseById(courseId);

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      username: user.firstName || "User",
      UserimageSrc: user.imageUrl || "/mascot.svg",
    });

    revalidatePath("/learn");
    revalidatePath("/courses");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId: Number(userId), // Convert userId to number if necessary
    username: user.firstName || "User",
    activeCourseId: courseId,
    UserimageSrc: user.imageUrl || "/mascot.svg",
  });

  revalidatePath("/learn");
  revalidatePath("/courses");
  redirect("/learn");
};
