"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";
import { useRef, useEffect, useCallback } from "react";
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
    const tiltX = useRef(0);
    const tiltY = useRef(0);
    const animationFrame = useRef<number | null>(null);

    const updateTilt = useCallback(() => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltY.current}deg) rotateY(${tiltX.current}deg)`;
        animationFrame.current = requestAnimationFrame(updateTilt);
    }, []);

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!tilt || !cardRef.current) return;
        const card = cardRef.current;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = event.clientX - left - width / 2;
        const y = event.clientY - top - height / 2;

        tiltX.current = (x / width) * 20;
        tiltY.current = -(y / height) * 20;

        if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(updateTilt);
        }
    };

    const handleMouseLeave = () => {
        if (!tilt || !cardRef.current) return;
        tiltX.current = 0;
        tiltY.current = 0;
        requestAnimationFrame(updateTilt);
    };

    useEffect(() => {
        return () => {
        if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
        };
    }, []);

    return (
        <div
        ref={cardRef}
        className={cn("card", variant && `${variant}-card`, tilt && "tilt-card", className)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        >
        {/* Image Section */}
        {image && (
            <div className={cn((variant === "profile") || (variant === "testimonial") ? "justify-center items-center flex mt-4" : "")}>
                <div className={cn(
                    variant === "profile" ? "profile-image-wrapper" :
                    variant === "testimonial" ? "testimonial-image-wrapper" :
                    "card-image-wrapper"
                )}>
                    <Image
                    src={image}
                    alt={imageAlt}
                    width={variant === "profile" ? 128 : variant === "testimonial" ? 112 : 400}
                    height={variant === "profile" ? 128 : variant === "testimonial" ? 112 : 250}
                    className={cn("card-image", variant === "profile" ? "image-profile" : variant === "testimonial" ? "image-testimonial" : `image-${variant}`)}
                    priority={false}
                    loading="lazy"
                    />
                    {variant === "blog" && <div className="card-overlay" />}
                </div>
                </div>
        )}

        {/* Content */}
        <div className={cn((variant === "profile") || (variant === "testimonial") || (variant === "pricing") ? "card-content text-center items-center justify-center" : "card-content")}>
            <Heading className={cn((variant === "profile") || (variant === "testimonial") ? "card-title text-center" : "card-title")} variant={variant === "profile" ? "title" : "subtitle"}>
            {title}
            </Heading>

            {variant === "profile" && role && <Paragraph className={cn((variant === "profile") || (variant === "testimonial") ? "profile-role text-center" : "profile-role")} >{role}</Paragraph>}
            {variant !== "profile" && author && <Paragraph className="card-meta">By {author}</Paragraph>}
            {price && <Heading className={cn((variant === "pricing") ? "text-center" : "card-description")} gradient= {true}>{price}</Heading>}
            {description && <Paragraph className={cn((variant === "profile") || (variant === "testimonial") || (variant === "pricing") ? "card-description text-center" : "card-description")} size={variant === "pricing" ? "lg" : "md"} weight={variant === "pricing" ? "bold" : "normal"}>{description}</Paragraph>}

            {children}
        </div>
        </div>
    );
}
