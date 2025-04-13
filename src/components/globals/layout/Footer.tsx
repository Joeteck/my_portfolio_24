"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import { Container } from "@/components/globals/layout/Container";
import Link from "next/link";
import clsx from "clsx";

interface FooterProps {
    type: "portfolio" | "company";
}

export function Footer({ type }: FooterProps) {
    return (
        <footer className={clsx("relative py-20 bg-background text-foreground")}>
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

            {/* Main Footer Content */}
            <Container className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-12 dark:bg-[#061f18]/50">
                {/* Logo & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-4"
                >
                    <Heading variant="title">
                        {type === "company" ? "Joeteck IT Consult" : "Joeteck"}
                    </Heading>
                    <Paragraph className="text-lg text-gray-500">
                        {type === "company"
                            ? "Innovative IT solutions for modern businesses."
                            : "Passionate developer crafting seamless digital experiences."}
                    </Paragraph>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="space-y-4"
                >
                    <Heading className="text-xl font-semibold">Quick Links</Heading>
                    <div className="flex flex-col space-y-3">
                        <Link
                            href={`/${type}`}
                            className="text-gray-400 hover:text-primary transition-all duration-300 ease-in-out relative"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100" />
                        </Link>
                        <Link
                            href={`/${type}/about`}
                            className="text-gray-400 hover:text-primary transition-all duration-300 ease-in-out relative"
                        >
                            About
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100" />
                        </Link>
                        <Link
                            href={`/${type}/${type === "portfolio" && "blog"}`}
                            className="text-gray-400 hover:text-primary transition-all duration-300 ease-in-out relative"
                        >
                            {type === "portfolio" && "Blog"}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100" />
                        </Link>
                        <Link
                            href={`/${type}/${type === "portfolio" ? "project" : "service"}`}
                            className="text-gray-400 hover:text-primary transition-all duration-300 ease-in-out relative"
                        >
                            {type === "company" ? "Services" : "Projects"}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100" />
                        </Link>
                        <Link
                            href={`/${type}/contact`}
                            className="text-gray-400 hover:text-primary transition-all duration-300 ease-in-out relative"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100" />
                        </Link>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="space-y-4"
                >
                    <Heading className="text-xl font-semibold">Connect with me</Heading>
                    <div className="flex space-x-6">
                        <a href="https://web.facebook.com/joel.adeyoju" className="text-gray-400 hover:text-primary transition-all duration-300 ease-in-out">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 ease-in-out">
                            <FaTwitter size={24} />
                        </a>
                        <a href="www.linkedin.com/in/adeyoju-ibukunoluwa-375018209" className="text-gray-400 hover:text-primary transition-all duration-300 ease-in-out">
                            <FaLinkedin size={24} />
                        </a>
                        {type === "portfolio" && (
                            <a href="https://github.com/Joeteck" className="text-gray-400 hover:text-primary transition-all duration-300 ease-in-out">
                                <FaGithub size={24} />
                            </a>
                        )}
                    </div>
                </motion.div>
            </Container>

            {/* Footer Bottom Section */}
            <div className="absolute w-full bg-[#000] mt-8 border-t justify-center items-center border-gray-700 text-center py-4 bottom-0 text-gray-500 text-sm z-50">
                © {new Date().getFullYear()} {type === "company" ? "Joeteck IT Consult" : "Joel Adeyoju Ibukunoluwa"}. All rights reserved.
            </div>
        </footer>
    );
}
