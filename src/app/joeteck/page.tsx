"use client";

import { useState, useEffect } from "react";
import ThemeSwitch from "../../components/globals/ui/ThemeSwitch";
// import Button  from "../../components/globals/ui/Button";

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

            </div>

        </>
    );
};

export default TestingPage;
