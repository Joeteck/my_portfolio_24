import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'
import Button from '@/components/globals/ui/Button'
import { ButtomBar } from '@/components/features/portfolio/ButtomBar'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
    return (
        <div>
            {/* Noise Background */}
            <div className="absolute inset-0 pointer-events-none z-0 ">
                <div className="w-full h-full bg-noise-dark opacity-60 dark:opacity-100 mix-blend-multiply z-10"></div>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-neutral-800/50 dark:to-neutral-900 pointer-events-none z-0"></div>

            <div className="relative h-[100vh] w-full flex flex-col items-center justify-center">
                <div className='w-full flex flex-col gap-3 items-center justify-center'>

                    <div className="flex bg-black rounded-[10px] w-12 h-12 items-center justify-center">
                        <div>
                            <Image src="/logo/joeteckBlack.jpg" alt='Joeteck Logo' width={30} height={30}  className=''/>
                        </div>
                    </div>
                    <div className="w-fit flex flex-col justify-center items-center">
                        <div className='w-80'>
                            <Heading variant='title' className='text-[36px] text-center'>Keep it going with JoetecK</Heading>
                        </div>
                        <div className='w-72'>
                            <Paragraph className='text-center text-lg font-[550] text-neutral-500 dark:text-neutral-400'>Joeteck offers the tools to create visually rich and functional web experiences.</Paragraph>
                        </div>
                    </div>
                    <div className="w-80 flex md:flex-row flex-col justify-between items-center">
                        <div className='w-fit px-4 py-1 border border-primary dark:border-neutral-400 rounded-lg bg-neutral-100 max-sm:mb-5'>
                            <span className='font-mono text-sm font-thin dark:text-black'> joeteck build vision</span>
                        </div>
                        <div className='flex flex-col'>
                            <form className=''>
                                <Button type='submit' className='px-4 py-2 text-sm'>Explore</Button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className='absolute bottom-9 pt-20'>
                    <ButtomBar/>
                </div>
            </div>

            <div className='flex '>
                
            </div>
    </div>
    )
}
