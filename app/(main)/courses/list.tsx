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

  const onclick = async (event: React.MouseEvent, id: number, title: string, imgSrc: string) => {
    event.preventDefault(); 

    if (pending) return;

    if (id === activeCourseId) return;

    try {
      await upsertUserProgress(id);
      // Store selected course info in local storage
      localStorage.setItem('selectedCourse', JSON.stringify({ id, title, imgSrc }));
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
          onclick={(e) => onclick(e, course.id, course.title, course.imageSrc)} 
          disable={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
}
