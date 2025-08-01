'use client'

import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'
import Button from '@/components/globals/ui/Button'
import { ButtomBar } from '@/components/features/portfolio/ButtomBar'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { ArrowBigRight, ArrowBigRightDash, ArrowRight } from 'lucide-react'
import { FiArrowRight } from 'react-icons/fi'

export const Hero = () => {
    const cardControls = useAnimation()
    const avatarControls = useAnimation()
    const livesetControls = useAnimation()

    return (
    <div className="relative w-full h-screen overflow-hidden bg-[#fafffd] dark:bg-[#04130d] text-neutral-900 dark:text-neutral-100">
            {/* Backgrounds */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full bg-noise-dark opacity-20 dark:opacity-60 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-[#0e2f25]/50 dark:to-[#04130d] z-20" />
            </div>

            {/* Main Content */}
            <div className="relative z-30 flex h-full items-center justify-between px-6 md:px-12 lg:px-32 xl:px-40 2xl:px-48">
                {/* Left Section */}
                <div className="flex flex-col gap-5 max-w-xl">
                {/* Logo */}
                <div>
                    <Image src="/logo/joeteckBlack.jpg" alt="Joeteck Logo" width={36} height={36} className="flex bg-black rounded-[10px] w-12 h-12 items-center justify-center " />
                </div>

                {/* New Animated Intro
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl sm:text-2xl text-[#1bbb8b] font-medium tracking-wide"
                >
                    👋 Hey, I’m Joeteck
                </motion.div> */}

                <Heading variant="title" className="px-0 text-[28px] sm:text-[32px] leading-snug font-medium text-neutral-800 dark:text-white">
                    Building digital <br></br>experiences that breathe.
                </Heading>

                <Paragraph className="text-neutral-500 dark:text-neutral-400 max-w-md">
                    With a passion for design systems, intuitive UIs, and clean architecture, I create delightful digital experiences.
                </Paragraph>

                {/* CTA */}
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="px-4 py-1 border border-[#1bbb8b] rounded-lg bg-neutral-100">
                    <span className="font-mono text-sm font-thin text-black">build with joeteck</span>
                    </div>
                    <button type="submit" className="px-4 py-2 text-sm font-semibold bg-transparent hover:bg-transparent hover:text-[#154e3c] dark:hover:text-[#205d4a] text-[#159a70]">
                    Explore
                    <FiArrowRight className="ml-2 inline" />
                    </button>
                </div>
                </div>

                {/* Right Floating Section */}
                <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-[500px] h-[500px] hidden md:block"
                >
                    {/* Dashboard Card */}
                    <motion.div
                        drag
                        dragConstraints={{ top: -40, bottom: 40, left: -40, right: 40 }}
                        onDragEnd={() =>
                        cardControls.start({
                            x: 0,
                            y: 0,
                            transition: { type: 'spring', stiffness: 300, damping: 20 },
                        })
                        }
                        animate={cardControls}
                        className="absolute top-[20%] left-[20%] w-[280px] bg-white rounded-xl shadow-xl p-5 text-black cursor-grab active:cursor-grabbing space-y-4"
                    >
                        <div className="flex items-center gap-4">
                        <div className="w-14 h-12 rounded-full bg-gradient-to-tr from-[#1bbb8b] to-green-700 flex items-center justify-center text-white text-lg font-bold">
                            J
                        </div>
                        <div>
                            <div className="font-bold text-base">Joeteck</div>
                            <div className="text-sm text-gray-500">Frontend Engineer | Vision Builder</div>
                        </div>
                        </div>

                        <div className="flex flex-wrap gap-2 text-xs text-white">
                        <span className="bg-[#1bbb8b] px-2 py-1 rounded-md">Next.js</span>
                        <span className="bg-[#1bbb8b] px-2 py-1 rounded-md">React.js</span>
                        <span className="bg-[#1bbb8b] px-2 py-1 rounded-md">React Native</span>
                        <span className="bg-[#1bbb8b] px-2 py-1 rounded-md">JavaScript</span>
                        </div>

                        <div className="text-sm text-gray-700 leading-relaxed">
                        Passionate about crafting smooth, interactive user experiences. Always building tools that turn vision into reality.
                        </div>

                        <div className="flex justify-between text-xs font-semibold text-gray-500 pt-2 border-t">
                        <span>💡 Building daily</span>
                        <span>⚡️ Stay inspired</span>
                        </div>
                    </motion.div>

                    {/* Draggable Avatar */}
                    <motion.div
                        drag
                        dragConstraints={{ top: -30, bottom: 30, left: -30, right: 30 }}
                        onDragEnd={() =>
                        avatarControls.start({
                            x: 0,
                            y: 0,
                            transition: { type: 'spring', stiffness: 300, damping: 18 },
                        })
                        }
                        animate={avatarControls}
                        className="absolute top-[10%] right-[10%] w-[60px] h-[60px] bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing"
                    >
                        <Image src="/images/avatar.jpg" alt="Avatar" width={40} height={40} className="rounded-full" />
                    </motion.div>

                    {/* Draggable Liveset Label */}
                    <motion.div
                        drag
                        dragConstraints={{ top: -30, bottom: 30, left: -30, right: 30 }}
                        onDragEnd={() =>
                        livesetControls.start({
                            x: 0,
                            y: 0,
                            transition: { type: 'spring', stiffness: 300, damping: 18 },
                        })
                        }
                        animate={livesetControls}
                        className="absolute bottom-[20%] left-[10%] px-3 py-1 bg-[#1bbb8b] text-white text-sm rounded-full shadow cursor-grab active:cursor-grabbing"
                    >
                        Liveset
                    </motion.div>

                    {/* Bouncing Tosi */}
                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, repeatType: 'loop', duration: 2 }}
                        className="absolute bottom-[10%] right-[5%] px-3 py-1 bg-orange-500 text-white text-sm rounded shadow"
                    >
                        Tosi
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-6 w-full flex justify-center z-40">
                <ButtomBar />
            </div>
        </div>
    )
}
