"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import { Container } from "@/components/globals/layout/Container";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

interface FooterProps {
    type: "portfolio" | "company";
}

export function Footer({ type }: FooterProps) {
    // Define pages array and email state at the top of the component
    const pages: { label: string; href: string }[] = [
        { label: "Home", href: `/${type}` },
        { label: "About", href: `/${type}/about` },
        ...(type === "portfolio"
            ? [
                { label: "Blog", href: `/${type}/blog` },
                { label: "Projects", href: `/${type}/project` },
            ]
            : [
                { label: "Services", href: `/${type}/service` },
            ]),
        { label: "Contact", href: `/${type}/contact` },
    ];

    const [email, setEmail] = useState("");

    return (
        <footer className={clsx("relative  h-fit w-full overflow-hidden flex flex-col items-center md:py-20 py-1 pt-10 md:px-8 bg-background text-foreground")}>
            {/* Background with Low Opacity (for parent div) */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
                style={{
                    backgroundImage: `url('/images/pattern/topography.svg')`,
                }}
            />
            <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.01] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `url('/images/pattern/topography-light.svg')`,
                }}
            />

            {/* Painted Triangles with Primary Colors */}
            <div className="absolute inset-0 z-10">
                {/* Top Triangle with Primary Color */}
                <div
                    className="absolute top-0 right-0 w-1/2 h-1/3 bg-[#1bbb8b] opacity-90 clip-triangle-top animate-fadeIn"
                    style={{
                        backgroundImage: "url('/images/pattern/topography.svg')",
                        zIndex: 5,
                    }}
                />
                {/* Bottom Triangle with Secondary Color */}
                <div
                    className="absolute bottom-0 left-0 w-full h-1/2 bg-[#EBAA4C] opacity-90 clip-triangle-bottom animate-fadeIn"
                    style={{
                        backgroundImage: "url('/images/pattern/topography.svg')",
                        zIndex: 5,
                    }}
                />
            </div>

            {/* Top: Subscribe */}
            <div className="relative w-full flex max-md:flex-col justify-between items-center z-40">
                <div className="flex flex-col  w-fit items-center md:items-start justify-center ">
                    <h3 className="text-lg font-semibold">Stay in the loop</h3>
                    <p className="text-sm mb-4">Subscribe for the latest news & updates.</p>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert(`Subscribed with: ${email}`);
                        setEmail("");
                    }}
                    className="flex max-w-md"
                >
                    <input
                        type="email"
                        placeholder="my@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-4 py-2 rounded-l-xl bg-white dark:bg-black text-black dark:text-white focus:outline-none border-r border-gray-800 dark:border-gray-300"
                    />
                    <button
                        type="submit"
                        className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-r-xl font-medium dark:hover:bg-gray-200 transition border-l border-gray-800 dark:border-gray-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Bottom: Logo + copyright */}
            <div className="relative w-full mt-10 border-t border-gray-800 dark:border-gray-300 pt-6  md:px-6 flex max-md:flex-col-reverse max-md:gap-10 justify-center md:justify-between items-center z-40">
                {/* Left: Copyright */}
                <div className="flex flex-col max-md:flex-row-reverse  md:self-end md:items-start items-end gap-2">
                    <div className="">
                        {/* Replace with your own logo */}
                        <Image alt="Logo" src="/logo/joeteckBlack.jpg" width={100} height={100} className="w-14 h-14 max-md:w-7 max-md:h-7 rounded-lg" />
                    </div>
                    <p className="text-sm">
                        &copy;{new Date().getFullYear()} {type === "company" ? "Joeteck IT Consult" : "Joel Adeyoju Ibukunoluwa"}.
                        All rights reserved.
                    </p>
                </div>

                {/* Right: Links */}
                <div className="flex gap-16 bg-black p-4 rounded-lg shadow-lg justify-center items-start ">
                    <div>
                        <p className=" text-xs max-md:text-base font-semibold text-gray-300">SITE</p>
                        <ul className="mt-2 space-y-2 max-md:space-y-3 text-xs max-md:text-base font-medium text-gray-400 ">
                            {pages.map((page) => (
                                <li key={page.label}>
                                    <Link
                                        href={page.href}
                                        className="hover:text-primary transition"
                                    >
                                        {page.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs max-md:text-base  font-semibold text-gray-300">SOCIAL</p>
                        <ul className="mt-2 space-y-2 max-md:space-y-3 text-xs max-md:text-base font-medium text-gray-400 ">
                            <li>
                                <a href="https://discord.gg/NM38pPDG" target="_blank" className="hover:text-primary flex items-center gap-2" rel="noopener noreferrer">
                                    <FaDiscord /> Discord
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/joeteck" target="_blank" className="hover:text-primary flex items-center gap-2" rel="noopener noreferrer">
                                    <FaGithub /> GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" className="hover:text-primary flex items-center gap-2" rel="noopener noreferrer">
                                    <FaTwitter /> X/Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/adeyoju-ibukunoluwa-375018209/" target="_blank" className="hover:text-primary flex items-center gap-2" rel="noopener noreferrer">
                                    <FaLinkedinIn /> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
