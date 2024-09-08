"use client"
import { useEffect, useState } from 'react';
import { FeedWrapper } from '@/components/FeedWrapper';
import { StickyWrapper } from '@/components/StickyWrapper';
import { Head } from '@/components/Head';
import { UserProgress } from '@/components/UserProgress';
import { getUnits } from '@/db/queries';

interface Challenge {
  id: number;
  type: "SELECT" | "ASSIST";
  question: string;
  order: number;
  lessonId: number;
  challengeProgress: {
    completed: boolean;
  }[];
}

interface Lesson {
  id: number;
  title: string;
  order: number;
  unitId: number;
  completed: boolean;
  challenges: Challenge[];
}

interface Unit {
  id: number;
  title: string;
  description: string;
  order: number;
  courseId: number;
  lessons: Lesson[];
}


const LearnPage = () => {
  const [units, setUnits] = useState<Unit[]>([]); 
  const [course, setCourse] = useState({
    title: "Spanish",
    imgSrc: "/es.svg",
  });

  useEffect(() => {
    const selectedCourse = localStorage.getItem("selectedCourse");
    if (selectedCourse) {
      setCourse(JSON.parse(selectedCourse));
    }

    const fetchUnits = async () => {
      const unitsData: Unit[] = await getUnits(); 
      setUnits(unitsData);
    };

    fetchUnits();
  }, []);


    return (
        <div className='flex flex-row-reverse gap-[48px] px-6'>
            <StickyWrapper>
                <UserProgress
                    activeCourse={course}
                    hearts={5}
                    point={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Head title={course.title} />
                <div className='space-y-4'>
                    {units.map((unit) => (
                        <div key={unit.id} className='mb-10'>
                            {JSON.stringify(unit)}
                        </div>
                    ))}
                </div>
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;
