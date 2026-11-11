// components/cards/TeamMemberCard.tsx
import React from "react";
import Card from "@/components/globals/ui/Card";
import { Paragraph } from "@/components/globals/typography/Paragraph";
import { MapPin } from "lucide-react";

interface TeamMemberCardProps {
    name: string;
    role: string;
    image?: string;
    description?: string;
    className?: string;
    location?: string;
    email?: string;
    tilt?: boolean;
    children?: React.ReactNode;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
    name,
    role,
    image,
    description,
    location,
    email,
    className,
    tilt = false,
    }) => {
    return (
        <Card 
            variant="profile"
            image={image}
            imageAlt={`${name}'s profile picture`}
            title={name}
            role={role}
            description={description}
            className = {`h-fit w-fit ${className}`}
            tilt = {tilt}
        >
            {/* Contact Details */}
            {(location || email) && (<div className="w-full text-sm text-gray-100 justify-center items-center text-center dark:text-gray-300">
                {location && (<Paragraph className="flex justify-center items-center gap-2">
                    <MapPin size={16} aria-label="Location" /> 
                    {location}
                </Paragraph>)}
                {/* Call-to-Action Button */}
                {email && (<a href={`mailto:${email}`} className="card-link">
                    Send a Message ✉️
                </a>)}

            </div>)}
        </Card>
    );
};
