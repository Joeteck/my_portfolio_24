'use client'

import { AboutMe } from '@/components/features/portfolio/AboutMe'
import { ButtomBar } from '@/components/features/portfolio/ButtomBar'
import Footer from '@/components/features/portfolio/Footer'
import { Header } from '@/components/features/portfolio/Header'
import ProjectsSection from '@/components/features/portfolio/ProjectSection'
import { Navbar } from '@/components/globals/layout/Navbar'
import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'
import Button from '@/components/globals/ui/Button'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className="relative flex flex-col bg-[#f9fafb] dark:bg-[#04130d] text-[#111827] dark:text-[#cceee0] overflow-hidden">
      <Navbar type="portfolio" />

      {/* Noise Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-noise-dark opacity-30 dark:opacity-100 mix-blend-multiply z-10"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="bg-gradient-to-b from-transparent via-white/40 to-[#e0f7f0] dark:via-[#020c09]/50 dark:to-[#04130d] w-full h-full" />
      </div>

      <div className="relative h-[100vh] w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-3 items-center justify-center">
          {/* Logo */}
          <div className="flex bg-black rounded-[10px] w-12 h-12 items-center justify-center">
            <Image src="/logo/joeteckBlack.jpg" alt="Joeteck Logo" width={30} height={30} />
          </div>

          {/* Headline + Subtext */}
          <div className="w-fit flex flex-col justify-center items-center">
            <div className="w-80">
              <Heading variant="title" className="text-[36px] text-center">
                Keep it going with JoetecK
              </Heading>
            </div>
            <div className="w-72">
              <Paragraph className="text-center text-lg font-[550] text-neutral-500 dark:text-[#b7e3d3]">
                Joeteck offers the tools to create visually rich and functional web experiences.
              </Paragraph>
            </div>
          </div>

          {/* CTA */}
          <div className="w-80 flex md:flex-row flex-col justify-between items-center mt-4">
            <div className="w-fit px-4 py-1 border border-[#1bbb8b] dark:border-[#78dabf] rounded-lg bg-neutral-100 max-sm:mb-5">
              <span className="font-mono text-sm font-thin dark:text-black">
                joeteck build vision
              </span>
            </div>
            <div className="flex flex-col">
              <form>
                <Button
                  type="submit"
                  className="px-4 py-2 text-sm bg-[#1bbb8b] text-white hover:bg-[#179f76] transition-all"
                >
                  Explore
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-9 pt-20">
          <ButtomBar />
        </div>
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Contact
