"use client";
import { courses, userProgress } from "@/db/schema";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/UserProgress";

type Props = {
  courses: typeof courses.$inferSelect[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export default function List({ courses, activeCourseId }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onclick = async (event: React.MouseEvent, id: number) => {
    event.preventDefault(); // Prevent the default behavior
  
    console.log("Clicked course ID:", id);
  
    if (pending) {
      console.log("Pending state, skipping navigation.");
      return;
    }
  
    if (id === activeCourseId) {
      console.log("Course is already active, skipping update.");
      return;
    }
  
    try {
      await upsertUserProgress(id);
      console.log("User progress updated, navigating to /learn.");
      router.push("/learn"); 
    } catch (error) {
      console.error("Error updating user progress:", error);
    }
  };
  

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onclick={(e) => onclick(e, course.id)} 
          disable={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
}
