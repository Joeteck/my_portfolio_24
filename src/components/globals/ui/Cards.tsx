"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";
import { useRef, useCallback } from "react";
import { Paragraph } from "../typography/Paragraphs";
import { Heading } from "../typography/Headings";
import { memo } from "react";

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

// Predefined image settings based on variant
const imageVariants = {
    profile: { width: 128, height: 128, className: "image-profile", priority: true },
    testimonial: { width: 96, height: 96, className: "image-testimonial", priority: true },
    blog: { width: 400, height: 250, className: "image-blog", priority: false },
    project: { width: 400, height: 250, className: "image-project", priority: false },
    service: { width: 160, height: 160, className: "image-service", priority: false },
    pricing: { width: 160, height: 160, className: "image-pricing", priority: false },
    team: { width: 160, height: 160, className: "image-team", priority: false },
    caseStudy: { width: 160, height: 160, className: "image-case-study", priority: false },
    faq: { width: 160, height: 160, className: "image-faq", priority: false },
};

// Default values if variant is not found
const defaultVariant = { width: 400, height: 250, className: "card-image", priority: false };

const Card = memo(function Card({
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
    let animationFrameId: number | null = null;

    const { width, height, className: imgClass, priority } = imageVariants[variant as keyof typeof imageVariants] || defaultVariant;

    // Handle tilt effect
    const handleMouseMove = useCallback((event: React.MouseEvent) => {
        if (!tilt || !cardRef.current) return;

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        animationFrameId = requestAnimationFrame(() => {
            const card = cardRef.current!;
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (event.clientX - left - width / 2) / 25;
            const y = -(event.clientY - top - height / 2) / 25;
            card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
        });
    }, [tilt]);

    // Reset tilt on mouse leave
    const handleMouseLeave = useCallback(() => {
        if (!tilt || !cardRef.current) return;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }, [tilt]);

    return (
        <div
            ref={cardRef}
            className={cn("card", variant && `${variant}-card`, tilt && "tilt-card", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Image Section */}
            {image && (
                <div className={cn("card-image-wrapper", imgClass && `${imgClass}-wrapper`)}>
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={width}
                        height={height}
                        className={cn("card-image", imgClass)}
                        priority={priority}
                        loading={priority ? "eager" : "lazy"}
                    />
                    {variant === "blog" && <div className="card-overlay" />}
                </div>
            )}

            {/* Content based on variant */}
            <div className="card-content">
                {variant === "blog" && (
                    <>
                        {title && <Heading variant="subtitle" className="card-title">{title}</Heading>}
                        {author && <Paragraph className="card-meta">By {author}</Paragraph>}
                        {description && <Paragraph className="card-description">{description}</Paragraph>}
                        {children}
                    </>
                )}

                {variant === "profile" && (
                    <>
                        {title && <Heading align="center" className="profile-name">{title}</Heading>}
                        {role && <Paragraph className="profile-role text-center">{role}</Paragraph>}
                        {description && <Paragraph className="profile-description text-center">{description}</Paragraph>}
                        {children}
                    </>
                )}

                {variant === "project" && (
                    <>
                        {title && <Heading variant="subtitle" className="project-title">{title}</Heading>}
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
                        {title && <Heading variant="subtitle" className="service-title">{title}</Heading>}
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
});

export default Card;
