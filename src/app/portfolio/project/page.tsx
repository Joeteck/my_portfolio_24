import Footer from '@/components/features/portfolio/Footer'
import { ProjectHero } from '@/components/features/portfolio/ProjectHero'
import ProjectsSection from '@/components/features/portfolio/ProjectSection'
import { Navbar } from '@/components/globals/layout/Navbar'
import React from 'react'

const Project = () => {
    return (
        <div className="relative flex flex-col bg-[#f9fafb] dark:bg-[#04130d] text-[#111827] dark:text-[#cceee0] overflow-hidden">
            <Navbar type="portfolio" />

            {/* Noise Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full bg-noise-dark opacity-30 dark:opacity-100 mix-blend-multiply z-10"></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="bg-gradient-to-b from-transparent via-white/40 to-[#CCE8E0] dark:via-[#010604]/50 dark:to-[#03100b] w-full h-full" />
            </div>
            <ProjectHero/>
            <ProjectsSection/>
            

            <div id='footer'>
                <Footer/>
            </div>
        </div>
        )
}

export default Project