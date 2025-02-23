"use client"
import { useState, useEffect } from "react";
import ThemeSwitch from "../../components/globals/ui/ThemeSwitch";
import Card from "../../components/globals/ui/Cards";

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
            <div className="w-fit grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 place-content-center justify-center bg-green-700/35 mx-auto space-y-6 p-4 rounded-3xl">
                {/* ✅ Profile Card */}
                <Card 
                    variant="profile"
                    headImage = "/images/card banner.jpg"
                    image="/images/profile.png"
                    title="John Doe"
                    description="Full Stack Developer"
                    tilt={true}

                />

                {/* ✅ Project Showcase Card */}
                <Card 
                    variant="project"
                    headImage="#2a9d8f"
                    image="/images/project.jpg"
                    title="Next.js Portfolio"
                    description="A modern portfolio built with Next.js and Tailwind CSS."
                    tilt={true}

                >
                    <button className="mt-2 p-2 bg-primary text-white rounded-md">View Project</button>
                </Card>

                {/* ✅ Testimonial Card */}
                <Card 
                    variant="testimonial"
                    title="Amazing Service!"
                    description="This is the best platform I've ever used. Highly recommended!"
                />

                {/* ✅ Service Card */}
                <Card 
                    variant="service"
                    headImage="rgba(42, 157, 143, 0.4)"
                    title="Web Development"
                    description="Custom website solutions to scale your business."
                    className="bg-primary text-white h-fit"
                />

                {/* ✅ Team Member Card */}
                <Card 
                    variant="team"
                    image="/images/team-member.jpg"
                    title="Jane Smith"
                    description="UI/UX Designer"
                    tilt={true}
                />

                {/* ✅ Pricing Card */}
                <Card 
                    variant="pricing"
                    headImage="#FF9D23"
                    title="Premium Plan"
                    description="$49/month - All features included."
                >
                    <button className="mt-2 p-2 bg-primary text-white rounded-md">Subscribe</button>
                </Card>

                {/* ✅ FAQ Card */}
                <Card 
                    variant="faq"
                    title="How does this work?"
                    description="Simply choose a plan, and you're ready to go!"
                />

                {/* ✅ Case Study Card */}
                <Card 
                    variant="case-study"
                    image="/images/case-study.jpg"
                    title="E-Commerce Success"
                    description="How we helped an online store increase sales by 300%."
                    tilt={true}

                />
            </div>
        </>
    );
};

export default TestingPage;
