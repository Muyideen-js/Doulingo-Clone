"use client"
import { courses, userProgress } from "@/db/schema"
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/UserProgress";

type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
}
export default function List({ courses, activeCourseId }: Props){
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onclick = (id: number) => {
        if(pending) return;

        if(id === activeCourseId){
            return router.push('/learn');
        }
        startTransition(()=> {
            upsertUserProgress(id)
        })
    }

    return(
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {
                courses.map((courses)=>(
                    <Card
                    key={courses.id}
                    id={courses.id}
                    title={courses.title}
                    imageSrc={courses.imageSrc}
                    onclick={onclick}
                    disable={false}
                    active={courses.id === activeCourseId}
                    />
                ))
            }
        </div>
    )
}