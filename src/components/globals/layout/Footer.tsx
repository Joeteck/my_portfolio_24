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
                className="absolute inset-0 bg-cover bg-center opacity-[0.02] dark:opacity-[0.1]"
                style={{
                    backgroundImage: `url('/images/pattern/topography-light.svg')`,
                }}
            />

            {/* Painted Triangles with Noise */}
            <div className="absolute inset-0 z-10">
                {/* Top Triangle with Fade-in Animation */}
                <div
                    className="absolute top-0 right-0 w-1/2 h-1/3 bg-[#EBAA4C] opacity-90 clip-triangle-top animate-fadeIn"
                    style={{
                        backgroundImage: "url('/images/pattern/topography.svg')",
                        zIndex: 5,
                    }}
                />
                {/* Bottom Triangle with Fade-in Animation */}
                <div
                    className="absolute bottom-0 left-0 w-full h-1/2 bg-[#716EA4] opacity-90 clip-triangle-bottom animate-fadeIn"
                    style={{
                        backgroundImage: "url('/images/pattern/topography.svg')",
                        zIndex: 5,
                    }}
                />
            </div>

            {/* Main Footer Content */}
            <Container className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Logo & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-4"
                >
                    <Heading className="text-3xl font-semibold font-playfair-display">
                        {type === "company" ? "Joeteck IT Consult" : "Joel Adeyoju Ibukunoluwa"}
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
                    <div className="flex flex-col space-y-2">
                        <Link href={`/${type}`} className="text-gray-400 hover:text-primary transition-colors duration-300">
                            Home
                        </Link>
                        <Link href={`/${type}/about`} className="text-gray-400 hover:text-primary transition-colors duration-300">
                            About
                        </Link>
                        <Link href={`/${type}/${type === "portfolio" && "blog"}`} className="text-gray-400 hover:text-primary transition-colors duration-300">
                            {type === "portfolio" && "Blog"}
                        </Link>
                        <Link href={`/${type}/${type === "portfolio" ? "project" : "service"}`} className="text-gray-400 hover:text-primary transition-colors duration-300">
                            {type === "company" ? "Services" : "Projects"}
                        </Link>
                        <Link href={`/${type}/contact`} className="text-gray-400 hover:text-primary transition-colors duration-300">
                            Contact
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
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                            <FaLinkedin size={24} />
                        </a>
                        {type === "portfolio" && (
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                                <FaGithub size={24} />
                            </a>
                        )}
                    </div>
                </motion.div>
            </Container>

            {/* Footer Bottom Section */}
            <div className="mt-8 border-t border-gray-700 text-center pt-4 text-gray-500 text-sm">
                © {new Date().getFullYear()} {type === "company" ? "Joeteck IT Consult" : "Joel Adeyoju Ibukunoluwa"}. All rights reserved.
            </div>
        </footer>
    );
}
