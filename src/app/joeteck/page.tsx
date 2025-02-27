"use client";

import { useState, useEffect } from "react";
import ThemeSwitch from "../../components/globals/ui/ThemeSwitch";
import Tabs from "../../components/globals/ui/Tabs";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

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

    const tabItems = [
        { label: "Home", value: "home", icon: <FaHome /> },
        { label: "Profile", value: "profile", icon: <FaUser /> },
        { label: "Settings", value: "settings", icon: <FaCog /> }
    ];

    const contentMap = {
        home: <p>Welcome to the Home section!</p>,
        profile: <p>This is your Profile section.</p>,
        settings: <p>Adjust your Settings here.</p>
    };

    return (
        <>
            <ThemeSwitch setTheme={setTheme} theme={theme} />
            <div className="w-fit grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 place-content-center justify-center bg-green-700/35 mx-auto p-4 rounded-3xl">
                <div>
                    <h2 className="text-lg font-bold mb-2">Underline Variant</h2>
                    <Tabs tabs={tabItems} variant="underline" contentMap={contentMap} />
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">Pill Variant</h2>
                    <Tabs tabs={tabItems} variant="pill" contentMap={contentMap} />
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">Boxed Variant</h2>
                    <Tabs tabs={tabItems} variant="boxed" contentMap={contentMap} />
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">With Animation</h2>
                    <Tabs tabs={tabItems} animate={true} contentMap={contentMap} />
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">Without Animation</h2>
                    <Tabs tabs={tabItems} animate={false} contentMap={contentMap} />
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-2">Scroll to Section</h2>
                    <Tabs tabs={tabItems} scrollToSection={true} />
                </div>
            </div>
        </>
    );
};

export default TestingPage;