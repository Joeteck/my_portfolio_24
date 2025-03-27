"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
    children: React.ReactNode;
    autoPlaySpeed?: number;
    continuousScroll?: boolean;
    slidesPerView?: number;
    spaceBetween?: number;
    showButtons?: boolean;
    showPagination?: boolean;
    className?: string;
    variant?: "default" | "minimal" | "bordered";
}

export const CustomSlider = ({
    children,
    autoPlaySpeed = 3000,
    continuousScroll = false,
    slidesPerView = 1,
    spaceBetween = 20,
    showButtons = false,
    showPagination = false,
    className = "",
    variant = "default",
}: SliderProps) => {
    const settings = {
        infinite: true,
        speed: continuousScroll ? 5000 : 1000, // Smooth speed for continuous scroll
        slidesToShow: slidesPerView,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: autoPlaySpeed,
        arrows: showButtons, // Show navigation arrows if enabled
        dots: showPagination, // Show pagination dots if enabled
        pauseOnHover: true,
        cssEase: "linear",
    };

    return (
        <div className={`relative w-full flex justify-center items-center ${className}`}>
            <Slider {...settings} className={`w-full flex justify-center items-center ${
                    variant === "minimal" ? "bg-transparent" : "bg-primary"
                }`}>
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="flex justify-center items-center"> 
                        {child}
                    </div>
                ))}
            </Slider>
        </div>
    );
};
