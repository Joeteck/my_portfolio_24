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
    <section      className="min-h-screen px-0 py-0 bg-white dark:bg-[#04130d] text-neutral-900 dark:text-white">
      <div className="max-w-5xl mx-0 sm:mx-auto grid md:grid-cols-2 gap-0">

        {/* LEFT PANEL */}
        <div className="flex flex-col py-24 pl-4 sm:pl-24 sm:pr-14 pr-4 bg-[#143028] text-primaryLight w-full">
          {/* Profile */}
          <ResumeBlock>
            <div className="flex flex-col items-left">
              <h2 className='text-4xl font-medium leading-relaxed text-left pb-0 mb-0'>Joel Adeyoju</h2>
              <h3 className="text-2xl font-light text-left pt-0 mt-0">Software Engineer | Full-Stack | Cloud & AWS</h3>
              <Image src="/images/team/joel.jpg" alt="Joel Adeyoju" width={500} height={500} className=" mt-3 rounded-full w-32 h-32 object-cover" />
            </div>
          </ResumeBlock>

          {/* Contact */}
          <ResumeBlock>
            <div className="mt-4 mb-10 space-y-3 text-sm tracking-wider">
              {[
                { icon: <FaEnvelope />, text: "joe58509717@gmail.com" },
                { icon: <FaPhone />, text: "+234 805 850 9717" },
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
                Full-stack software engineer with 3+ years of experience delivering scalable web, mobile and cloud solutions across the full SDLC. Led development of a multi-vendor e-commerce platform and architected a serverless AWS platform with 50+ data collectors across 100+ Nigerian languages.
                <br /><br />
                Pursuing a Master&apos;s in Project Management; Google PM Certificate in progress. Skilled in React, Next.js, TypeScript, Node.js, PostgreSQL, and AWS with strong cross-functional leadership.
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
                <SkillRating title="Languages" items={["JavaScript", "TypeScript", "Python", "SQL"]} rating={4} />
                <SkillRating title="Frontend" items={["React", "Next.js", "React Native", "Angular", "Tailwind CSS"]} rating={4} />
                <SkillRating title="Backend & Data" items={["Node.js", "REST APIs", "PostgreSQL", "DynamoDB", "Prisma ORM"]} rating={4} />
                <SkillRating title="Cloud & DevOps" items={["AWS (Lambda, S3, CloudFront, API Gateway, DynamoDB, IAM, VPC)", "Git/GitHub", "EAS Build", "CI/CD"]} rating={4} />
                <SkillRating title="Payments & Auth" items={["Flutterwave v3", "Clerk", "OAuth 2.0", "Supabase"]} rating={3} />
                <SkillRating title="AI Tools & Practices" items={["Claude", "GitHub Copilot", "Cursor", "Sentry", "Jest", "SDLC", "Agile/Scrum"]} rating={4} />
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
                  degree: "Master's in Project Management",
                  institution: "Rome Business School Nigeria",
                  period: "Oct 2026 – Oct 2027",
                  location: "Nigeria",
                  details: "In progress.",
                },
                {
                  degree: "Bachelor of Science in Information Technology",
                  institution: "Methodist University Ghana",
                  period: "2019 – 2023",
                  location: "Accra, Ghana",
                  link: "https://mug.edu.gh/",
                  details:
                    "Gained a strong foundation in software engineering, algorithms, networking, and databases. Served as Academic Head, MUITSA (2022/2023): organised programmes and tutored peers in Python, Java, C++ and data structures.",
                },
              ].map((edu, i) => (
                <div key={i}>
                  {edu.link ? (
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-[#143028] hover:text-[#154e3c] dark:hover:text-[#205d4a] transition">
                      <h4 className="text-base font-semibold">
                        {edu.degree}{" "}
                        <span className="font-normal">
                          — {edu.institution} <span className="text-xs text-neutral-500">({edu.period})</span>
                        </span>
                      </h4>
                    </a>
                  ) : (
                    <h4 className="text-base font-semibold">
                      {edu.degree}{" "}
                      <span className="font-normal">
                        — {edu.institution} <span className="text-xs text-neutral-500">({edu.period})</span>
                      </span>
                    </h4>
                  )}
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
                    company: "St Stephen Schools",
                    role: "Computer Studies & Robotics Teacher (NYSC)",
                    period: "Aug 2025 – Jun 2026",
                    details:
                      "Planned and delivered programming and robotics instruction to 80+ pupils, tracking progress and adapting delivery; authored NERDC-aligned lesson notes for Primary 4 and JSS 2 that the school adopted into its curriculum.",
                  },
                  {
                    company: "Inansbay",
                    role: "Digital Marketing & Technical Lead",
                    period: "Sep 2025 – Feb 2026",
                    details:
                      "Designed and built multi-stage sales funnels, lead-capture forms and landing pages on WordPress with integrated analytics, delivering product-specific features for 10+ products and contributing to 15% company growth. Translated business requirements into technical roadmaps and specifications and managed deliverables against agreed milestones.",
                  },
                  {
                    company: "Fasyl Technology Ghana",
                    role: "Frontend Engineer (Consultant)",
                    period: "Aug 2023 – Feb 2024",
                    details:
                      "Developed and shipped frontend features using React, Next.js, and Angular across 4+ core business modules, including HR, sales, marketing, and departmental management. Contributed to a centralized enterprise management system improving operational coordination and workflow visibility.",
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
                    title: "KANSGP Store | Multi-vendor farm e-commerce",
                    stack: "Next.js 14, TypeScript, Prisma, PostgreSQL, Flutterwave v3",
                    details:
                      "Led and coordinated end-to-end development of a multi-vendor e-commerce marketplace. Led Flutterwave v3 payment integration (OAuth 2.0 token exchange, direct card charging, webhook handling) and delivered multi-vendor dashboards, a dynamic ad/banner system, and mobile-responsive buyer experiences.",
                    link: "https://myportfolio24-drab.vercel.app/",
                  },
                  {
                    title: "Nigerian Language Data Bank (Covenant University)",
                    stack: "AWS, Python, Lambda, S3, DynamoDB, CloudFront, API Gateway",
                    details:
                      "Architected a scalable serverless AWS pipeline that has onboarded 50+ registered data collectors and gathered data in 100+ Nigerian languages toward a target of 700+ for AI training.",
                  },
                  {
                    title: "Scripture Memorization App",
                    stack: "React Native, TypeScript, Expo SDK 56, Supabase, expo-sqlite",
                    details:
                      "Built a cross-platform mobile app (iOS and Android) with Bible verse memorization features and push notifications, resolving EAS cloud build failures, SQLite transaction race conditions, and Expo SDK mismatches.",
                  },
                  {
                    title: "Blockchain-Based Land Registration System",
                    stack: "React, Tailwind CSS, Solidity",
                    details:
                      "Led a team of 4 members in building a decentralised land-record system using Ghana as a case study on smart contracts for transparent property title management.",
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
                    title: "Google Project Management Professional Certificate",
                    provider: "Google",
                    date: "In Progress",
                  },
                  {
                    title: " (PMI)",
                    provider: "PMI",
                    date: "In Progress",
                  },
                  {
                    title: "IBM Data Science (6 Certificates)",
                    provider: "IBM / Cognitive Class.ai",
                  },
                  {
                    title: "Fundamentals of Java & Digital Skills Bootcamp",
                    provider: "Springboard Ghana",
                    date: "Oct 2021",
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