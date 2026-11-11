"use client";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

const NotFound = () => {
    useEffect(() => {
        gsap.fromTo(
        ".error-text",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
        );
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a192f] text-white text-center p-4">
        <h1 className="text-8xl font-bold text-teal-400">404</h1>
        <p className="text-2xl mt-4 error-text">Oops! Page not found</p>
        <p className="text-lg text-gray-400 mt-2">
            The page you are looking for does not exist.
        </p>
        <Link
            href="/"
            className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 transition-all duration-300"
        >
            🔙 Go Home
        </Link>
        <style jsx>{`
            h1 {
            font-size: 10rem;
            font-weight: bold;
            color: #00ffcc;
            }
        `}</style>
        </div>
    );
};

export default NotFound;
