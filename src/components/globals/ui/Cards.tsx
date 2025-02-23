"use client";

import Image from "next/image";
import { cn } from "@/utils/cn";
import { useRef } from "react";

interface CardProps {
    variant?: "profile" | "project" | "testimonial" | "service" | "team" | "pricing" | "faq" | "case-study";
    headImage?: string; // Can be an image URL or a color
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
    headImage,
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
            {/* Head Image (Color or Image) */}
            {headImage && (
                <div
                    className="relative w-full h-7 rounded-t-2xl"
                    style={{
                        backgroundColor: headImage.startsWith("#") || headImage.startsWith("rgb") ? headImage : "transparent",
                    }}
                >
                    {!headImage.startsWith("#") && !headImage.startsWith("rgb") && (
                        <Image
                            src={headImage}
                            alt={imageAlt}
                            fill
                            className="rounded-t-2xl object-cover"
                            sizes="100%"
                            priority
                        />
                    )}
                </div>
            )}

            {/* Main Image */}
            {image && (
                <div className="relative w-full h-48">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>
            )}

            {/* Card Content */}
            <div className="card-content">
                {title && <h3 className="text-lg font-semibold">{title}</h3>}
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
                {children}
            </div>
        </div>
    );
}
