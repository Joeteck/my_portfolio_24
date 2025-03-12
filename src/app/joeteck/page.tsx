"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Heading } from "@/components/globals/typography/Headings"; // Adjust the import path as needed
import { Paragraph } from "@/components/globals/typography/Paragraphs";

const ThemeSwitch = dynamic(() => import("@/components/globals/ui/ThemeSwitch"), { ssr: false });

const TestingPage = () => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const savedTheme =
            localStorage.getItem("theme") ||
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
        <div className="min-h-screen p-6 pb-32 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <ThemeSwitch setTheme={setTheme} theme={theme} />

            <div className="mt-8 space-y-6">
                <Heading variant="title">Testing List Component</Heading>

                <Paragraph size="lg" weight="bold" tone="success" align="center">
                    This is a success message!
                </Paragraph>

                <Paragraph size="sm" weight="light" tone="muted" align="justify" >
                    This is a very long paragraph that will be truncated if it exceeds the container width...
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolores cum soluta repellat quibusdam nobis molestiae! Non voluptatum impedit labore, libero doloribus consequuntur, quo minima asperiores, odio ea dolore veniam.
                </Paragraph>

            </div>
        </div>
    );
};

export default TestingPage;
