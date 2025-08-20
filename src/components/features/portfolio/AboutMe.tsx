import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'
import React from 'react'
import ResumeSection from './Resume'
import MeetJoel from './MeetJoel'

export const AboutMe = () => {
    return (
        <div className='w-full min-h-screen flex mt-0 justify-center'>
            <div className="relative w-full flex flex-col items-center">
                {/* Label */}
                    <MeetJoel/>

                {/* resume */}
                <div className='pt-40 bg-transparent max-sm:w-[95%] w-[75%] h-full'>
                    <ResumeSection />
                </div>
            </div>
        </div>
    )
}
