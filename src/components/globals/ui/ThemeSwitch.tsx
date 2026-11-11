"use client";

import { useTheme } from "next-themes";
import { useTheme as useAccentTheme } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sun, Moon, Palette } from "lucide-react";
import { themes } from "@/utils/theme";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const { theme: accentTheme, setTheme: setAccentTheme } = useAccentTheme();
    const pathname = usePathname();
    const isPlayground = pathname === "/";
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleThemePalette = () => {
        if (isPlayground) {
            const currentIndex = themes.indexOf(accentTheme || themes[0]);
            const nextIndex = (currentIndex + 1) % themes.length;
            setAccentTheme(themes[nextIndex]);
        }
    };

    const toggleMode = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <div className="flex gap-3">
            {/* {isPlayground && (
                <button
                    onClick={toggleThemePalette}
                    className="block items-center w-fit bg-transparent dark:text-white text-black"
                >
                    <motion.span
                        key={accentTheme}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Palette size={18} />
                    </motion.span>
                </button>
            )} */}

            <button onClick={toggleMode} className="block items-center w-fit">
                <motion.span
                    key={resolvedTheme}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                >
                    {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
            </button>
        </div>
    );
};

export default ThemeSwitch;