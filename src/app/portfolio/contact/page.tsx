import { Header } from '@/components/features/portfolio/Header'
import { Navbar } from '@/components/globals/layout/Navbar'
import React from 'react'

const Contact = () => {
    return (
<<<<<<< Updated upstream
        <div className=" flex flex-col justify-between px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar type="portfolio" />
            <div className="min-h-screen">
                <Header/>
            </div>
        </div>    )
=======
        <div className="relative flex flex-col bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 overflow-hidden">
            <Navbar type="portfolio" />
            
            {/* Noise Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full bg-noise-dark dark:bg-noise opacity-30 dark:opacity-20 mix-blend-multiply z-10"></div>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100/60 to-neutral-100 dark:via-neutral-800/60 dark:to-neutral-900 pointer-events-none z-0"></div>

            <div className="relative h-[100vh] w-full flex flex-col items-center justify-center">
                <div className='w-full flex flex-col gap-3 items-center justify-center'>

                    <div className="flex items-center justify-center">
                        <div>
                            <Image src="/logo/joeteckBlack.jpg" alt='Joeteck Logo' width={100} height={100}  className='w-12 h-12 rounded-[10px]'/>
                        </div>
                    </div>
                    <div className="w-fit flex flex-col justify-center items-center">
                        <div className='w-80'>
                            <Heading variant='title' className='text-[36px] text-center  dark:text-primary-300' gradient>Keep it going with JoetecK</Heading>
                        </div>
                        <div className='w-[300px]'>
                            <Paragraph className='text-center text-lg font-[550] text-neutral-600 dark:text-neutral-300'>Joeteck offers the tools to create visually rich and functional web experiences.</Paragraph>
                        </div>
                    </div>
                    <div className="w-80 flex md:flex-row flex-col justify-between items-center">
                        <div className='w-fit px-4 py-1 border border-primary dark:border-primary-300 rounded-lg bg-neutral-100 dark:bg-neutral-800 max-sm:mb-5'>
                            <span className='font-mono text-sm font-thin text-primary dark:text-primary-200'> joeteck build vision</span>
                        </div>
                        <div className='flex flex-col'>
                            <form className=''>
                                <Button type='submit' className='px-4 py-2 text-sm bg-primary text-white dark:bg-primary-400 dark:text-neutral-900'>Explore</Button>
                            </form>
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100/60 to-neutral-50 dark:via-neutral-800/60 dark:to-neutral-950 pointer-events-none z-20"></div>

                {/* Components Comes Here */}

            </section>

            <div id='footer'>
                <Footer/>
                {/* <Footer type="portfolio"/> */}
            </div>
        </div>
        )
>>>>>>> Stashed changes
}

export default Contact