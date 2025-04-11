'use client';
import React from 'react';

export const Creative = () => {
    const headings = [
        { text: "Creativity", image: "/images/creative 9.jpg" },
        { text: "Creativity", image: "/images/creative 5.jpg" },
        { text: "Creativity", image: "/images/creative 2.jpg" },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-slate-500">
            {headings.map(({ text, image }, index) => (
                <div key={index} className="w-full h-[33.33vh] flex items-center justify-center bg-slate-400">
                <h1
                    className="relative text-[200px] font-extrabold text-transparent text-center bg-clip-text -top-5"
                    style={{
                        WebkitBackgroundClip: "text",
                        backgroundImage: "url('/images/creative 9.jpg')", // Same image as the background
                        height: '300px',
                    }}
                >
                        {text.toUpperCase()}
                    </h1>
                </div>
            ))}
        </div>
    );
};
