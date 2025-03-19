"use client";

import Card from "@/components/globals/ui/Cards";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Heading } from "@/components/globals/typography/Headings";
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
        <Card variant="profile" className="w-full bg-black p-6 flex flex-col items-center   justify-center text-center space-y-6">
            {/* Profile Image */}
            <div className="flex justify-center">
                <Image
                    src={image}
                    alt={`${name}'s profile picture`}
                    width={128}
                    height={128}
                    className="image-profile"
                />
            </div>
            {/* Name & Role */}
            <div className="my-6 text-gray-100">
                <Heading className="card-title">{name}</Heading>
                <p className="card-description">{role}</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 text-sm text-gray-100 dark:text-gray-300">
                <p className="flex items-center gap-2">
                    <Mail size={16} aria-label="Email" /> 
                    <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                </p>
                <p className="flex items-center gap-2">
                    <Phone size={16} aria-label="Phone" /> 
                    <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                </p>
                <p className="flex items-center gap-2">
                    <MapPin size={16} aria-label="Location" /> 
                    {location}
                </p>

                {/* Call-to-Action Button */}
                <Link href={`mailto:${email}`} className="card-link">
                    Send a Message ✉️
                </Link>
            </div>
        </Card>
    );
}
