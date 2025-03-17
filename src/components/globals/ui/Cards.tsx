"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";
import { useRef } from "react";

interface CardProps {
    variant?: "profile" | "project" | "testimonial" | "service" | "team" | "pricing" | "faq" | "case-study" | "blog";
    image?: string;
    title?: string;
    description?: string;
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
            {/* Image Section */}
            {image && (
                <div className="card-image-wrapper">
                    <Image src={image} alt={imageAlt} width={400} height={250} className="card-image" />
                    <div className="card-overlay" />
                </div>
            )}

            {/* Content */}
            <div className="card-content">
                {title && <h3 className="card-title">{title}</h3>}
                {description && <p className="card-description">{description}</p>}
                {children}
            </div>
        </div>
    );
}
