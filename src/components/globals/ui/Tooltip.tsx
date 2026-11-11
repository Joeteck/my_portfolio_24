import { cn } from '@/utils/cn';
import React, { useState } from 'react';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    sideOffset?: number; // Offset from the side
    duration?: number; // Animation duration in milliseconds
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top', sideOffset = 8, duration = 200 }) => {
    const [isVisible, setIsVisible] = useState(false);

    const showTooltip = () => setIsVisible(true);
    const hideTooltip = () => setIsVisible(false);

    return (
        <div
            className="tooltip-container z-50"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            {children}
            {isVisible && (
                <div
                className={cn(
                    `tooltip font-semibold rounded-2xl px-3 py-1 
                    dark:bg-neutral-600/70 bg-neutral-950/70 text-white dark:text-black 
                    tooltip-${position} 
                    max-w-xs break-words whitespace-pre-line z-30`
                    )}
                    style={{
                        width: '260px',
                        maxWidth: '300px',
                        position: 'absolute',
                        padding: '8px',
                        fontSize: '12px',
                        backgroundColor: '#00000097',
                        borderRadius: '4px',
                        zIndex: 1000,
                        transition: `opacity ${duration}ms ease-in-out`,
                        opacity: isVisible ? 1 : 0,
                        ...getTooltipPosition(position, sideOffset),
                    }}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

const getTooltipPosition = (position: 'top' | 'bottom' | 'left' | 'right', sideOffset: number) => {
    switch (position) {
        case 'top':
            return { bottom: `calc(100% + ${sideOffset}px)`, left: '50%', transform: 'translateX(-50%)' };
        case 'bottom':
            return { top: `calc(100% + ${sideOffset}px)`, left: '50%', transform: 'translateX(-50%)' };
        case 'left':
            return { right: `calc(100% + ${sideOffset}px)`, top: '50%', transform: 'translateY(-50%)' };
        case 'right':
            return { left: `calc(100% + ${sideOffset}px)`, top: '50%', transform: 'translateY(-50%)' };
        default:
            return {};
    }
};

export default Tooltip;