"use client";

import { useState, useEffect } from "react";
import { Badge } from "../../components/globals/typography/Badges";

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
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Badge Component Showcase
            </h1>

            {/* Grid Layout for Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                {/* Solid Badges */}
                <Badge variant="solid" color="primary">Primary</Badge>
                <Badge variant="solid" color="secondary">Secondary</Badge>
                <Badge variant="solid" color="success">Success</Badge>
                <Badge variant="solid" color="danger">Danger</Badge>
                <Badge variant="solid" color="warning">Warning</Badge>
                <Badge variant="solid" color="info">Info</Badge>

                {/* Outline Badges */}
                <Badge variant="outline" color="primary">Primary</Badge>
                <Badge variant="outline" color="secondary">Secondary</Badge>
                <Badge variant="outline" color="success">Success</Badge>
                <Badge variant="outline" color="danger">Danger</Badge>
                <Badge variant="outline" color="warning">Warning</Badge>
                <Badge variant="outline" color="info">Info</Badge>

                {/* Subtle Badges */}
                <Badge variant="subtle" color="primary">Primary</Badge>
                <Badge variant="subtle" color="secondary">Secondary</Badge>
                <Badge variant="subtle" color="success">Success</Badge>
                <Badge variant="subtle" color="danger">Danger</Badge>
                <Badge variant="subtle" color="warning">Warning</Badge>
                <Badge variant="subtle" color="info">Info</Badge>

                {/* Different Sizes */}
                <Badge variant="solid" color="success" size="sm">Small</Badge>
                <Badge variant="solid" color="success" size="md">Medium</Badge>
                <Badge variant="solid" color="success" size="lg">Large</Badge>
            </div>
        </div>
    );
};

export default TestingPage;
