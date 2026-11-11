"use client"

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Sidebar from "./SIdebar"; // Assuming the Sidebar is in the same folder
import ThemeSwitch from "../ui/ThemeSwitch";
import { Menu, X } from "lucide-react"; // Import lucide icons
import { Heading } from "../typography/Heading";
import Link from "next/link";

interface NavbarProps {
    type: "company" | "portfolio";
}

const navLinks = {
    company: [
        { name: "About", path: "/joeteck/about" },
        { name: "Services", path: "/joeteck/service" },
        { name: "Projects", path: "/joeteck/project" },
        { name: "Contact", path: "/joeteck/contact" },
    ],
    portfolio: [
        { name: "About", path: "/portfolio/about" },
        { name: "Projects", path: "/portfolio/project" },
        { name: "Contact", path: "/portfolio/contact" },
        { name: "Blog", path: "/portfolio/blog" },
    ],
};

export const Navbar = ({ type }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
        setIsOpen(false); // Close the menu when navigating
    };

    const links = navLinks[type];

    const closeSidebar = () => {
        setIsOpen(false); // Close the sidebar
    };

    return (
        <nav className={cn("fixed top-2 md:w-[75%] w-[95%] justify-center self-center z-50 backdrop-blur-md bg-[#e8fff72d] dark:bg-[#07130e87] p-2.5 mx-2 md:mx-12 lg:mx-32 xl:mx-4 2xl:px-48 rounded-lg shadow-md transition-all duration-300")}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="font-bold">
                    {type === "company" ? (
                        <Image
                            src="/images/joeteck_logo.png"
                            alt="Joeteck Logo"
                            width={30}
                            height={30}
                            className="object-fill h-8 w-16"
                        />
                    ) : (
                        <Link href="/portfolio">
                            <Image src="/logo/joeteckBlack.jpg" alt="Joeteck Logo" width={36} height={36} className="w-9 h-9 rounded-[10px]" />
                            {/* <Heading variant="subtitle" className="font-allura font-thin text-xs">
                                Joeteck
                            </Heading> */}
                        </Link>
                    )}
                </div>

                <ul className="hidden md:flex gap-4">
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className="hover:text-gray-400 transition-colors text-sm font-extralight cursor-pointer hover:border-b-2 border-b-primary px-2"
                            onClick={() => handleNavigation(link.path)}
                        >
                            {link.name}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-row justify-center items-center gap-4">
                    <div className="md:flex hidden justify-center items-center">
                        <ThemeSwitch />
                    </div>

                    {/* Toggle Button for Mobile */}
                    <button
                        className={cn(
                            "md:hidden p-2 rounded-full transition-colors",
                            isOpen ? "bg-accent text-primary" : "bg-transparent"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isOpen ? (
                            <X className="dark:text-white text-primary hover:text-secondary w-6 h-6" /> // Close icon
                        ) : (
                            <Menu className="dark:text-white text-primary hover:text-secondary w-6 h-6" /> // Menu icon
                        )}
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                links={links}
            />
        </nav>
    );
};
