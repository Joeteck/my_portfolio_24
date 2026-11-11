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
    swipeToSlide?: boolean;
    showButtons?: boolean;
    showPagination?: boolean;
    pauseOnHover?: boolean;
    className?: string;
}

export const CustomSlider = ({
    children,
    autoPlaySpeed = 2000,
    continuousScroll = false,
    slidesPerView = 1,
    swipeToSlide = false,
    showButtons = false,
    showPagination = false,
    pauseOnHover = false,
    className = "",
}: SliderProps) => {
    const settings = {
        infinite: true,
        speed: continuousScroll ? 2000 : 1000, // Very high speed for smooth scrolling
        slidesToShow: slidesPerView,
        slidesToScroll: continuousScroll ? 1 : slidesPerView, // Scroll one at a time for smooth effect
        swipeToSlide: swipeToSlide,
        autoplay: true,
        autoplaySpeed: autoPlaySpeed,
        arrows: showButtons,
        dots: showPagination,
        pauseOnHover: pauseOnHover, // Prevent pausing on hover for continuous effect
        cssEase: continuousScroll ? "linear" : "ease", // Smooth linear motion
        centerMode: true, // Keep items centered
        variableWidth: true, // Allows slides to move continuously without snapping
        className:"center"
    };

    return (
        <div className={`relative w-full flex justify-center items-center ${className}`}>
            <Slider {...settings} className="w-full">
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="flex justify-center items-center px-2"> 
                        {child}
                    </div>
                ))}
            </Slider>
        </div>
    );
};