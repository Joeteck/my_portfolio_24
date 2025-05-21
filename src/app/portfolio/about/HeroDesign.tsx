// components/EuroDesign.tsx
import React from 'react';
import Image from 'next/image';

const HeroDesign = () => {
    return (
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden z--10">
        <div className="relative w-full h-full">
            {/* Background color for unshaded area */}
            <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-950" />

                {/* Masked Image */}
                <div
                    className="absolute inset-0 left-1/2 top-0"
                    style={{
                        WebkitMaskImage: 'linear-gradient(315deg, transparent 35%, black 35%)',
                        maskImage: 'linear-gradient(135deg, transparent 45%, black 35%)',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskSize: '100% 100%',
                        maskSize: '100% 100%',
                    }}
                >
                    <Image
                        src='/images/creative-3.jpg'
                        alt="Hero Design"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroDesign;