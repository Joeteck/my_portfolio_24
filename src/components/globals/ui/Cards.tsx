"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";
import { useRef } from "react";

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
                    <div className="card-overlay" />
                </div>
            )}

            {/* Content based on variant */}
            <div className="card-content">
                {variant === "blog" && (
                    <>
                        {title && <h3 className="card-title">{title}</h3>}
                        {author && <p className="card-meta">By {author}</p>}
                        {description && <p className="card-description">{description}</p>}
                        {children}
                    </>
                )}

                {variant === "profile" && (
                    <>
                        {title && <h3 className="profile-name">{title}</h3>}
                        {role && <p className="profile-role">{role}</p>}
                        {description && <p className="profile-description">{description}</p>}
                        {children}
                    </>
                )}

                {variant === "project" && (
                    <>
                        {title && <h3 className="project-title">{title}</h3>}
                        {description && <p className="project-description">{description}</p>}
                        {children}
                    </>
                )}

                {variant === "testimonial" && (
                    <>
                        {description && <p className="testimonial-text">{description}</p>}
                        {author && <p className="testimonial-author">— {author}</p>}
                    </>
                )}

                {variant === "service" && (
                    <>
                        {title && <h3 className="service-title">{title}</h3>}
                        {description && <p className="service-description">{description}</p>}
                        {children}
                    </>
                )}

                {variant === "team" && (
                    <>
                        {title && <h3 className="team-name">{title}</h3>}
                        {role && <p className="team-role">{role}</p>}
                        {children}
                    </>
                )}

                {variant === "pricing" && (
                    <>
                        {title && <h3 className="pricing-title">{title}</h3>}
                        {price && <p className="pricing-price">{price}</p>}
                        {description && <p className="pricing-description">{description}</p>}
                        {children}
                    </>
                )}

                {variant === "faq" && (
                    <>
                        {title && <h3 className="faq-question">{title}</h3>}
                        {description && <p className="faq-answer">{description}</p>}
                        {children}
                    </>
                )}

                {variant === "case-study" && (
                    <>
                        {title && <h3 className="case-study-title">{title}</h3>}
                        {description && <p className="case-study-description">{description}</p>}
                        {children}
                    </>
                )}
            </div>
        </div>
    );
}
