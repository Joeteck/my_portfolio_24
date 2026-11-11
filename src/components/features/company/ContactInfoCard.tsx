"use client";

import { Paragraph } from "@/components/globals/typography/Paragraph";
import Card from "@/components/globals/ui/Card";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfoCardProps {
    name: string;
    role: string;
    description?: string;
    email?: string;
    phone?: string;
    location?: string;
    image?: string;
}

export default function ContactInfoCard({
    name,
    role,
    description,
    email,
    phone,
    location,
    image = "/images/profile.png",
}: ContactInfoCardProps) {
    return (
        <Card 
            variant="profile"
            image={image}
            imageAlt={`${name}'s profile picture`}
            title={name}
            role={role}
            description={description}
        >
            {/* Contact Details */}
            <div className="w-full text-sm text-gray-100 justify-center items-center text-center dark:text-gray-300">
                <Paragraph className="flex justify-center items-center gap-2">
                    <Mail size={16} aria-label="Email" /> 
                    <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                </Paragraph>
                <Paragraph className="flex justify-center items-center gap-2">
                    <Phone size={16} aria-label="Phone" /> 
                    <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                </Paragraph>
                <Paragraph className="flex justify-center items-center gap-2">
                    <MapPin size={16} aria-label="Location" /> 
                    {location}
                </Paragraph>

                {/* Call-to-Action Button */}
                <a href={`mailto:${email}`} className="card-link">
                    Send a Message ✉️
                </a>

            </div>
        </Card>
    );
}
