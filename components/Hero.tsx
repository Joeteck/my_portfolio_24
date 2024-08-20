"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation"; // Use next/navigation in the app directory
import { FlipWords } from "./ui/flip-words";
import HeroNavbar from "./HeroNavbar";

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState("");
    // const router = useRouter();

    // const handleSearch = (e) => {
    //     e.preventDefault();

    //     // Define your routing logic here
    //     const lowerCaseQuery = searchQuery.toLowerCase();

    //     if (lowerCaseQuery === "about" || lowerCaseQuery === "know him") {
    //     router.push("/about"); // Example route
    //     } else if (lowerCaseQuery === "projects") {
    //     router.push("/projects"); // Example route
    //     } else {
    //     alert("Keyword not found");
    //     }
    // };

    return (
        <div >
            <div className="">
                <HeroNavbar/>
            </div>
            <div className=" flex flex-col w-full h-[100vh]  items-center text-center md:justify-center max-md:pt-[30%]">
                <h1 className="md:text-7xl text-5xl font-bold bg-clip-text text-transparent p-3 bg-gradient-to-t from-gray-800 via-light-white to-white shadow-inner">
                Let's Journey with <FlipWords words={["Joeteck", "Joel", "Jode"]} className="text-white" />
                </h1>

                <div className="md:w-[50%] w-[80%] mx-auto">
                <p className="text-grey-200 text-sm max-md:text-justify  pb-3 w md:mx-auto">
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
                <form className="relative md:w-[80%] w-full mx-auto">
                    <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search anything..."
                    className="w-full p-3 placeholder:text-grey-200 text-sm rounded-lg text-grey-200 bg-transparent border border-grey-200"
                    />
                    <button
                    type="submit"
                    className="absolute right-0 top-0 h-full border-l  border-grey-200 px-4 hover:bg-primary-green transition  text-white rounded-r-lg"
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
