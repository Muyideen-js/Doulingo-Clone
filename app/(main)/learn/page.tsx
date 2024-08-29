import { FeedWrapper } from '@/components/FeedWrapper'
import { StickyWrapper } from '@/components/StickyWrapper'
import React from 'react'
import { Head } from '@/components/Head'
import { UserProgress } from '@/components/UserProgress'
// import Spain from "../../../public/es.svg"

const LearnPage = () => {
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
          <UserProgress 
          activeCourse={{ title: "spanish", imgSrc: '../../../public/es.svg'}}
          hearts={5}
          point={100}
          hasActiveSubscription={false}
          />
      </StickyWrapper>
      <FeedWrapper>
          <Head  title="Spanish"/>  
          <div className='space-y-4'>
              
          </div>
      </FeedWrapper>
    </div>
  )
}

export default LearnPage