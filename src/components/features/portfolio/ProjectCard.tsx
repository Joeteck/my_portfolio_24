import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { FaGlobe, FaGithub } from "react-icons/fa";

type Tool = {
    name: string;
    icon?: React.ReactNode;
};

type Project = {
    label: string;
    image: string;
    link?: string;
    github?: string;
    description: string;
    tools: Tool[];
    className?: string;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div
            className={cn(
                "bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl w-full max-w-md",
                project.className
            )}
        >
            {/* Project Image */}
            <div className="relative w-full h-56">
                <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                />
                {/* Project Label (left) */}
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {project.label}
                </span>
                {/* Project Links (right) */}
                <div className="absolute top-4 right-4 flex gap-2">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full shadow flex items-center hover:bg-primary transition relative"
                        >
                            <span className="text-lg">
                                <FaGlobe />
                            </span>
                            <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-[999]">
                                Visit Website
                            </span>
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-primaryDarklight text-white text-xs font-semibold px-2 py-1 rounded-full shadow flex items-center hover:bg-primary transition relative"
                        >
                            <span className="text-lg">
                                <FaGithub />
                            </span>
                            <span className="absolute top-8 left-0 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                                View on GitHub
                            </span>
                        </a>
                    )}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col gap-4">
                {/* Description */}
                <p className="text-gray-700 dark:text-neutral-300 text-base leading-relaxed mb-2">
                    {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-3 mt-2">
                    {project.tools.map((tool, i) => (
                        <span
                            key={i}
                            className="flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full px-3 py-1 text-sm font-medium text-neutral-700 dark:text-neutral-200 shadow-sm"
                        >
                            {tool.icon && <span className="mr-2 text-lg">{tool.icon}</span>}
                            {tool.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
