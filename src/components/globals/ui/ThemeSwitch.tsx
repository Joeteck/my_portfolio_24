"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
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
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
        </button>
    );
};

export default ThemeSwitch;
