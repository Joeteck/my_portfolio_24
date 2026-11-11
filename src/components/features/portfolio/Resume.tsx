// ResumeSection.tsx
"use client"

import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, ReactNode } from "react"
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaGlobe,
  FaUserCircle,
  FaDochub,
  FaIdCard,
  FaBrain,
  FaTools,
  FaBook,
  FaBox,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaStamp,
  FaLink,
  FaProjectDiagram
} from "react-icons/fa"
import { Heading } from "@/components/globals/typography/Heading"
import SkillRating from "./SkillRating"

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.4 } }
}

const ResumeBlock = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("exit")
  }, [inView])

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={controls} className="w-full">
      {children}
    </motion.div>
  )
}

export default function ResumeSection() {
  return (
    <section       className="min-h-screen px-0 py-0 bg-white dark:bg-[#04130d] text-neutral-900 dark:text-white">
      <div className="max-w-5xl mx-0 sm:mx-auto grid md:grid-cols-2 gap-0">

        {/* LEFT PANEL */}
        <div className="flex flex-col py-24 pl-4 sm:pl-24 sm:pr-14 pr-4 bg-[#143028] text-primaryLight w-full">
          {/* Profile */}
          <ResumeBlock>
            <div className="flex flex-col items-left">
              <h2 className='text-4xl font-medium leading-relaxed text-left pb-0 mb-0'>Joel Adeyoju</h2>
              <h3 className="text-2xl font-light text-left pt-0 mt-0">Frontend Developer</h3>
              <Image src="/images/team/joel.jpg" alt="Joel Adeyoju" width={500} height={500} className=" mt-3 rounded-full w-32 h-32 object-cover" />
            </div>
          </ResumeBlock>

          {/* Contact */}
          <ResumeBlock>
            <div className="mt-4 mb-10 space-y-3 text-sm tracking-wider">
              {[
                { icon: <FaEnvelope />, text: "adeyojuibukunoluwa1@gmail.com" },
                { icon: <FaPhone />, text: "08058509717" },
                { icon: <FaMapMarkerAlt />, text: "Nigeria" },
                { icon: <FaLink />, text: "My Portfolio", link: "https://myportfolio24-drab.vercel.app/portfolio" },
                { icon: <FaLinkedin />, text: "Linkedin", link: "https://linkedin.com/in/joeteck" },
                { icon: <FaGithub />, text: "Github", link: "https://github.com/joeteck" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 hover:text-primaryLight transition"
                >
                  {item.icon}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>

          </ResumeBlock>

          {/* Profile */}
          <ResumeBlock>
            <div>
              <h3 className="bg-[#1bbb8b]/10 text-primaryLight font-bold text-lg tracking-widest leading-relaxed text-center py-1 my-2 rounded">
                <FaIdCard className="inline mr-2" />
                Profile</h3>
              <p className="text-sm leading-relaxed ">
                <strong>Results-driven Frontend Engineer</strong> with a BSc in IT and hands-on experience delivering tech solutions that drive business success. Skilled in building user-friendly apps, integrating payment gateways, and improving efficiency through data-driven decisions.
                <br /><br />
                Continuously learning and staying up to date with industry trends through tech communities and workshops. Known for strong problem-solving, project management, and collaboration skills.
              </p>
            </div>
          </ResumeBlock>

          {/* Skills */}
          <ResumeBlock>
            <div className="my-5">
              <h3 className="bg-[#1bbb8b]/10 text-primaryLight font-bold text-lg tracking-widest leading-relaxed text-center py-1 my-2 rounded">
                <FaTools className="inline mr-2" />
                Skill</h3>
                <div className="grid grid-cols-1 gap-4 mt-4">
                <SkillRating title="Programming Languages" items={["JavaScript", "TypeScript", "Python", "Java"]} rating={4} />
                <SkillRating title="Web/App Development" items={["React", "Next.js", "Django", "React Native", "TailwindCSS"]} rating={4} />
                <SkillRating title="Database & Backend" items={["MySQL", "Oracle DB", "REST API", "GraphQL"]} rating={3} />
                <SkillRating title="Software & Tools" items={["Git/GitHub", "CMS", "VS Code", "Figma"]} rating={3} />
                <SkillRating title="Concepts & Methodologies" items={["OOP", "DSA", "Agile", "UX/UI", "API Integration"]} rating={4} />
                <SkillRating title="Soft Skills" items={["Project Management", "Communication", "Teamwork"]} rating={4} />
              </div>

            </div>
          </ResumeBlock>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col gap-10 sm:pr-[50px] sm:pl-14  pr-4 py-24  pl-4 text-[#143028] bg-primaryLight">

        {/* Education */}
        <ResumeBlock>
          <div>
            <h3 className="bg-[#1bbb8b]/10 text-[#143028] font-bold text-lg tracking-widest leading-relaxed text-center py-1 mb-4 rounded">
              <FaGraduationCap className="inline mr-2" />
              Education
            </h3>

            <div className="space-y-4 text-sm">
              {[
                {
                  degree: "Bachelor of Science in Information Technology",
                  institution: "Methodist University Ghana",
                  period: "2019 – 2023",
                  location: "Accra, Ghana",
                  link: "https://mug.edu.gh/",
                  details:
                    "Gained a strong foundation in software engineering, algorithms, networking, and databases. Built practical skills through projects, MUITSA leadership, and hackathon participation.",
                },
              ].map((edu, i) => (
                <div key={i}>
                  <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-[#143028] hover:text-[#154e3c] dark:hover:text-[#205d4a] transition">
                    <h4 className="text-base font-semibold">
                      {edu.degree}{" "}
                      <span className="font-normal">
                        — {edu.institution} <span className="text-xs text-neutral-500">({edu.period})</span>
                      </span>
                    </h4>
                  </a>
                  <p className="text-xs italic text-neutral-600 dark:text-neutral-400 ml-1">{edu.location}</p>
                  <p className="text-sm leading-relaxed mt-1 ml-2">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </ResumeBlock>


          {/* Experience */}
          <ResumeBlock>
            <div >
              <h3 className="bg-[#1bbb8b]/10 text-[#143028] font-bold text-lg tracking-widest leading-relaxed text-center py-1 mb-4 rounded">
                <FaBriefcase className="inline mr-2" />
                Professional Experience
              </h3>

              <div className="space-y-5 text-sm">
                {[
                  {
                    company: "RCCG Glorious Ambassadors",
                    role: "Media Team Director",
                    period: "2021 – 2024",
                    details:
                      "Led the media team in managing live-streaming, audiovisual production, and multimedia content for services and events. Streamlined media operations, trained team members, and enhanced visual communication through high-quality video production and graphic design.",
                  },
                  {
                    company: "Fasyl Technology Ghana",
                    role: "Frontend Consultant",
                    period: "2023 – 2024",
                    details:
                      "Developed and optimized frontend features for internal and client-facing support systems using React, Next.js, Angular, and Python. Collaborated with cross-functional teams to improve user experience, ensure code quality, and deliver project goals.",
                  },
                  {
                    company: "MUITSA",
                    role: "Academic Head",
                    period: "2022 – 2023",
                    details:
                      "Organized academic programs and study sessions for IT students, provided tutoring in Python, C++, and data structures, and promoted collaborative learning. Supported peers in project development and fostered a strong academic community within the department.",
                  },
                ].map((exp, i) => (
                  <div key={i}>
                    <p className="text-base font-semibold">
                      {exp.company} — <span className="font-normal">{exp.role}</span>
                      <span className="text-xs text-neutral-500 ml-2">({exp.period})</span>
                    </p>
                    <p className="text-sm leading-relaxed ml-2">{exp.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </ResumeBlock>

          {/* Projects */}
          <ResumeBlock>
            <div>
              <h3 className="bg-[#1bbb8b]/10 text-[#143028] font-bold text-lg tracking-widest leading-relaxed text-center py-1 mb-4 rounded">
                <FaProjectDiagram className="inline mr-2" />
                Projects
              </h3>

              <div className="space-y-5 text-sm">
                {[
                  {
                    title: "Portfolio Website",
                    stack: "Next.js, TypeScript, Tailwind CSS, Framer Motion",
                    details:
                      "Showcases projects and skills with a clean, responsive UI and smooth animations.",
                    link: "https://myportfolio24-drab.vercel.app/",
                  },
                  {
                    title: "Home Service Mobile App",
                    stack: "React Native, Firebase",
                    details:
                      "Mobile platform for booking and managing home services efficiently.",
                  },
                  {
                    title: "Blockchain-Based Land Registration System",
                    stack: "React Vite, Tailwind CSS, Solidity",
                    details:
                      "Secure land record management system using Ghana as a case study.",
                  },
                  {
                    title: "Face Recognition Program",
                    stack: "Python, OpenCV",
                    details:
                      "Facial identification system implemented with computer vision techniques.",
                  },
                  {
                    title: "Online Salon Booking System",
                    stack: "React, Node.js, MongoDB",
                    details:
                      "Multi-salon application enabling online bookings, scheduling, and management.",
                  },
                  {
                    title: "Snake Game",
                    stack: "Java, OOP",
                    details:
                      "Classic snake game built with object-oriented programming principles.",
                  },
                ].map((proj, i) => (
                  <div key={i}>
                    <h4 className="text-base font-semibold">
                      {proj.link ? (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition"
                        >
                          {proj.title}
                        </a>
                      ) : (
                        proj.title
                      )}
                    </h4>
                    <p className="text-xs italic text-neutral-600 dark:text-neutral-400 ml-1">
                      {proj.stack}
                    </p>
                    <p className="text-sm leading-relaxed mt-1 ml-2">{proj.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </ResumeBlock>

          {/* Certifications */}
          <ResumeBlock>
            <div>
              <h3 className="bg-[#1bbb8b]/10 text-[#143028] font-bold text-lg tracking-widest leading-relaxed text-center py-1 mb-4 rounded">
                <FaCertificate className="inline mr-2" />
                Certifications
              </h3>

              <div className="space-y-5 text-sm">
                {[
                  {
                    title: "Fundamentals of Java",
                    provider: "Digital Skills Bootcamp '21 – Springboard Ghana",
                    date: "Oct 2021",
                  },
                  {
                    title: "CARES Youth Dialogues",
                    provider: "Springboard Ghana",
                    date: "Oct 2021",
                  },
                  {
                    title: "Data Science Methodology",
                    provider: "IBM / Cognitive Class.ai",
                  },
                  {
                    title: "Introduction to Data Science",
                    provider: "IBM / Cognitive Class.ai",
                  },
                  {
                    title: "Data Science Tools",
                    provider: "IBM / Cognitive Class.ai",
                  },
                  {
                    title: "Data Analysis with Python",
                    provider: "IBM / Cognitive Class.ai",
                  },
                  {
                    title: "Python 101 for Data Science",
                    provider: "IBM / Cognitive Class.ai",
                  },
                  {
                    title: "Data Visualization with Python",
                    provider: "IBM / Cognitive Class.ai",
                  },
                ].map((cert, i) => (
                  <div key={i}>
                    <h4 className="text-base font-semibold">{cert.title}</h4>
                    <p className="text-xs italic text-neutral-600 dark:text-neutral-400 ml-1">
                      {cert.provider} {cert.date ? `• ${cert.date}` : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ResumeBlock>

        </div>
      </div>
    </section>
  )
}
