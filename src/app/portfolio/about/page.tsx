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

const About = () => {
    return (
        <div className="relative flex flex-col bg-neutral-100 dark:bg-[#00110a] text-neutral-900 dark:text-neutral-100 overflow-hidden">
            <Navbar type="portfolio" />
            <Hero/>
            
            <div id='footer'>
                <Footer/>
            </div>
        </div>
        )
}

export default About