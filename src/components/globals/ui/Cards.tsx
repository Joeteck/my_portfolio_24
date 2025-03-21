"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";
import { useRef } from "react";
import { Paragraph } from "../typography/Paragraphs";
import { Heading } from "../typography/Headings";

interface CardProps {
    variant?: "profile" | "project" | "testimonial" | "service" | "team" | "pricing" | "faq" | "case-study" | "blog";
    image?: string;
    title?: string;
    description?: string;
    price?: string; // For pricing
    author?: string; // For blog/testimonial
    role?: string; // For profile/team
    children?: React.ReactNode;
    className?: string;
    imageAlt?: string;
    tilt?: boolean;
}

export default function Card({
    variant,
    image,
    title,
    description,
    price,
    author,
    role,
    children,
    className,
    imageAlt = "Card image",
    tilt = false,
}: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!tilt || !cardRef.current) return;
        const card = cardRef.current;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = event.clientX - left - width / 2;
        const y = event.clientY - top - height / 2;
        card.style.setProperty("--tiltX", `${x / 25}deg`);
        card.style.setProperty("--tiltY", `${-y / 25}deg`);
    };

    const handleMouseLeave = () => {
        if (!tilt || !cardRef.current) return;
        cardRef.current.style.setProperty("--tiltX", "0deg");
        cardRef.current.style.setProperty("--tiltY", "0deg");
    };

    return (
        <div
            ref={cardRef}
            className={cn("card", variant && `${variant}-card`, tilt && "tilt-card", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Image Section - Different Styles for Different Variants */}
            {image && (
                <div className={cn("card-image-wrapper", variant && `image-${variant}`)}>
                    <Image src={image} alt={imageAlt} width={400} height={250} className={cn("card-image", variant && `image-${variant}`)} />
                    {variant === "blog" && <div className="card-overlay" />}
                </div>
            )}

            {/* Content based on variant */}
            <div className="card-content">
                {variant === "blog" && (
                    <>
                        {title && <Heading className="card-title">{title}</Heading>}
                        {author && <Paragraph className="card-meta">By {author}</Paragraph>}
                        {description && <Paragraph className="card-description">{description}</Paragraph>}
                        {children}
                    </>
                )}

                {variant === "profile" && (
                    <>
                        {title && <Heading className="profile-name">{title}</Heading>}
                        {role && <Paragraph className="profile-role">{role}</Paragraph>}
                        {description && <Paragraph className="profile-description">{description}</Paragraph>}
                        {children}
                    </>
                )}

                {variant === "project" && (
                    <>
                        {title && <Heading className="project-title">{title}</Heading>}
                        {description && <Paragraph className="project-description">{description}</Paragraph>}
                        {children}
                    </>
                )}

                {variant === "testimonial" && (
                    <>
                        {description && <Paragraph className="testimonial-text">{description}</Paragraph>}
                        {author && <Paragraph className="testimonial-author">— {author}</Paragraph>}
                    </>
                )}

                {variant === "service" && (
                    <>
                        {title && <Heading className="service-title">{title}</Heading>}
                        {description && <Paragraph className="service-description">{description}</Paragraph>}
                        {children}
                    </>
                )}

                {variant === "team" && (
                    <>
                        {title && <Heading className="team-name">{title}</Heading>}
                        {role && <Paragraph className="team-role">{role}</Paragraph>}
                        {children}
                    </>
                )}

                {variant === "pricing" && (
                    <>
                        {title && <Heading className="pricing-title">{title}</Heading>}
                        {price && <Paragraph className="pricing-price">{price}</Paragraph>}
                        {description && <Paragraph className="pricing-description">{description}</Paragraph>}
                        {children}
                    </>
                )}

                {variant === "faq" && (
                    <>
                        {title && <Heading className="faq-question">{title}</Heading>}
                        {description && <Paragraph className="faq-answer">{description}</Paragraph>}
                        {children}
                    </>
                )}

                {variant === "case-study" && (
                    <>
                        {title && <Heading className="case-study-title">{title}</Heading>}
                        {description && <Paragraph className="case-study-description">{description}</Paragraph>}
                        {children}
                    </>
                )}
            </div>
        </div>
    );
}
