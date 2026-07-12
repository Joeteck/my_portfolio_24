"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { themes, getTheme, setTheme as utilSetTheme } from "@/utils/theme";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<string>("default");

    useEffect(() => {
        setThemeState(getTheme());
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        utilSetTheme(theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const handleThemeChange = (newTheme: string) => {
        if (themes.includes(newTheme)) {
            setThemeState(newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
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