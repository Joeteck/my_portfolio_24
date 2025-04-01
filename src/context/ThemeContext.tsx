"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { themes } from "@/utils/theme"; // Ensure you have a list of available themes

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    mode: "light" | "dark";
    setMode: (mode: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const getStoredTheme = () => localStorage.getItem("theme") || themes[0]; // Default to first theme
    const getStoredMode = () => {
        const storedMode = localStorage.getItem("mode");
        if (storedMode === "light" || storedMode === "dark") {
            return storedMode; // Valid mode
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    
    const [theme, setThemeState] = useState<string>(getStoredTheme);
    const [mode, setModeState] = useState<"light" | "dark">(getStoredMode());

    // Apply theme & mode on mount
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.classList.toggle("dark", mode === "dark");
    }, [theme, mode]);

    // Save theme & mode in localStorage when they change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        localStorage.setItem("mode", mode);
    }, [theme, mode]);

    const handleThemeChange = (newTheme: string) => {
        if (themes.includes(newTheme)) {
            setThemeState(newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);
        }
    };

    const handleModeChange = (newMode: "light" | "dark") => {
        setModeState(newMode);
        document.documentElement.classList.toggle("dark", newMode === "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange, mode, setMode: handleModeChange }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
