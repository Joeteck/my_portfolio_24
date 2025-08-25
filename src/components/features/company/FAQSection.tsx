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
        answer: "I specialize in modern web and mobile development technologies. My frontend stack includes React, React Native, Next.js, TypeScript, and Tailwind CSS, allowing me to build fast, scalable, and responsive applications. On the backend, I primarily use Django and Firebase, leveraging their robust features for authentication, database management, and API development. I also have experience with Node.js for backend services and server-side applications."
    },
    { 
        question: "Can I see your previous projects?", 
        answer: "Yes! You can explore my portfolio to view my latest projects, case studies, and experiments. I have worked on various applications, including e-commerce platforms, SaaS solutions, blockchain projects, and custom web applications. Each project showcases my ability to solve complex problems with clean, scalable, and efficient code."
    },
    { 
        question: "Do you accept freelance or contract work?", 
        answer: "Yes, I take on select freelance and contract-based projects, depending on scope, timeline, and alignment with my expertise. I enjoy working with startups, businesses, and individuals to bring their ideas to life with high-quality software solutions. If you're interested in working with me, feel free to contact me with your project details so we can discuss how I can help."
    },
    { 
        question: "Do you contribute to open-source projects?", 
        answer: "Absolutely! I actively contribute to open-source projects, especially in areas related to web development, automation, and developer tooling. Open-source collaboration allows me to stay engaged with the developer community, improve my skills, and help build software that benefits a wider audience."
    },
    { 
        question: "What is your approach to UI/UX design?", 
        answer: "I believe in a user-centric design approach that balances aesthetics with functionality. My UI/UX design process involves understanding user needs, wireframing, prototyping, and implementing visually appealing interfaces that prioritize accessibility and responsiveness. I leverage tools like Figma for design prototyping and Tailwind CSS for streamlined styling."
    },
    { 
        question: "How can I contact you for collaborations?", 
        answer: "You can reach out to me via email, LinkedIn, or through my website’s contact page. I am open to discussions about potential collaborations, mentorship opportunities, and innovative projects. Whether it's a tech-related initiative or an open-source contribution, I’d be happy to connect!"
    },
];

const companyFAQ = [
    { 
        question: "What services does Joeteck IT Consult offer?", 
        answer: "Joeteck IT Consult provides cutting-edge technology solutions tailored to businesses and startups. Our core services include:\n\n- **Web & Mobile App Development**: We build custom applications that are scalable, secure, and user-friendly.\n- **Cloud Solutions**: We offer cloud-based services such as hosting, cloud computing, and database management.\n- **Cybersecurity**: We ensure robust security protocols to protect your digital assets.\n- **IT Consulting**: We help businesses strategize and implement the right technology solutions to improve efficiency and growth.\n\nWe tailor our services to meet the unique needs of our clients, ensuring quality and innovation in every project."
    },
    { 
        question: "What industries do you serve?", 
        answer: "We work with businesses across multiple industries, including:\n\n- **Fintech**: Secure payment systems, financial management tools, and blockchain-based solutions.\n- **E-commerce**: Custom-built e-commerce platforms with seamless integrations and payment gateways.\n- **Healthcare**: Telemedicine apps, patient management systems, and secure health data solutions.\n- **Education**: E-learning platforms, student portals, and management systems.\n- **Logistics**: Fleet management, real-time tracking solutions, and automation tools.\n\nOur expertise extends to other industries that require scalable digital transformation."
    },
    { 
        question: "Do you provide maintenance and support?", 
        answer: "Yes! We provide ongoing maintenance and support for all projects we develop. Our services include bug fixes, security updates, performance optimizations, and feature enhancements to ensure that your application remains up-to-date, secure, and fully functional. We offer flexible support plans, whether it's a one-time update or long-term maintenance."
    },
    { 
        question: "Can you help with an existing project?", 
        answer: "Absolutely! We can analyze your existing project, identify areas for improvement, and provide solutions to optimize performance, security, and scalability. Whether you need debugging, refactoring, feature additions, or complete redevelopment, our team is equipped to handle it."
    },
    { 
        question: "How does your development process work?", 
        answer: "Our development process follows a structured and agile approach to ensure efficiency and transparency:\n\n1. **Discovery & Consultation** - We discuss your needs, define the project scope, and establish goals.\n2. **Planning & UI/UX Design** - We create wireframes, prototypes, and design guidelines to ensure a seamless user experience.\n3. **Development & Implementation** - We build the product using modern technologies, following best coding practices.\n4. **Testing & QA** - We conduct rigorous testing to ensure functionality, security, and performance.\n5. **Deployment & Support** - We launch the product and provide post-launch support, updates, and maintenance.\n\nOur approach ensures that projects are delivered on time, within budget, and aligned with client expectations."
    },
    { 
        question: "How much does a project cost?", 
        answer: "The cost of a project depends on several factors, including its complexity, required features, and development timeline. We offer customized pricing based on your specific needs and budget. To get an accurate quote, we recommend scheduling a free consultation where we can assess your requirements and provide a detailed cost estimate."
    },
    { 
        question: "How can I request a consultation?", 
        answer: "You can request a consultation by:\n\n- **Filling out the contact form** on our website.\n- **Sending us an email** with your project details.\n- **Calling our support team** to discuss your requirements.\n\nOur team will reach out to schedule a session where we can discuss your business goals and how we can help you achieve them through technology."
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
                        name="faq-search"
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
