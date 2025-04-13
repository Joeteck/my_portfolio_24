'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext'; // ✅ using your custom hook

type CreativeType = 'creative' | 'performance' | 'interface';

interface CreativeProps {
  type: CreativeType;
}

const creativeConfig: Record<CreativeType, any> = {
  creative: {
    headings: [
      {
        text: 'Creativity',
        isSlideshow: true,
        font: 'playfair-display',
        backgroundColor: 'linear-gradient(105deg, #ffffff, #ffffff)',
        darkBackgroundColor: 'linear-gradient(105deg, #061f18, #143028)',
      },
    ],
    images: ['creative-5.jpg', 'creative-8.jpg', 'creative-9.jpg'],
    darkOverlay: true,
  },

  performance: {
    headings: [
      {
        text: 'Performance',
        image: 'creative-6.jpg',
        darkImage: 'creative-10.jpg', // use a darker variant
        useAsBackground: true,
        font: 'sans',
      },
    ],
    images: ['creative-6.jpg'],
    darkOverlay: true,
  },

  interface: {
    headings: [
      {
        text: 'Interface',
        image: 'creative-1.jpg',
        font: 'mono',
        backgroundColor: 'linear-gradient(105deg, #f4f4f4, #ffffff)',
        darkBackgroundColor: 'linear-gradient(105deg, #1bbb8b, #061f18)',
      },
    ],
    images: ['creative-1.jpg'],
    darkOverlay: false,
  },
};

export const Creative = ({ type }: CreativeProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { mode } = useTheme(); // ✅ grab mode (light | dark)
  const isDark = mode === 'dark';

  const { headings, images, darkOverlay } = creativeConfig[type];
  const currentImage = images[currentImageIndex];

  useEffect(() => {
    if (type === 'creative') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images.length, type]);

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center">
      {headings.map((heading: any, index: number) => {
        const {
          text,
          isSlideshow,
          useAsBackground,
          backgroundColor,
          darkBackgroundColor,
          font,
          image,
          darkImage,
        } = heading;

        const fontClass =
          font === 'playfair-display'
            ? 'font-playfair-display'
            : font === 'mono'
            ? 'font-mono'
            : 'font-extrabold';

        const backgroundImage = isSlideshow
          ? `url(/images/${currentImage})`
          : image
          ? `url(/images/${isDark && darkImage ? darkImage : image})`
          : '';

        const containerStyle = useAsBackground
          ? {
              backgroundImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {
              backgroundImage: isDark ? darkBackgroundColor : backgroundColor,
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
            {useAsBackground && darkOverlay && (
              <div className="absolute inset-0 bg-black/50 z-0" />
            )}
            <h1
              className={`z-10 text-center ${fontClass} ${
                !useAsBackground ? 'text-transparent bg-clip-text' : 'text-white'
              } ${
                type !== 'performance'
                  ? 'text-[clamp(40px,15vw,250px)]'
                  : 'text-[clamp(40px,12vw,220px)]'
              } font-extrabold`}
              style={textStyle}
            >
              {text.toUpperCase()}
            </h1>
          </section>
        );
      })}
    </div>
  );
};
