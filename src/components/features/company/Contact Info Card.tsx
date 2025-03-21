"use client";

import { Paragraph } from "@/components/globals/typography/Paragraphs";
import Card from "@/components/globals/ui/Cards";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

interface ContactInfoCardProps {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    image?: string;
}

export default function ContactInfoCard({
    name,
    role,
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
            description={role}
        >
            {/* Contact Details */}
            <div className="space-y-3 text-sm text-gray-100 dark:text-gray-300">
                <Paragraph className="flex items-center gap-2">
                    <Mail size={16} aria-label="Email" /> 
                    <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                </Paragraph>
                <Paragraph className="flex items-center gap-2">
                    <Phone size={16} aria-label="Phone" /> 
                    <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                </Paragraph>
                <Paragraph className="flex items-center gap-2">
                    <MapPin size={16} aria-label="Location" /> 
                    {location}
                </Paragraph>

                {/* Call-to-Action Button */}
                <Link href={`mailto:${email}`} className="card-link">
                    Send a Message ✉️
                </Link>
            </div>
        </Card>
    );
}
