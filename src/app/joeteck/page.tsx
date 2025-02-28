"use client";

import { useState, useEffect } from "react";
import ThemeSwitch from "../../components/globals/ui/ThemeSwitch";
import { ToastProvider, useToast } from "../../components/globals/ui/Toast Notifications";

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
        <ToastProvider>
            <ThemeSwitch setTheme={setTheme} theme={theme} />
            <ToastDemo />
        </ToastProvider>
    );
};

// ✅ Now `useToast()` is inside a valid component
const ToastDemo = () => {
    const { showToast } = useToast();

    return (
        <div className="w-fit grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 place-content-center justify-center bg-green-700/35 mx-auto p-4 rounded-3xl">
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={() => showToast("Success weif eui wf iwe fiwe edi wp iw efh wpefpb pwep wf wefp pwedfuwef  message!", "success")}
            >
                Show Success Toast
            </button>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => showToast("Error  eciwe dediwed eedied edioed message!", "error")}
            >
                Show Error Toast
            </button>
            <button
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg"
                onClick={() => showToast("Warning message!", "warning")}
            >
                Show Warning Toast
            </button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => showToast("Info message!", "info")}
            >
                Show Info Toast
            </button>
        </div>
    );
};

export default TestingPage;
