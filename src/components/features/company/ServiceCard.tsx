// components/cards/ServiceCard.tsx

import React from "react";
import Card from "@/components/globals/ui/Card";

interface ServiceCardProps {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    className?: string;
    tilt?: boolean;
    children?: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    image,
    imageAlt = "Service Image",
    className,
    tilt = false,
    children
    }) => {
    return (
        <Card
        variant="service"
        title={title}
        description={description}
        image={image}
        imageAlt={imageAlt}
        tilt={tilt}
        className={className}
        >
        {children && <div className="mt-4">{children}</div>}
        </Card>
    );
};
