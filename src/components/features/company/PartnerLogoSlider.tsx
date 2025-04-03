"use client";

import React from "react";
import Image from "next/image";
import { CustomSlider } from "@/components/globals/layout/Slider";
import Popover from "@/components/globals/ui/Popover";
import { Container } from "@/components/globals/layout/Container";

const partnerLogos = [
    { src: "/logo/google.png", name: "Google" },
    { src: "/logo/microsoft.png", name: "Microsoft" },
    { src: "/logo/aws.png", name: "Amazon Web Services (AWS)" },
    { src: "/logo/meta.png", name: "Meta" },
];

export const PartnerLogoSlider = () => {
    return (
        <Container className="flex justify-center w-full md:w-[50%] h-fit my-2 p-0 border-none">
            <CustomSlider continuousScroll={true} slidesPerView={2}>
                {partnerLogos.map((logo, index) => (
                    <Popover key={index} position="top" hover trigger={
                        <div className="w-24 h-24 flex justify-center items-center">
                            <Image
                                width={60}
                                height={60}
                                src={logo.src}
                                alt={logo.name}
                                className="grayscale hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    }>
                        {logo.name}
                    </Popover>
                ))}
            </CustomSlider>
        </Container>
    );
};
