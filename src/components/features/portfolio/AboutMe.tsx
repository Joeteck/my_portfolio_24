import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'
import React from 'react'

export const AboutMe = () => {
    return (
        <div className='w-full min-h-screen flex mt-40 justify-center'>
            <div className="relative w-full flex flex-col items-center">
                {/* Label */}
                <span className="relative text-[10px] font-medium px-4 py-1 rounded-full bg-[#0e2f25]/20 dark:bg-primaryDarklight text-[#0e2f25] dark:text-[#e0ebe8] backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 z-30">
                    Profile
                </span>

                {/* Heading + Paragraph */}
                <div className="relative z-30 text-center my-6 max-sm:my-3 max-w-md ">
                    <Heading variant="sectionTitle" className="pb-2 font-medium text-center text-primary dark:text-primary-300">
                        Meet Joel
                    </Heading>
                    <Paragraph className="text-neutral-500 dark:text-neutral-300 font-medium text-center">
                        Results-driven Frontend Engineer with a BSc in Information Technology and hands-on experience delivering tech solutions that drive business success. Skilled in building user-friendly applications, integrating payment gateways, and improving efficiency through data-driven decisions.
                    </Paragraph>
                </div>

                {/* resume */}
                <div className='bg-black max-sm:w-[95%] w-[75%] h-full'>
                    <div className='flex  items-center justify-center'>
                        <div className='w-full h-full bg-neutral-800 flex items-center justify-center'>
                            hey
                        </div>
                        <div className='w-full h-full bg-neutral-300 flex items-center justify-center'>
                            hey
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
