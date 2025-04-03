"use client";

import { usePathname } from "next/navigation"; // Use for checking current route
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon, Palette } from "lucide-react";
import { themes } from "@/utils/theme";

const ThemeSwitch = () => {
    const { theme, setTheme, mode, setMode } = useTheme();
    const pathname = usePathname(); // Get current route

    const isPlayground = pathname === "/"; // Playground is the homepage (`/`)

    const toggleTheme = () => {
        if (isPlayground) {
            const currentIndex = themes.indexOf(theme);
            const nextIndex = (currentIndex + 1) % themes.length;
            setTheme(themes[nextIndex]);
        }
    };

    const toggleMode = () => {
        setMode(mode === "dark" ? "light" : "dark");
    };

    return (
        <div className="flex gap-3">
            {/* Theme Switch - only on Playground */}
            {isPlayground && (
                <button 
                    onClick={toggleTheme} 
                    className="block items-center w-fit bg-transparent dark:text-white text-black"
                >
                    <motion.span 
                        key={theme} 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Palette size={18} />
                    </motion.span>
                </button>
            )}

            {/* Mode Switch - available everywhere */}
            <button 
                onClick={toggleMode} 
                className="block items-center w-fit bg-transparent dark:text-white text-black"
            >
                <motion.span 
                    key={mode} 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                >
                    {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
            </button>
        </div>
    );
};

export default ThemeSwitch;
