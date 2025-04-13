'use client';
import React, { useEffect, useState } from 'react';

export const Creative = () => {
    const creativeImages = ['creative-5.jpg', 'creative-8.jpg', 'creative-9.jpg'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const headings = [
        {
            text: 'Creativity',
            isSlideshow: true,
            font: 'playfair-display',
            backgroundColor: 'linear-gradient(105deg, #ffffff, #ffffff)' // for "Creativity"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % creativeImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-fit flex flex-col justify-center items-center">
            {headings.map((heading, index) => {
                const isSlideshow = heading.isSlideshow;
                const useAsBackground = heading.useAsBackground;
                const fontClass =
                    heading.font === 'playfair-display'
                        ? 'font-playfair-display'
                        : heading.font === 'mono'
                        ? 'font-mono'
                        : 'font-extrabold';

                const backgroundImage = isSlideshow
                    ? `url(/images/${creativeImages[currentImageIndex]})`
                    : heading.image
                    ? `url(/images/${heading.image})`
                    : '';

                const containerStyle = useAsBackground
                    ? {
                        backgroundImage,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }
                : {
                        backgroundImage: heading.backgroundColor,
                    };

                const textStyle = {
                    WebkitBackgroundClip: !useAsBackground ? 'text' : undefined,
                    WebkitTextFillColor: !useAsBackground ? 'transparent' : undefined,
                    backgroundImage: !useAsBackground ? backgroundImage : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    textShadow: useAsBackground
                        ? '0 2px 10px rgba(0, 0, 0, 0.212)'
                        : '0 1px 1px rgba(0, 0, 0, 0.42)',
                    transition: 'all 0.6s ease-in-out',
                };

                return (
                    <section
                        key={index}
                        className="w-full h-[33.33vh] flex items-center justify-center relative overflow-hidden animate-fade-in"
                        style={containerStyle}
                    >
                        {useAsBackground && (
                            <div className="absolute inset-0 bg-black/30 z-0" />
                        )}

                        <h1
                            className={`z-10 text-center ${fontClass} ${
                                !useAsBackground ? 'text-transparent bg-clip-text' : 'text-white'
                            } text-[clamp(40px,15vw,250px)] font-extrabold`}
                            style={textStyle}
                        >
                            {heading.text.toUpperCase()}
                        </h1>
                    </section>
                );
            })}
        </div>
    );
};


// {
//     text: 'Performance',
//     image: 'creative-6.jpg',
//     useAsBackground: true,
//     font: 'sans',
// },
// {
//     text: 'Interface',
//     image: 'creative-1.jpg',
//     backgroundColor: 'linear-gradient(105deg, #000000, #000000)', // soft, clean gray gradient
//     font: 'mono'
// },