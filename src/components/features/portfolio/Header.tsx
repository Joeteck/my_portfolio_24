"use client";

import { motion } from "framer-motion";
import { Heading } from "@/components/globals/typography/Heading";
import { Paragraph } from "@/components/globals/typography/Paragraph";
import clsx from "clsx";

export const Header = () => {
    return (
        <section
            className={clsx(
                "relative h-screen w-full overflow-hidden grid grid-cols-1 md:grid-cols-2",
                "bg-gradient-radial from-[#1BBB8B]/10 via-transparent to-transparent dark:from-[#1BBB8B]/30"
            )}
        >
            {/* Left: Intro */}
            <div className="z-10 flex flex-col justify-center px-8 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span className="text-sm tracking-wide uppercase text-[#EBAA4C] bg-[#EBAA4C]/30 px-2 py-1 rounded-md w-max mb-4">
                        Frontend Engineer
                    </span>
                    <Heading variant="title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                        I'm Adeyoju Joel
                    </Heading>
                    <Paragraph className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                        I craft beautiful, fast, and meaningful user experiences on the web and mobile. Let’s build something extraordinary.
                    </Paragraph>
                </motion.div>
            </div>

            {/* Optional Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent dark:via-white/5 pointer-events-none" />
        </section>
    );
};
