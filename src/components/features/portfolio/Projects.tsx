import { Heading } from "@/components/globals/typography/Heading";
import { cn } from "@/utils/cn";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

type Tool = {
    name: string;
    icon?: React.ReactNode;
};

type Project = {
    label: string; // e.g., "My Portfolio"
    tools: Tool[]; // e.g., [{ name: "Next.js", icon: <NextIcon /> }]
};

type ProjectsProps = {
    projects: Project[]; // Array of projects
    className?: string;
};

export default function Projects({ projects, className }: ProjectsProps) {
    return (
        <div className={cn("relative w-full flex flex-col items-center text-white text-center bg-transparent", className)}>
            {/* Section Title */}
            <span className="relative text-[10px] font-bold px-3 py-1 rounded-full bg-neutral-300 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 backdrop-blur-sm border border-neutral-300/50 dark:border-neutral-700/50 z-30">
                PROJECTS
            </span>
            {/* Project Title */}
            <Heading variant="sectionTitle" className="py-10 max-w-sm text-center text-neutral-800 dark:text-neutral-100">
                Hey Welcome to Joeteck's Project
            </Heading>

            {/* Projects List */}
            {projects.map((project, index) => (
                <div key={index} className="w-full relative z-30 text-center">
                    {/* Divider with Label */}
                    <div className="relative w-full flex items-center justify-center">
                        <div className="flex items-center justify-center max-w-3xl w-full">
                            <div className="w-full border-t-2 border-dashed border-neutral-700 "></div>
                            <span className="max-w-sm min-w-fit relative z-10 bg-transparent px-3 uppercase text-xs font-medium tracking-wide text-neutral-400">
                                {project.label}
                            </span>
                            <div className="w-full border-t-2 border-dashed border-neutral-700"></div>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="flex justify-center items-center flex-wrap gap-6 my-16">
                        {project.tools.map((tool, i) => (
                            <div
                                key={i}
                                className="flex flex-row items-center space-y-1 text-black dark:text-[#fff] hover:text-primary dark:hover:text-primary transition-colors duration-200"
                            >
                                {tool.icon && <div className="text-2xl pr-2">{tool.icon}</div>}
                                <span className="text-xl  font-normal">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="max-w-3xl w-full mb-3 border-t-2 border-dashed border-neutral-700"></div>

            <div className=" w-full flex flex-row max-md:flex-col justify-center items-center gap-2 mt-10">

                <div className="text-neutral-600 dark:text-neutral-400 text-md font-medium">
                    <a
                        href="https://github.com/joeteck"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
                        >
                        <span>Check out my project on my repo</span>
                        <FaGithub className="text-xl" />
                    </a>
                </div>
                <div className="flex items-center justify-center gap-2 pl-0  text-neutral-600 dark:text-neutral-400 text-md font-medium">
                    <span>or Connect with me though my socials</span>
                    <a
                        href="https://wa.me/message/K7GO54BWVAWYG1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                        >
                        <FaWhatsapp className="text-xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adeyoju-ibukunoluwa-375018209/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                        >
                        <FaLinkedin className="text-xl" />
                    </a>
                    <a
                        href="https://web.facebook.com/joel.adeyoju"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 transition-colors"
                        >
                        <FaFacebook className="text-xl" />
                    </a>
                </div>
            </div>

        </div>
    );
}
