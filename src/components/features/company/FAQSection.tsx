import { useState } from "react";
import Accordion from "@/components/globals/ui/Accordion";
import { Heading } from "@/components/globals/typography/Heading";
import { Paragraph } from "@/components/globals/typography/Paragraph";
import { Container } from "@/components/globals/layout/Container";
import TextInput from "@/components/globals/form/TextInput";
import { MessageCircle } from "lucide-react";

const portfolioFAQ = [
    { 
        question: "What technologies do you specialize in?", 
        answer: "I primarily work with React, React Native Next.js, TypeScript, Tailwind CSS, and Node.js. For backend development, I use Django and Firebase." 
    },
    { 
        question: "Can I see your previous projects?", 
        answer: "Yes! You can explore my portfolio to see my latest projects, case studies, and experiments in software development." 
    },
    { 
        question: "Do you accept freelance or contract work?", 
        answer: "Yes, I take on select freelance projects and collaborations. Feel free to contact me with your project details." 
    },
    { 
        question: "Do you contribute to open-source projects?", 
        answer: "Yes! I actively contribute to open-source projects, build developer tools, and participate in the tech community." 
    },
    { 
        question: "What is your approach to UI/UX design?", 
        answer: "I focus on clean, minimal, and functional UI/UX designs, incorporating the latest design trends and accessibility standards." 
    },
    { 
        question: "How can I contact you for collaborations?", 
        answer: "You can reach me via email, LinkedIn, or through my website's contact page." 
    },
];


const companyFAQ = [
    { 
        question: "What services does Joeteck IT Consult offer?", 
        answer: "We specialize in web and mobile app development, cloud solutions, cybersecurity, and IT consulting. We also offer tailored software solutions to help businesses scale." 
    },
    { 
        question: "What industries do you serve?", 
        answer: "We work with startups, SMEs, and enterprises across various industries, including fintech, e-commerce, healthcare, education, and logistics." 
    },
    { 
        question: "Do you provide maintenance and support?", 
        answer: "Yes, we offer ongoing maintenance, updates, and support to ensure optimal performance for all the solutions we develop." 
    },
    { 
        question: "Can you help with an existing project?", 
        answer: "Absolutely! Whether you need to improve, optimize, or scale an existing project, we can analyze your current setup and provide the best solutions." 
    },
    { 
        question: "How does your development process work?", 
        answer: "Our process involves discovery, planning, UI/UX design, development, testing, deployment, and ongoing support. We maintain clear communication at every stage." 
    },
    { 
        question: "How much does a project cost?", 
        answer: "The cost varies based on project complexity, features, and timelines. Contact us for a free consultation to get an accurate quote." 
    },
    { 
        question: "How can I request a consultation?", 
        answer: "You can reach out via our website’s contact form, email, or phone to schedule a free consultation." 
    },
];


interface FAQSectionProps {
    isPortfolio?: boolean; // Determines whether it's for Portfolio or Company
}

const FAQSection: React.FC<FAQSectionProps> = ({ isPortfolio = false }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [search, setSearch] = useState("");

    const faqs = isPortfolio ? portfolioFAQ : companyFAQ;
    const filteredFAQs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(search.toLowerCase()) ||
            faq.answer.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container>
            <Heading variant="title" className="text-center mb-8">
                Frequently Asked Questions
            </Heading>

                        {/* Search Bar */}
            <div className="w-full pb-3">
                <div className="relative w-full max-w-lg mx-auto">
                    <TextInput
                        type="text"
                        placeholder="What are you looking for?"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-8">
                {/* Chat Prompt - 35% */}
                <div className="lg:w-1/3 flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg items-center">
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                        Can’t find what you are looking for?
                    </p>
                    <p className="text-lg font-bold text-center">
                        We would like to chat with you.
                    </p>
                    <div className="mt-4">
                        <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-80 transition">
                            <MessageCircle />
                        </button>
                    </div>
                </div>

                {/* FAQ Content - 65% */}
                <div className="lg:w-2/3">

                    {/* Accordion List */}
                    <div className="flex flex-col gap-2">
                        {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((item, index) => (
                                <Accordion
                                    key={index}
                                    title={item.question}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <Paragraph>{item.answer}</Paragraph>
                                </Accordion>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
                                No matching results found.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FAQSection;
