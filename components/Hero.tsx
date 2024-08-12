"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation in the app directory
import { FlipWords } from "./ui/flip-words";
import HeroNavbar from "./HeroNavbar";

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();

        // Define your routing logic here
        const lowerCaseQuery = searchQuery.toLowerCase();

        if (lowerCaseQuery === "about" || lowerCaseQuery === "know him") {
        router.push("/about"); // Example route
        } else if (lowerCaseQuery === "projects") {
        router.push("/projects"); // Example route
        } else if (lowerCaseQuery === "contact") {
        router.push("/contact"); // Example route
        } else {
        alert("Keyword not found");
        }
    };

    return (
        <div >
        <div className="">
            <HeroNavbar/>
        </div>
        <div className=" flex flex-col w-full h-[100vh]  items-center text-center justify-center">
            <h1 className="md:text-7xl text-5xl font-bold bg-clip-text text-transparent p-3 bg-gradient-to-t from-gray-800 via-light-white to-white shadow-inner">
            Let's Journey with <FlipWords words={["Tech", "Design", "Code"]} className="text-primary-green-100" />
            </h1>

            <div className="w-[50%] mx-auto">
            <p className="text-light-white text-sm  pb-3 mx-auto">
                Welcome to Joeteck, where innovation meets craftsmanship in the world
                of software development. I’m Joel, the mind behind Joeteck, and I’m
                here to bring your digital vision to life. With a strong foundation in
                frontend and backend development, I create seamless, scalable, and
                user-centric solutions tailored to your needs. Whether you need a
                cutting-edge e-commerce platform, a dynamic web application, or a
                robust backend system, Joeteck delivers excellence with a touch of
                creativity. Let's turn your ideas into reality together.
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="relative w-[80%] mx-auto">
                <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything..."
                className="w-full p-3 rounded-lg text-grey bg-transparent"
                />
                <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 bg-[#1dd686] hover:bg-primary-green-600 text-white rounded-r-lg"
                >
                Search
                </button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Hero;
