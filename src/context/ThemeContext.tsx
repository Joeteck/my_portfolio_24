"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { themes, getTheme, getMode, setTheme as utilSetTheme, setMode as utilSetMode } from "@/utils/theme";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    mode: "light" | "dark";
    setMode: (mode: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<string>("default");
    const [mode, setModeState] = useState<"light" | "dark">("light");

    // Initialize themes safely from localStorage AFTER the client mounts
    useEffect(() => {
        setThemeState(getTheme());
        setModeState(getMode());
    }, []);

    // Sync state changes with DOM classes/attributes and localStorage cleanly
    useEffect(() => {
        if (typeof window === "undefined") return;
        
        // Match what theme.ts utility expects
        utilSetTheme(theme);
        utilSetMode(mode);
        
        // Also keep your custom dataset attribute matching if your CSS depends on it
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme, mode]);

    const handleThemeChange = (newTheme: string) => {
        if (themes.includes(newTheme)) {
            setThemeState(newTheme);
        }
    };

    const handleModeChange = (newMode: "light" | "dark") => {
        setModeState(newMode);
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