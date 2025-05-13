// components/Footer.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaDiscord, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [search, setSearch] = useState("");
    const router = useRouter();

    const pages = [
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
        { label: "Playground", href: "/" },
        { label: "Joeteck Consult", href: "/joeteck" },
    ];

    // const handleSearch = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const match = pages.find(p => p.label.toLowerCase() === search.toLowerCase());
    //     if (match) {
    //     if (match.href.startsWith("#")) {
    //         const el = document.querySelector(match.href);
    //         if (el) el.scrollIntoView({ behavior: "smooth" });
    //     } else {
    //         router.push(match.href);
    //     }
    //     } else {
    //     alert("Page or section not found");
    //     }
    // };

    return (
        <footer className="w-full relative bg-white dark:bg-black text-black dark:text-gray-300 flex flex-col px-6 md:px-20  py-14 pb-28 z-50">
            {/* Noise Background */}
            <div className="absolute inset-0 pointer-events-none z-0 ">
                <div className="w-full h-full bg-noise-dark opacity-70 dark:opacity-100 mix-blend-multiply z-10"></div>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-neutral-800/50 dark:to-neutral-900 pointer-events-none z-0"></div>

            {/* Top: Subscribe */}
            <div className="relative flex max-md:flex-col justify-between items-center z-40">
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
                    className="flex-1 px-4 py-2 rounded-l-xl bg-neutral-900 text-white focus:outline-none"
                    />
                    <button
                    type="submit"
                    className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-r-xl font-medium dark:hover:bg-gray-200 transition"
                    >
                    Subscribe
                    </button>
                </form>
            </div>

        {/* Bottom: Logo + copyright */}
        <div className="relative mt-10 border-t border-gray-800 dark:border-gray-300 pt-6  md:px-6 flex max-md:flex-col max-md:gap-10 justify-between items-center z-40">
            {/* Left: Copyright */}
            <div className="flex flex-col self-start md:self-end items-start  gap-2">
                <div className="">
                    {/* Replace with your own logo */}
                    <Image alt="Logo" src="/logo/joeteckBlack.jpg" width={100} height={100} className="w-14 h-14 rounded-lg" />
                </div>
                <p className="text-sm">&copy;2025 Joeteck Inc.</p>
            </div>

            {/* Right: Links */}
            <div className="flex gap-16">
                <div>
                    <p className=" text-xs font-semibold">SITE</p>
                    <ul className="mt-2 space-y-2 text-xs font-medium dark:text-gray-400 text-gray600">
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
                    {/* <li>
                        <Link href="/sponsor" className="hover:text-white transition">
                        Sponsor
                        </Link>
                    </li> */}
                    </ul>
                </div>

                <div>
                    <p className="text-xs font-semibold">SOCIAL</p>
                    <ul className="mt-2 space-y-2 text-xs font-medium dark:text-gray-400 text-gray600">
                    <li><a href="https://discord.gg/NM38pPDG" target="_blank" className="hover:text-primary flex items-center gap-2"><FaDiscord /> Discord</a></li>
                    <li><a href="https://github.com/joeteck" target="_blank" className="hover:text-primary flex items-center gap-2"><FaGithub /> GitHub</a></li>
                    <li><a href="https://twitter.com" target="_blank" className="hover:text-primary flex items-center gap-2"><FaTwitter /> X/Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/adeyoju-ibukunoluwa-375018209/" target="_blank" className="hover:text-primary flex items-center gap-2"><FaLinkedinIn /> LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    );
}
