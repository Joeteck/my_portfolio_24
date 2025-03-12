"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Heading } from "@/components/globals/typography/Headings";
import { Paragraph } from "@/components/globals/typography/Paragraphs";
import { Container } from "@/components/globals/layout/Container";
import { Footer } from "@/components/globals/layout/Footer";

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
        <>
            <div className="min-h-screen flex flex-col justify-between p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <div>
                    <ThemeSwitch setTheme={setTheme} theme={theme} />

                    <Heading className="mt-6">Container Variants</Heading>
                    <Paragraph className="mb-4">Testing different container configurations.</Paragraph>

                    <Container>
                        <Paragraph>Default Container</Paragraph>
                        <Container fluid className="mt-6">
                            <Paragraph>Fluid Container (Full Width)</Paragraph>
                        </Container>
                    </Container>

                    <Container maxWidth="sm" className="mt-6">
                        <Paragraph>Max Width: sm</Paragraph>
                    </Container>

                    <Container maxWidth="md" className="mt-6">
                        <Paragraph>Max Width: md</Paragraph>
                    </Container>

                    <Container maxWidth="lg" className="mt-6">
                        <Paragraph>Max Width: lg</Paragraph>
                    </Container>

                    <Container maxWidth="xl" className="mt-6">
                        <Paragraph>Max Width: xl</Paragraph>
                    </Container>

                    <Container maxWidth="2xl" className="mt-6">
                        <Paragraph>Max Width: 2xl</Paragraph>
                    </Container>
                </div>

                {/* FOOTERS */}
            </div>
            <div className="mt-12">
                <Heading className="mt-6 text-center">Joeteck IT Consult Footer</Heading>
                <Footer type="company" />

                <Heading className="mt-6 text-center">Portfolio Footer</Heading>
                <Footer type="portfolio" />
            </div>
        </>
    );
};

export default TestingPage;