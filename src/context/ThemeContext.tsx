"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { themes, setTheme, getTheme, setMode, getMode } from "@/utils/theme"; // Adjust the path if needed

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    mode: 'light' | 'dark';
    setMode: (mode: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<string>(getTheme());
    const [mode, setModeState] = useState<'light' | 'dark'>(getMode());

    useEffect(() => {
        setThemeState(getTheme());
        setModeState(getMode());
    }, []);

    const handleThemeChange = (newTheme: string) => {
        if (themes.includes(newTheme)) {
            setTheme(newTheme);
            setThemeState(newTheme);
        }
    };

    const handleModeChange = (newMode: 'light' | 'dark') => {
        setMode(newMode);
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
