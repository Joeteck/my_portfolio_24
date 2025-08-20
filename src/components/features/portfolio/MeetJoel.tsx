"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function MeetJoel() {
  return (
    <section className="relative h-[95vh] flex items-center justify-center bg-neutral-50 dark:bg-[#04130d] px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center text-center md:text-left"
      >
        {/* Left side - Intro */}
        <motion.div variants={fadeUp} className="space-y-4 md:col-span-1">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
            I’m a <strong className="text-[#1BBB8B]">Frontend Developer</strong> 
            specialising in building accessible, user-friendly, and delightful experiences.  
            Passionate about bridging design and code with smooth motion.
          </p>

          {/* Social links */}
          <div className="flex justify-center md:justify-start gap-3 text-base">
            <a href="mailto:adeyojuibukunoluwa1@gmail.com" className="hover:text-[#1BBB8B] transition"><FaEnvelope /></a>
            <a href="https://github.com/joeteck" target="_blank" rel="noopener noreferrer" className="hover:text-[#1BBB8B] transition"><FaGithub /></a>
            <a href="https://linkedin.com/in/joeteck" target="_blank" rel="noopener noreferrer" className="hover:text-[#1BBB8B] transition"><FaLinkedin /></a>
            <a href="https://myportfolio24-drab.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1BBB8B] transition"><FaGlobe /></a>
          </div>
        </motion.div>

        {/* Middle - Profile Image */}
        <motion.div variants={fadeUp} className="relative md:col-span-1 flex justify-center">
          <div className="relative w-40 h-40 md:w-52 md:h-52">
            <Image
              src="/images/team/joel.jpg"
              alt="Joel Adeyoju"
              fill
              className="object-cover rounded-full border-2 border-white dark:border-neutral-900 shadow-lg"
            />
            {/* Accent shape behind image */}
            <div className="absolute -inset-3 rounded-full bg-[#1BBB8B]/20 -z-10"></div>
          </div>
        </motion.div>

        {/* Right side - Name */}
        <motion.div variants={fadeUp} className="space-y-1 md:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            Joel <br /> Adeyoju
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs">(yes, that’s me 👋)</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
