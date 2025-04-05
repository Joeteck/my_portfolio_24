"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { themes } from "@/utils/theme";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    mode: "light" | "dark";
    setMode: (mode: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<string>(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || themes[0];
        }
        return themes[0];
    });

    const [mode, setModeState] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            const storedMode = localStorage.getItem("mode") as "light" | "dark" | null;
            if (storedMode === "light" || storedMode === "dark") {
                return storedMode;
            }
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const defaultMode = prefersDark ? "dark" : "light";
            localStorage.setItem("mode", defaultMode);
            return defaultMode;
        }
        return "light";
    });

    // Apply mode and theme to DOM
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.classList.toggle("dark", mode === "dark");
    }, [theme, mode]);

    // Save to localStorage on change
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
