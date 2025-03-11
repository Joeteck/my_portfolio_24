"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Heading } from "@/components/globals/typography/Headings"; // Adjust the import path as needed
import { List } from "@/components/globals/typography/Lists"; // Adjust the import path as needed

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

                {/* Unordered List */}
                <List variant="unordered" marker="check" markerClassName="text-green-500 text-lg font-bold">
                    <li>First Item</li>
                    <li>Second Item</li>
                    <li>Third Item</li>
                </List>

                {/* Ordered List */}
                <List variant="ordered" spacing="loose" >
                    <li>Step one</li>
                    <li>Step two</li>
                    <li>Step three</li>
                </List>

                {/* Inline List */}
                <List variant="inline" marker="dash" markerClassName="text-secondary text-lg font-bold">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </List>

                {/* Custom Marker List */}
                <List variant="unordered" marker="➤" divided markerClassName="text-secondary text-lg font-bold">
                    <li>Custom marker 1</li>
                    <li>Custom marker 2</li>
                    <li>Custom marker 3</li>
                </List>
            </div>
        </div>
    );
};

export default TestingPage;
