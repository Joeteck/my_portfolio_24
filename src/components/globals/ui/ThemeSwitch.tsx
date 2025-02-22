"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";

const ThemeSwitch = ({ setTheme, theme }: { setTheme: (theme: string) => void; theme: string }) => {
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button 
            variant={theme === 'light' ? 'outline' : 'primary'} 
            onClick={toggleTheme} 
            className="flex items-center gap-2"
        >
            {/* Animated Icon */}
            <motion.span 
                key={theme} 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
            >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.span>
        </Button>
    );
};

export default ThemeSwitch;
