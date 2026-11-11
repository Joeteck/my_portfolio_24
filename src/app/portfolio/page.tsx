import { AboutMe } from '@/components/features/portfolio/AboutMe'
import { ButtomBar } from '@/components/features/portfolio/ButtomBar'
import { ExampleComponent } from '@/components/features/portfolio/ExampleComponent'
import Footer from '@/components/features/portfolio/Footer'
import { Header } from '@/components/features/portfolio/Header'
import ProjectsSection from '@/components/features/portfolio/ProjectSection'
import TextInput from '@/components/globals/form/TextInput'
// import { Footer } from '@/components/globals/layout/Footer'
import { Navbar } from '@/components/globals/layout/Navbar'
import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'
import Button from '@/components/globals/ui/Button'
import Image from 'next/image'
import React from 'react'

const PortfolioPage = () => {
    return (
        <div className="relative flex flex-col bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 overflow-hidden">
            <Navbar type="portfolio" />
            
            {/* Noise Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full bg-noise-dark opacity-30 dark:opacity-100 mix-blend-multiply z-10"></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="bg-gradient-to-b from-transparent via-white/40 to-[#e8faf5] dark:via-[#010604]/50 dark:to-[#03100b] w-full h-full" />
            </div>

            <div className="relative h-[100vh] w-full flex flex-col items-center justify-center">
                <div className='w-full flex flex-col gap-3 items-center justify-center'>

                    <div className="flex items-center justify-center">
                        <div>
                            <Image src="/logo/joeteckBlack.jpg" alt='Joeteck Logo' width={100} height={100}  className='w-12 h-12 rounded-[10px]'/>
                        </div>
                    </div>
                    <div className="w-fit flex flex-col justify-center items-center">
                        <div className='w-80'>
                            <Heading variant='title' className='px-0 text-[28px] sm:text-[32px] leading-snug font-medium  dark:text-primary-300' gradient>Keep it going with JoetecK</Heading>
                        </div>
                        <div className='w-[300px]'>
                            <Paragraph className='text-center text-neutral-500 dark:text-neutral-400'>Joeteck offers the tools to create visually rich and functional web experiences.</Paragraph>
                        </div>
                    </div>
                    <div className="w-80 flex md:flex-row flex-col justify-between items-center">
                        <div className='w-fit px-4 py-1 border border-primary dark:border-primary-300 rounded-lg bg-neutral-100 dark:bg-neutral-800 max-sm:mb-5'>
                            <span className='font-mono text-sm font-thin text-primary dark:text-primary-200'> joeteck builds vision</span>
                        </div>
                        <div className='flex flex-col'>
                                <span className='px-4 py-2 text-sm bg-primary text-white dark:bg-primary-400 dark:text-neutral-900 rounded-lg '>that last</span>
                            {/* <form className=''>
                                <Button type='submit' className='px-4 py-2 text-sm bg-primary text-white dark:bg-primary-400 dark:text-neutral-900'>Explore</Button>
                            </form> */}
                        </div>
                    </div>

                </div>
                <div className='absolute bottom-9 pt-20'>
                    <ButtomBar/>
                </div>
            </div>
            <section className="relative min-h-screen w-full flex flex-col items-center py-20 md:py-30 px-4 bg-neutral-100 dark:bg-neutral-950">
                    
                {/* Noise Background */}
                <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="w-full h-full bg-noise-dark opacity-30 dark:opacity-40 mix-blend-multiply z-20"></div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e0ebe8]/30 to-[#e0ebe8]/60 dark:via-[#010604]/50 dark:to-[#03100b] pointer-events-none z-20"></div>

                {/* Components */}
                <div id='example' className='relative z-30 w-full flex flex-col items-center justify-center'>
                    <ExampleComponent/>
                </div>
            </section>
                <div id='projects' className='w-full flex flex-col items-center justify-center'>
                    <ProjectsSection/>
                </div>

            <div id='footer'>
                <Footer/>
                {/* <Footer type="portfolio"/> */}
            </div>
        </div>
    )
}

export default PortfolioPage