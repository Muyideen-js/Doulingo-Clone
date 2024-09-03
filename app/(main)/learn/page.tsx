import { FeedWrapper } from '@/components/FeedWrapper';
import { StickyWrapper } from '@/components/StickyWrapper';
import { Head } from '@/components/Head';
import { UserProgress } from '@/components/UserProgress';
const LearnPage = () => {
  const course = {
    title: "Mocked Course Title",
    imgSrc: "../../../public/es.svg",
  };

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
          <h1>Welcome to {course.title}</h1>
          <p>This is the learning page content.</p>

          </div>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
