import Image from "next/image";
import { cn } from "@/utils/cn";

interface CardProps {
    variant?: "profile" | "project" | "testimonial" | "service" | "team" | "pricing" | "faq" | "case-study";
    image?: string;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
    imageAlt?: string;
}

export default function Card({ 
    variant, 
    image, 
    title, 
    description, 
    children, 
    className,
    imageAlt = "Card image" 
    }: CardProps) {
    return (
        <div className={cn("card", variant && `${variant}-card`, className)}>
        {image && (
            <div className="relative w-full h-48">
            <Image 
                src={image} 
                alt={imageAlt} 
                fill 
                className="rounded-t-2xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
            </div>
        )}
        <div className="card-content">
            {title && <h3 className="text-lg font-semibold">{title}</h3>}
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
            {children}
        </div>
        </div>
    );
}
