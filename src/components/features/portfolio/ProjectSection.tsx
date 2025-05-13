
import { FaReact, FaNodeJs, FaJava, FaHardHat, FaGithub, FaKey } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiExpo, SiSolidity, SiNextdotjs, SiCss3, SiMockserviceworker, SiClerk, SiExpress, SiAuth0 } from "react-icons/si";
import Projects from "./Projects";

const projects = [
    {
        label: "Portfolio Website",
        tools: [
        { name: "NextJs", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        ],
    },
    {
        label: "Idea Pocket Website",
        tools: [
        { name: "NextJs", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "Express.js", icon: <SiExpress /> },
        ],
    },
    {
        label: "Home Service App",
        tools: [
        { name: "Expo", icon: <SiExpo /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Clerk (Auth)", icon: <SiClerk /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        ],
    },
    {
        label: "Blockchain Based Land Registration System",
        tools: [
        { name: "Solidity", icon: <SiSolidity /> },
        { name: "Hardhat", icon: <FaHardHat /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        ],
    },
    {
        label: "Movie Search App",
        tools: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "MockAPI", icon: <SiMockserviceworker /> },
        { name: "CSS", icon: <SiCss3 /> },
        ],
    },
    {
        label: "Snake Game",
        tools: [
        { name: "Java", icon: <FaJava /> },
        ],
    },
];

export default function ProjectsSection() {
    return (
        <section className="relative z-30 w-full px-4 py-20 bg-transparent">
        <Projects projects={projects} />
        </section>
    );
}
