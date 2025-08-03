// ResumeSection.tsx
'use client'

import Image from 'next/image'
import { motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'
import { useRef, useEffect, ReactNode } from 'react'
import { Header } from './Header'
import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'

const sectionVariants = [
  {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 },
  },
  {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 60 },
  },
  {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 60 },
  },
  {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
]

const ResumeBlock = ({ children, index }: { children: ReactNode; index: number }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
    else controls.start('exit')
  }, [inView])

  const variant = sectionVariants[index % sectionVariants.length]

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

const ResumeSection = () => {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { amount: 0.2 })
  const sectionControls = useAnimation()

  useEffect(() => {
    sectionInView ? sectionControls.start('visible') : sectionControls.start('exit')
  }, [sectionInView])

  return (
    <motion.div
      ref={sectionRef}
      className="min-h-screen px-4 py-12 bg-white dark:bg-[#04130d] text-neutral-900 dark:text-white"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      initial="hidden"
      animate={sectionControls}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <ResumeBlock index={0}>
            <div className="flex flex-col items-left">
              <Heading variant='title' weight='medium' className='pb-0 mb-0'>Joel Adeyoju</Heading>
              <Heading variant='sectionTitle' weight='light' className="pt-0 mt-0">Frontend Developer</Heading>
              <Image src="/images/avatar.jpg" alt="Joel Adeyoju" width={120} height={120} className=" mt-2 rounded-full" />
            </div>
          </ResumeBlock>

          <ResumeBlock index={1}>
            <div className="space-y-2">
              {[
                { icon: <FaEnvelope className='text-xs' />, text: 'adeyojuibukunoluwa1@gmail.com' },
                { icon: <FaPhone className='text-xs' />, text: '08058509717' },
                { icon: <FaMapMarkerAlt className='text-xs' />, text: 'Nigeria' },
                { icon: <FaGlobe className='text-xs' />, text: 'myportfolio24-drab.vercel.app' },
                { icon: <FaLinkedin className='text-xs' />, text: 'linkedin.com/in/joeteck' },
                { icon: <FaGithub className='text-xs' />, text: 'github.com/joeteck' },
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-center   hover:text-[#1bbb8b] transition">
                  {item.icon}<Paragraph className='text-base whitespace-pre-line leading-relaxed'>{item.text}</Paragraph>
                </div>
              ))}
            </div>
          </ResumeBlock>

          <ResumeBlock index={2}>
            <div>
              <h3 className="text-lg font-semibold mb-1">Summary</h3>
              <p className="text-sm leading-relaxed">
                Frontend Engineer with a BSc in IT. Passionate about turning ideas into usable experiences. Skilled in React, TypeScript, Next.js, and building polished interfaces.
              </p>
            </div>
          </ResumeBlock>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          {[
            {
              title: 'Education',
              content: 'BSc. Information Technology, Methodist University Ghana (2019–2023)',
            },
            {
              title: 'Experience',
              content: 'Fasyl Technology Ghana – Consultant (React/Angular/Python)\nRCCG Media Director – Oversaw production, streaming\nMUITSA Academic Head – Led study groups and tutoring',
            },
            {
              title: 'Projects',
              content: 'Portfolio Website\nBlockchain Land Registry\nFace Recognition – OpenCV\nSalon App & Snake Game',
            },
            {
              title: 'Certificates',
              content: 'Java Fundamentals, IBM Data Science, Visualization, Python 101, Cognitive Class.ai',
            },
          ].map((section, i) => (
            <ResumeBlock index={i + 3} key={section.title}>
              <div>
                <h3 className="text-lg font-semibold text-[#1bbb8b] mb-2">{section.title}</h3>
                <p className="text-sm whitespace-pre-line leading-relaxed">{section.content}</p>
              </div>
            </ResumeBlock>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ResumeSection