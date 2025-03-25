import React from "react";
import { Container } from "@/components/globals/layout/Container";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Heading } from "../typography/Heading";

interface FooterProps {
    type: "portfolio" | "company";
}

export function Footer({ type }: FooterProps) {
    return (
        <footer className={cn("py-10 bg-gray-900 text-gray-100")}> 
            <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & Description */}
                <div>
                    <Heading className="text-2xl font-bold">{type === "company" ? "Joeteck IT Consult" : "Joel Adeyoju Ibukunoluwa"}</Heading>
                    <p className="mt-2 text-gray-400">
                        {type === "company"
                            ? "Innovative IT solutions for modern businesses."
                            : "Passionate developer crafting seamless digital experiences."}
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col space-y-2">
                    <Heading className="text-lg font-semibold">Quick Links</Heading>
                    <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
                    <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
                    <Link href="/services" className="text-gray-400 hover:text-white">{type === "company" ? "Services" : "Projects"}</Link>
                    <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold">Connect with me</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
                        {type === "portfolio" && (
                            <a href="#" className="text-gray-400 hover:text-white"><FaGithub size={20} /></a>
                        )}
                    </div>
                </div>
            </Container>

            <div className="mt-8 border-t border-gray-700 text-center pt-4 text-gray-500 text-sm">
                © {new Date().getFullYear()} {type === "company" ? "Joeteck IT Consult" : "Joel Adeyoju Ibukunoluwa"}. All rights reserved.
            </div>
        </footer>
    );
}
