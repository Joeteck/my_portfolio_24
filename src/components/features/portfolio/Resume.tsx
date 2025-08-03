'use client'

import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaGlobe,
} from 'react-icons/fa'
import { useRef, useEffect, ReactNode } from 'react'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.12,
            staggerDirection: -1,
        },
    },
}

const fadeVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98, rotate: -2 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 80, damping: 18 },
    },
    exit: {
        opacity: 0,
        y: -60,
        scale: 0.95,
        rotate: 2,
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
}

interface ResumeBlockProps {
    children: ReactNode
}

const ResumeBlock = ({ children }: ResumeBlockProps) => {
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.4 })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) controls.start('visible')
        else controls.start('exit')
    }, [inView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            exit="exit"
            variants={fadeVariants}
            className="transition-all w-full"
        >
            {children}
        </motion.div>
    )
}

const ResumeSection = () => {
    return (
        <motion.div
            className="w-full min-h-screen flex items-center justify-center px-4 py-10 bg-transparent"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
        >
            <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden bg-transparent backdrop-blur-lg border border-[#eafaf4] dark:border-[#1bbb8b]">
                {/* Left Panel */}
                <div className="w-full md:w-[38%] p-8 bg-gradient-to-br from-[#1bbb8b] via-[#0d1b17] to-[#1bbb8b] text-white rounded-l-2xl flex flex-col gap-8 items-center justify-center">
                    <ResumeBlock>
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src="/images/avatar.jpg"
                                alt="Joel Adeyoju"
                                width={110}
                                height={110}
                                className="rounded-full border-4 border-[#1bbb8b] shadow-lg mb-2"
                            />
                            <h2 className="text-2xl font-extrabold tracking-tight">Joel Adeyoju</h2>
                            <p className="text-[#1bbb8b] text-base font-medium">Frontend Developer</p>
                        </div>
                    </ResumeBlock>

                    <ResumeBlock>
                        <div className="text-base space-y-3 w-full">
                            <div className="flex gap-3 items-center hover:text-[#1bbb8b] transition">
                                <FaEnvelope className="text-lg" /> <span>adeyojuibukunoluwa1@gmail.com</span>
                            </div>
                            <div className="flex gap-3 items-center hover:text-[#1bbb8b] transition">
                                <FaPhone className="text-lg" /> <span>08058509717</span>
                            </div>
                            <div className="flex gap-3 items-center hover:text-[#1bbb8b] transition">
                                <FaMapMarkerAlt className="text-lg" /> <span>Nigeria</span>
                            </div>
                            <div className="flex gap-3 items-center hover:text-[#1bbb8b] transition">
                                <FaGlobe className="text-lg" />
                                <a href="https://myportfolio24-drab.vercel.app/portfolio" className="underline">Portfolio</a>
                            </div>
                            <div className="flex gap-3 items-center hover:text-[#1bbb8b] transition">
                                <FaLinkedin className="text-lg" />
                                <a href="https://linkedin.com/in/joeteck" className="underline">linkedin.com/in/joeteck</a>
                            </div>
                            <div className="flex gap-3 items-center hover:text-[#1bbb8b] transition">
                                <FaGithub className="text-lg" />
                                <a href="https://github.com/joeteck" className="underline">github.com/joeteck</a>
                            </div>
                        </div>
                    </ResumeBlock>

                    <ResumeBlock>
                        <div className="w-full">
                            <h3 className="font-semibold text-lg mb-2">Profile</h3>
                            <p className="text-base leading-relaxed text-white/90">
                                Results-driven Frontend Engineer with a BSc in IT and hands-on experience delivering business-driven tech. Skilled in building user-friendly apps, integrating payment systems, and solving problems with impact.
                            </p>
                        </div>
                    </ResumeBlock>

                    <ResumeBlock>
                        <div className="w-full">
                            <h3 className="font-semibold text-lg mb-2">Skills</h3>
                            <div className="text-base mt-2 space-y-2">
                                <p><strong>Languages:</strong> JavaScript, TypeScript, Python, Java</p>
                                <p><strong>Web/App:</strong> React, Next.js, Django, React Native, Tailwind</p>
                                <p><strong>Backend:</strong> MySQL, Oracle, RESTful API, GraphQL</p>
                                <p><strong>Tools:</strong> Git, CMS, VS Code, Figma</p>
                                <p><strong>Concepts:</strong> OOP, DSA, UX/UI, Agile</p>
                                <p><strong>Soft Skills:</strong> Project Mgmt, Communication, Collaboration</p>
                            </div>
                        </div>
                    </ResumeBlock>
                </div>

                {/* Right Panel */}
                <div className="w-full md:w-[62%] p-10 bg-white/90 dark:bg-[#f5f5f5]/90 text-neutral-900 rounded-r-2xl space-y-8 flex flex-col justify-center">
                    <ResumeBlock>
                        <h3 className="text-[#1bbb8b] font-bold text-2xl mb-3 tracking-tight">Education</h3>
                        <p className="text-base whitespace-pre-line leading-relaxed">
                            Bachelor of Science, Information Technology  
                            Methodist University Ghana (2019 – 2023)  
                            Built strong foundation in software, algorithms, networking, and project-based teamwork.
                        </p>
                    </ResumeBlock>

                    <ResumeBlock>
                        <h3 className="text-[#1bbb8b] font-bold text-2xl mb-3 tracking-tight">Experience</h3>
                        <ul className="text-base space-y-3">
                            <li><strong>Fasyl Technology Ghana</strong> – Frontend Consultant (React, Angular, Python)</li>
                            <li><strong>RCCG Glorious Ambassadors</strong> – Media Team Director (2021–2024)</li>
                            <li><strong>MUITSA</strong> – Academic Head: Python, C++, mentorship and project support</li>
                        </ul>
                    </ResumeBlock>

                    <ResumeBlock>
                        <h3 className="text-[#1bbb8b] font-bold text-2xl mb-3 tracking-tight">Projects</h3>
                        <ul className="text-base space-y-2 list-disc list-inside">
                            <li>Portfolio Website (Next.js + TailwindCSS)</li>
                            <li>Blockchain Land Registry (Solidity + React)</li>
                            <li>Face Recognition (Python + OpenCV)</li>
                            <li>Home Service App, Salon Booking, Snake Game</li>
                        </ul>
                    </ResumeBlock>

                    <ResumeBlock>
                        <h3 className="text-[#1bbb8b] font-bold text-2xl mb-3 tracking-tight">Certificates</h3>
                        <ul className="text-base list-disc list-inside space-y-1">
                            <li>Java Fundamentals (Springboard)</li>
                            <li>IBM/Cognitive Class: Data Science Tools, Python 101, Data Analysis</li>
                            <li>Data Visualization & Methodology</li>
                        </ul>
                    </ResumeBlock>
                </div>
            </div>
        </motion.div>
    )
}

export default ResumeSection
