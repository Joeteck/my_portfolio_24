import { Heading } from "@/components/globals/typography/Heading";
import ProjectCard from "./ProjectCard";
import { FaReact, FaNodeJs, FaJava, FaHardHat, FaGithub, FaKey } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiExpo, SiSolidity, SiNextdotjs, SiCss3, SiMockserviceworker, SiClerk, SiExpress, SiAuth0 } from "react-icons/si";
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
        description: "A decentralized application for land registration using blockchain technology.",
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
        <section className="relative flex flex-col justify-center items-center z-30 w-full md:w-[75%]  py-20 bg-transparent ">
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

            <div className="flex flex-wrap justify-center gap-12 mt-10">
                {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </section>
    );
}