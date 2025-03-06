"use client";

import { useState, useEffect } from "react";
import { Divider } from "@/components/globals/typography/Divider";

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
            <div className="p-6 space-y-6">
                <h1 className="text-2xl font-bold">Divider Test Page</h1>
                
                <section>
                    <h2 className="text-xl font-semibold">Horizontal Dividers</h2>
                    <p>Thin:</p>
                    <Divider thickness="thin" color="primary" orientation="horizontal" />
                    <p>Medium:</p>
                    <Divider thickness="medium" color="secondary" orientation="horizontal" />
                    <p>Thick:</p>
                    <Divider thickness="thick" color="muted" orientation="horizontal" />
                </section>
                
                <section className="flex items-center space-x-6">
                    <h2 className="text-xl font-semibold">Vertical Dividers</h2>
                    <Divider thickness="thin" color="primary" orientation="vertical" />
                    <Divider thickness="medium" color="secondary" orientation="vertical" />
                    <Divider thickness="thick" color="muted" orientation="vertical" />
                </section>
            </div>
    );
};

export default TestingPage;
