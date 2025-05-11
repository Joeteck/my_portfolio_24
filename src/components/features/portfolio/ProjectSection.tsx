import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import Projects from "./Projects";

const projects = [
    {
        label: "Portfolio Website",
        tools: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        ],
    },
    {
        label: "Another Project",
        tools: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
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
