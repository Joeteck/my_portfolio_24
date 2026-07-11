import { Heading } from "@/components/globals/typography/Heading";
import ProjectCard from "./ProjectCard";
import { FaReact, FaNodeJs, FaJava, FaHardHat, FaGithub, FaKey } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiExpo, SiSolidity, SiNextdotjs, SiCss3, SiMockserviceworker, SiClerk, SiExpress, SiAuth0, SiPython, SiAwslambda, SiAmazons3, SiAmazondynamodb, SiTypescript, SiSupabase, SiPrisma, SiPostgresql } from "react-icons/si";
import { Paragraph } from "@/components/globals/typography/Paragraph";

const projects = [
    {
        label: "Portfolio Website",
        image: "/images/project/portfolio_2.png",
        github: "https://github.com/Joeteck/my_portfolio_24",
        link: "https://joeteck.vercel.app/portfolio",
        description: "My personal portfolio website showcasing my projects and skills.",
        tools: [
            { name: "NextJs", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Framer Motion", icon: <SiFramer /> },
            { name: "Node.js", icon: <FaNodeJs /> },
        ],
    },
    {
        label: "KANSGP Store — Multi-Vendor Agritech E-Commerce",
        image: "/images/project/kansgp_store.png",
        github: "https://github.com/Joeteck/kans-store",
        link: "https://kans-store.vercel.app/",
        description:
            "A full-stack multi-vendor agritech marketplace connecting agricultural product vendors with buyers. Features vendor dashboards, dynamic ad/banner management, and live payment processing.",
        tools: [
            { name: "Next.js 14", icon: <SiNextdotjs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Prisma", icon: <SiPrisma /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "Clerk", icon: <SiClerk /> },
        ],
    },
    {
        label: "Scripture Memory App",
        image: "/images/project/scripture_memory.jpeg",
        github: "https://github.com/Joeteck/scripture-memorizing-app",
        description:
            "A cross-platform mobile app that helps users memorize Scripture through personalized learning paths, swipe-based verse review, notification reminders, and progress tracking.",
        tools: [
            { name: "React Native", icon: <FaReact /> },
            { name: "Expo", icon: <SiExpo /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Supabase", icon: <SiSupabase /> },
        ],
    },
    {
        label: "Multilingual AI Platform",
        image: "/images/project/nldb.png",
        // link: "https://nigerian-languages-data-bank.vercel.app/",
        description:
            "An AI-powered platform for collecting, preserving, and processing Nigerian and African indigenous language data for NLP and machine learning research. Built in partnership with Covenant University Nigeria. Full platform is private — data collection interface available publicly.",
        tools: [
            { name: "React", icon: <FaReact /> },
            { name: "Python", icon: <SiPython /> },
            { name: "AWS Lambda", icon: <SiAwslambda /> },
            { name: "AWS S3", icon: <SiAmazons3 /> },
            { name: "DynamoDB", icon: <SiAmazondynamodb /> },
        ],
    },
    {
        label: "Idea Pocket Website",
        image: "/images/project/portfolio.png",
        github: "https://github.com/Joeteck/idea_pocket_app",
        description: "A web application for saving and organizing ideas.",
        tools: [
            { name: "NextJs", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Framer Motion", icon: <SiFramer /> },
            { name: "Express.js", icon: <SiExpress /> },
        ],
    },
    {
        label: "Home Service App",
        image: "/images/project/home_service.jpg",
        github: "https://github.com/Joeteck/home_service_app",
        link: "https://home-service-app.vercel.app/",
        description: "An application connecting users with home service providers.",
        tools: [
            { name: "Expo", icon: <SiExpo /> },
            { name: "React Native", icon: <FaReact /> },
            { name: "Clerk (Auth)", icon: <SiClerk /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        ],
    },
    {
        label: "Blockchain Based Land Registration System",
        image: "/images/project/blockchain_home.png",
        github: "https://github.com/Joeteck/Land-system-based-on-blockcahin-",
        description:
            "A decentralized application for secure land registration and ownership verification using smart contracts. Case study: Ghana.",
        tools: [
            { name: "Solidity", icon: <SiSolidity /> },
            { name: "Hardhat", icon: <FaHardHat /> },
            { name: "React", icon: <FaReact /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        ],
    },
    {
        label: "Movie Search App",
        image: "/images/project/movie_search.png",
        github: "https://github.com/Joeteck/Movie-Search-Web-App",
        description: "An application for searching and discovering movies.",
        tools: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "MockAPI", icon: <SiMockserviceworker /> },
            { name: "CSS", icon: <SiCss3 /> },
        ],
    },
    {
        label: "Snake Game",
        image: "/images/project/snake_game.jpg",
        github: "https://github.com/Joeteck/SnakeGame",
        description: "A classic snake game built with Java.",
        tools: [
            { name: "Java", icon: <FaJava /> },
        ],
    },
];

export default function ProjectsSection() {
    return (
        <section className="flex flex-col justify-center items-center z-30 w-full  py-20 bg-transparent ">
                {/* Section Title */}
            <span className="relative text-[10px] font-bold px-3 py-1 rounded-full bg-neutral-300 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 z-30 shadow-lg">
                PROJECTS
            </span>
            
            {/* Heading + Paragraph */}
                <div className="relative z-30 text-center my-6 max-w-md ">
                    <Heading variant="sectionTitle" className="pb-2 text-center text-primary dark:text-primary-300">
                        Creative Coding
                    </Heading>
                    <Paragraph className="text-neutral-600 dark:text-neutral-300 font-semibold text-center">
                        Create smooth, high-performance project with various tech — Advance, Medium, Basic
                    </Paragraph>
                </div>

            <div className=" w-full h-fit flex flex-wrap justify-center gap-12 mt-10">
                {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </section>
    );
}