"use client";

import { useState, useEffect } from "react";
import { Divider } from "@/components/globals/typography/Divider";
import ThemeSwitch from "@/components/globals/ui/ThemeSwitch";

const TestingPage = () => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="min-h-screen p-6 pb-32">
            <ThemeSwitch setTheme={setTheme} theme={theme} />

            <h1 className="text-2xl font-bold">Divider Test Page</h1>

            {/* Vertical Dividers */}
            <section className="h-full w-full flex gap-4 items-center">
                <h2 className="text-xl font-semibold">Vertical Dividers</h2>
                <div className="flex gap-2">
                    <p>Thin:</p>
                    <Divider thickness="thin" orientation="vertical"  color="primary" />
                    <p>Medium:</p>
                    <Divider  thickness="medium" orientation="vertical" color="secondary" />
                    <p>Thick:</p>
                    <Divider  thickness="thick" orientation="vertical" color="muted" />
                </div>
            </section>

            {/* Horizontal Dividers */}
            <section className="h-full w-full">
                <h2 className="text-xl font-semibold mt-6">Horizontal Dividers</h2>
                <p>Thin:</p>
                <Divider thickness="thin" orientation="horizontal" color="primary" />
                <p>Medium:</p>
                <Divider orientation="horizontal" thickness="medium" color="secondary" />
                <p>Thick:</p>
                <Divider orientation="horizontal" thickness="thick" color="muted" />
            </section>
        </div>
    );
};

export default TestingPage;
