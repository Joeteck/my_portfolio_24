"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderProps {
    children: React.ReactNode;
    direction?: "horizontal" | "vertical";
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    loop?: boolean;
    showButtons?: boolean;
    showPagination?: boolean;
    slidesPerView?: number;
    spaceBetween?: number;
    className?: string;
}

export const Slider = ({
    children,
    direction = "horizontal",
    autoPlay = false,
    autoPlaySpeed = 3000,
    loop = true,
    showButtons = true,
    showPagination = true,
    slidesPerView = 1,
    spaceBetween = 20,
    className,
    }: SliderProps) => {
    return (
        <div className={`relative w-full ${className}`}>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            direction={direction}
            loop={loop}
            autoplay={autoPlay ? { delay: autoPlaySpeed, disableOnInteraction: false } : false}
            navigation={showButtons}
            pagination={showPagination ? { clickable: true } : false}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            centeredSlides={true} // Ensure proper centering
            breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: slidesPerView }, // Match prop
            }}
            className="w-full"
        >
            {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center h-full"> {/* Ensures vertical alignment */}
                {child}
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
};
