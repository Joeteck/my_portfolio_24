import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'
import React from 'react'
import ResumeSection from './Resume'
import MeetJoel from './MeetJoel'
import { ContactForm } from './ContactForm'

export const AboutMe = () => {
    return (
        <div className='w-full min-h-screen flex mt-0 justify-center'>
            <div className="relative w-full flex flex-col items-center bg-[#f3f6f5] dark:bg-[#071f15]">
                {/* Label */}
                    <MeetJoel/>

                {/* resume */}
                <div className='md:pt-40 bg-transparent max-sm:w-[95%] w-[75%] h-full'>
                    <ResumeSection />
                </div>
                
                <div className='md:pt-40 py-10 bg-transparent h-full'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
