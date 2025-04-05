"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Heading } from "@/components/globals/typography/Heading";
import { Paragraph } from "@/components/globals/typography/Paragraph";
import { Container } from "@/components/globals/layout/Container";
import { Navbar } from "@/components/globals/layout/Navbar";
import TextInput from "@/components/globals/form/TextInput";
import Checkbox from "@/components/globals/form/Chechkbox";
import SelectDropdown from "@/components/globals/form/SelectDropdown";
import Textarea from "@/components/globals/form/Textarea";
import DatePicker from "@/components/globals/form/DatePicker";
import ToggleSwitch from "@/components/globals/form/ToggleSwitch";
import FileUpload from "@/components/globals/form/FileUpload";
import BlogPostPreviewCard from "@/components/features/company/BlogPostPreviewCard";
import ContactInfoCard from "@/components/features/company/ContactInfoCard";
import Card from "@/components/globals/ui/Card";
import { Grid } from "@/components/globals/layout/GridSystem";
import PricingTable from "@/components/features/company/PricingTable";
import FAQSection from "@/components/features/company/FAQSection";
import { CustomSlider } from "@/components/globals/layout/Slider";
import Image from "next/image";
import { PartnerLogoSlider } from "@/components/features/company/PartnerLogoSlider";
import { ServiceCard } from "@/components/features/company/ServiceCard";
import { TeamMemberCard } from "@/components/features/company/TeamMemberCard";

// Dynamic import for ThemeSwitch to prevent SSR issues
const ThemeSwitch = dynamic(() => import("@/components/globals/ui/ThemeSwitch"), { ssr: false });

const TestingPage = () => {
    const blogPosts = [
        {
        title: "The Future of Web Development",
        description: "Discover the latest trends shaping the future of web technologies.",
        imageUrl: "/images/blog/web_future.jpg",
        link: "https://fast.com/",
        },
        {
        title: "UI/UX Best Practices for 2025",
        description: "Learn about modern UI/UX principles for creating seamless experiences.",
        imageUrl: "/images/blog/ui-ux-tips.png",
        link: "https://fast.com/",
        },
        {
        title: "Mastering JavaScript Performance",
        description: "Optimize your JavaScript code for speed and efficiency.",
        imageUrl: "/images/blog/js-performance.jpg",
        link: "https://fast.com/",
        },
    ];

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileSelect = (file: File) => {
        setSelectedFile(file);
    };

    // Sign In Form State
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    // Sign Up Form State
    const [signUpData, setSignUpData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        bio: "",
        termsAccepted: false,
    });

    const [isToggled, setIsToggled] = useState<boolean>(false);

    const handleToggle = (checked: boolean) => {
        setIsToggled(checked);
    };

    const handleSignInSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Sign In Data:", signInData);
    };

    const handleSignUpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Sign Up Data:", signUpData);
    };

    return (
        <>
            <Navbar type="company" />
            <div className="min-h-screen flex flex-col justify-between p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <ThemeSwitch />

                <PartnerLogoSlider/>

                <Container className="flex flex-row gap-5 w-full">
                    <ServiceCard
                        title="Web Development"
                        description="We create modern, scalable, and high-performing web applications tailored to your needs."
                        image="/images/service/web-dev.jpg"
                        />

                    <TeamMemberCard
                        name="Adeyoju Joel"
                        role="Lead Frontend Engineer"
                        image="/images/team/joel.jpg"
                        className="w-full"
                    />

                </Container>

                <FAQSection isPortfolio={true} />
                <FAQSection isPortfolio={false} />
                
                <Container>
                        <Grid cols={2} className="mb-6">
                            <ContactInfoCard
                                    name = "Adeyoju Joel"
                                    role = "Software Engineer"
                                    email = "joelitserver@gmail.com"
                                    phone = "+2348058509717"
                                    location = "Nigeria(Remote)"
                                    />
                            <Card
                                variant="pricing" 
                                title="Premium Plan" 
                                price="$49/month" 
                                description="Get unlimited access to all features!"
                            />
                        </Grid>
                            <PricingTable/>
                    </Container>

                <Container className="py-10 my-10">
                    <Heading className="mb-6">Blog Post Preview Test</Heading>
                    <Grid cols={3}>
                        {blogPosts.map((post, index) => (
                        <BlogPostPreviewCard key={index} {...post} />
                        ))}
                    </Grid>
                </Container>

                <Container maxWidth="sm" className="w-[95%] md:w-[30%]">
                    <Heading className="mt-6">Sign In Form</Heading>
                    <Paragraph>Test the sign-in form below.</Paragraph>
                    <form onSubmit={handleSignInSubmit} className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <TextInput
                            type = "email"
                            placeholder="Email"
                            value={signInData.email}
                            onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                        />
                        <TextInput
                            type = "password"
                            placeholder="Password"
                            value={signInData.password}
                            onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                            showToggle
                        />
                        <Checkbox
                            label="Remember Me"
                            checked={signInData.rememberMe}
                            onChange={(checked) => setSignInData({ ...signInData, rememberMe: checked })}
                        />
                        <DatePicker />
                        <ToggleSwitch checked={isToggled} onChange={handleToggle} />
                        <button type="submit" className="px-4 py-2 bg-[#1BBB8B] text-white rounded-md">Sign In</button>
                    </form>
                </Container>

                <Container maxWidth="sm" className="my-12 w-[90%] md:w-[30%]">
                    <Heading className="mt-6">Sign Up Form</Heading>
                    <Paragraph>Test the sign-up form below.</Paragraph>
                    <form onSubmit={handleSignUpSubmit} className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <TextInput
                            type="text"
                            placeholder="Full Name"
                            value={signUpData.fullName}
                            onChange={(e) => setSignUpData({ ...signUpData, fullName: e.target.value })}
                        />
                        <TextInput
                            type="email"
                            placeholder="Email"
                            value={signUpData.email}
                            onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                        />
                        <TextInput
                            type="password"
                            placeholder="Password"
                            value={signUpData.password}
                            onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                            showToggle
                        />
                        <TextInput
                            type="password"
                            placeholder="Confirm Password"
                            value={signUpData.confirmPassword}
                            onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                            showToggle
                        />
                        <SelectDropdown
                            options={["Male", "Female", "Other"]}
                            value={signUpData.gender}
                            onChange={(value) => setSignUpData({ ...signUpData, gender: value })}
                        />
                        <Paragraph>Upload a file to see the details below:</Paragraph>

                        <FileUpload onFileSelect={handleFileSelect} />

                        {selectedFile && (
                        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <Paragraph><strong>File Name:</strong> {selectedFile.name}</Paragraph>
                            <Paragraph><strong>File Type:</strong> {selectedFile.type}</Paragraph>
                            <Paragraph><strong>File Size:</strong> {(selectedFile.size / 1024).toFixed(2)} KB</Paragraph>
                        </div>
                        )}
                        <Textarea
                            placeholder="Short Bio"
                            value={signUpData.bio}
                            onChange={(value) => setSignUpData({ ...signUpData, bio: value })}
                        />
                        <Checkbox
                            label="Accept Terms and Conditions"
                            checked={signUpData.termsAccepted}
                            onChange={(checked) => setSignUpData({ ...signUpData, termsAccepted: checked })}
                        />
                        <button type="submit" className="px-4 py-2 bg-[#1BBB8B] text-white rounded-md">Sign Up</button>
                    </form>
                </Container>
            </div>
        </>
    );
};

export default TestingPage;
