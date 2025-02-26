"use client";

import { useState, useEffect } from "react";
import ThemeSwitch from "../../components/globals/ui/ThemeSwitch";
import Popover from "../../components/globals/ui/Popovers";
import Button from "../../components/globals/ui/Button";
import Image from "next/image";

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
        <>
            <ThemeSwitch setTheme={setTheme} theme={theme} />

            <div className="w-fit grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 place-content-center justify-center bg-green-700/35 mx-auto p-4 rounded-3xl">
                {/* Hover-based popover (Tooltip Style) */}
                <Popover 
                    trigger={<span className="text-blue-500 underline cursor-pointer">Hover me</span>}
                    hover
                >
                    <div className="p-2">This is a tooltip!</div>
                </Popover>

                {/* Click-based popover (Interactive Info Box) */}
                <Popover 
                    trigger={<Button variant="primary">Click Me</Button>}
                >
                    <div className="p-4">More Info Here</div>
                </Popover>

                {/* Click-based popover with detailed content */}
                <Popover 
                    trigger={<Image src="/images/profile.png" alt="Example"
                    width={100} height={100} 
                    className="w-16 h-16 cursor-pointer" />}
                >
                    <div className="p-4">
                        <h3 className="font-bold">Popover Title</h3>
                        <p>This is a more detailed popover content. You can include anything here.</p>
                    </div>
                </Popover>
            </div>
        </>
    );
};

export default TestingPage;
