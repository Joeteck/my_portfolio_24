"use client"

import { Heading } from "@/components/globals/typography/Heading"
import { Paragraph } from "@/components/globals/typography/Paragraph"
import { ButtomBar } from "@/components/features/portfolio/ButtomBar"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { FiArrowRight } from "react-icons/fi"
import React, { useRef } from "react"

export const ProjectHero = () => {
  const cardControls = useAnimation()
  const sectionRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen pt-20 overflow-hidden bg-[#fafffd] dark:bg-[#04130d] text-neutral-900 dark:text-neutral-100"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-noise-dark opacity-20 dark:opacity-60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-[#0e2f25]/40 dark:to-[#04130d]" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-30 flex max-sm:flex-col max-sm:py-32 h-full items-center justify-between px-6 md:px-12 lg:px-32 xl:px-40 2xl:px-48">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 max-w-xl"
        >
          {/* Title */}
          <Heading
            variant="title"
            className="px-0 text-[30px] sm:text-[38px] leading-snug font-semibold text-neutral-800 dark:text-white"
          >
            Showcasing <span className="text-[#1bbb8b]">projects</span> that
            solve real problems.
          </Heading>

          {/* Paragraph */}
          <Paragraph className="text-neutral-500 dark:text-neutral-400 max-w-md">
            Explore a selection of my projects — from full-stack applications to
            design-driven frontends. Each one reflects a focus on usability,
            smooth interactions, and meaningful impact.
          </Paragraph>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-1 border border-[#1bbb8b] rounded-lg bg-neutral-100 dark:bg-[#0e2f25]/40"
            >
              <span className="font-mono text-sm font-thin text-black dark:text-white">
                featured work
              </span>
            </motion.div>
            <motion.button
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-5 py-2 text-sm font-semibold bg-transparent hover:text-[#154e3c] dark:hover:text-[#1bbb8b] text-[#159a70] flex items-center"
            >
              <a href="https://github.com/Joeteck" target="_blank" rel="noopener noreferrer">See Repo <FiArrowRight className="ml-2 inline" /></a>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Floating Showcase */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[500px] h-[500px] hidden md:block"
        >
          {/* Featured Project Card */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            drag
            dragConstraints={{ top: -40, bottom: 40, left: -40, right: 40 }}
            onDragEnd={() =>
              cardControls.start({
                x: 0,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              })
            }
            animate={cardControls}
            className="absolute top-[18%] left-[18%] w-[280px] backdrop-blur-lg bg-white/90 dark:bg-[#0e2f25]/90 border border-white/20 dark:border-neutral-800 rounded-xl shadow-2xl p-2 cursor-grab active:cursor-grabbing"
          >
            <Image
              src="/images/project/dashboard.png"
              alt="Project One"
              width={400}
              height={300}
              className="rounded-lg object-cover w-[400px] h-[300px]"
            />
            <div className="mt-4 space-y-2">
                <div className="font-bold text-base">Internal Management System</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Built with Next.js, Tailwind, REST API
              </div>
            </div>
          </motion.div>

          {/* Floating Small Project Thumbnails */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-[10%] right-[12%] w-[120px] h-[80px] bg-white dark:bg-[#0e2f25] rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src="/images/project/blockchain_home.png"
              alt="Project Two"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-[30%] left-[10%] w-[120px] h-[80px] bg-white dark:bg-[#0e2f25] rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src="/images/project/blockchain.png"
              alt="Project Three"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Bouncing Tag */}
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-[12%] right-[8%] px-3 py-1 bg-[#1bbb8b] text-white text-sm rounded shadow"
          >
            + More
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-6 w-full flex justify-center z-40">
        <ButtomBar page="about" />
      </div>
    </div>
  )
}

