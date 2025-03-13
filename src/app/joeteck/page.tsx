"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Heading } from "@/components/globals/typography/Headings";
import { Paragraph } from "@/components/globals/typography/Paragraphs";
import { Grid, GridItem } from "@/components/globals/layout/Grid System";
import { Container } from "@/components/globals/layout/Container";
import { Navbar } from "@/components/globals/layout/Navbar";

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

            <Navbar type = "company"/>
            <div className="min-h-screen flex flex-col justify-between p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <div>
                    <ThemeSwitch setTheme={setTheme} theme={theme} />

                    <Heading className="mt-6">Grid Variants</Heading>
                    <Paragraph className="mb-4">Testing different grid configurations.</Paragraph>

                    <Container>
                        <Heading className="mt-6">Default Grid</Heading>
                        <Grid className="grid grid-cols-3 gap-4">
                            <GridItem className="bg-primary">Item 1</GridItem>
                            <GridItem className="bg-primary">Item 2</GridItem>
                            <GridItem className="bg-primary">Item 3</GridItem>
                            <GridItem className="bg-primary">Item 4</GridItem>
                            <GridItem className="bg-primary">Item 5</GridItem>
                            <GridItem className="bg-primary">Item 6</GridItem>
                        </Grid>
                    </Container>

                    <Container className="mt-12">
                        <Heading className="mt-6">Masonry Grid</Heading>
                        <Grid className="grid grid-cols-3 gap-4">
                            <GridItem className="bg-secondary col-span-2">
                                <Container>
                                    <Grid className="grid grid-cols-3 gap-1 ">
                                        <GridItem className="bg-primary col-span-2">Wide Item 1</GridItem>
                                        <GridItem className="bg-primary">Item 2</GridItem>
                                        <GridItem className="bg-primary">Item 3</GridItem>
                                        <GridItem className="col-span-2 bg-primary">Wide Item 4</GridItem>
                                        <GridItem className="bg-primary">Item 5</GridItem>
                                    </Grid>
                                </Container>
                            </GridItem>
                            <GridItem className="bg-primary">Item 2</GridItem>
                            <GridItem className="bg-primary">Item 3</GridItem>
                            <GridItem className="col-span-2 bg-primary">Wide Item 4</GridItem>
                            <GridItem className="bg-primary">Item 5</GridItem>
                        </Grid>
                    </Container>

                    <Container className="mt-12">
                        <Heading className="mt-6">Responsive Grid</Heading>
                        <Grid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <GridItem>Item 1</GridItem>
                            <GridItem>Item 2</GridItem>
                            <GridItem>Item 3</GridItem>
                            <GridItem>Item 4</GridItem>
                            <GridItem>Item 5</GridItem>
                            <GridItem>Item 6</GridItem>
                        </Grid>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default TestingPage;
