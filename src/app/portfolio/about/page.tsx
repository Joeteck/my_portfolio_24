import { AboutMe } from '@/components/features/portfolio/AboutMe'
import { ButtomBar } from '@/components/features/portfolio/ButtomBar'
import { ExampleComponent } from '@/components/features/portfolio/ExampleComponent'
import Footer from '@/components/features/portfolio/Footer'
import { Header } from '@/components/features/portfolio/Header'
import { Hero } from '@/components/features/portfolio/Hero'
import ProjectsSection from '@/components/features/portfolio/ProjectSection'
import TextInput from '@/components/globals/form/TextInput'
import { Navbar } from '@/components/globals/layout/Navbar'
import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'
import Button from '@/components/globals/ui/Button'
import Image from 'next/image'
import React from 'react'
import HeroDesign from './HeroDesign'

const About = () => {
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
            <Hero/>
            <AboutMe/>
            
            <div id='footer'>
                <Footer/>
            </div>
        </div>
        )
}

export default About