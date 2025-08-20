"use client"

import Image from "next/image"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa"
import { Heading } from "@/components/globals/typography/Heading"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function MeetJoel() {
  // Track mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animation for natural movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Update mouse position on move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      // Normalize to -1 … 1 range
      const x = (e.clientX / innerWidth) * 2 - 1
      const y = (e.clientY / innerHeight) * 2 - 1
      mouseX.set(x * 30) // adjust intensity
      mouseY.set(y * 30)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="relative pt-10 md:min-h-screen h-full w-full flex flex-col items-center bg-[#fcfffe] dark:bg-[#04130d] px-0">
      {/* Tag */}
      <span className="relative text-[10px] font-medium px-3 py-1 rounded-full bg-[#0e2f25]/20 dark:bg-primaryDarklight text-[#0e2f25] dark:text-primaryLight backdrop-blur-sm z-30">
        Profile
      </span>

      {/* Heading */}
      <div className="relative z-30 text-center my-6 mb-14 ">
        <Heading
          variant="sectionTitle"
          className="pb-2 font-medium text-center text-primary dark:text-primary-300"
        >
          Meet Joel
        </Heading>
      </div>

      {/* Main Section */}
      <section className="w-full relative flex items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center text-center md:text-left"
        >
          {/* Left side - Intro */}
          <motion.div variants={fadeUp} className="w-full space-y-4 md:col-span-1">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
              I’m a <strong className="text-[#1BBB8B]">Frontend Developer</strong>
              specialising in building accessible, user-friendly, and delightful
              experiences. Passionate about bridging design and code with smooth
              motion.
            </p>

            {/* Social links */}
            <div className="flex justify-center md:justify-start gap-3 text-sm">
              <a href="mailto:adeyojuibukunoluwa1@gmail.com" className="hover:text-[#1BBB8B] transition">
                <FaEnvelope />
              </a>
              <a href="https://github.com/joeteck" target="_blank" rel="noopener noreferrer" className="hover:text-[#1BBB8B] transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/joeteck" target="_blank" rel="noopener noreferrer" className="hover:text-[#1BBB8B] transition">
                <FaLinkedin />
              </a>
              <a href="https://myportfolio24-drab.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1BBB8B] transition">
                <FaGlobe />
              </a>
            </div>
          </motion.div>

          {/* Middle - Profile Image with Animated Rings */}
          <motion.div
            variants={fadeUp}
            className="w-full md:col-span-1 flex justify-center relative"
          >
            <motion.div
              className="relative w-40 h-40 md:w-52 md:h-52"
              style={{ x: springX, y: springY }} // Rings follow cursor
            >
              {/* Rings */}
              {[1, 2, 3].map((ring, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-[#1BBB8B]/40"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{
                    scale: [1, 1.6, 2],
                    opacity: [0.8, 0.4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Profile Image */}
              <Image
                src="/images/team/joel.jpg"
                alt="Joel Adeyoju"
                fill
                className="object-cover rounded-full border-2 border-white dark:border-neutral-900 shadow-lg relative z-10"
              />
            </motion.div>
          </motion.div>

          {/* Right side - Name */}
          <motion.div variants={fadeUp} className="w-full space-y-1 md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Joel <br /> Adeyoju
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs">
              (yes, that’s me 👋)
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
