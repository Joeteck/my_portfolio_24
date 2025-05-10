import React from 'react';

interface UiCardProps {
    className?: string;
}

export const UiCard: React.FC<UiCardProps> = ({ className }) => {
    return (
        <div className={`absolute w-48 h-40 rounded-lg bg-neutral-600 dark:bg-neutral-600 flex items-start justify-center p-4 ${className || ''}`}>
        {/* Top-left circle indicator */}
        <div className="absolute top-4 left-4 w-4 h-4 bg-accent rounded-full" />

        {/* Placeholder lines at the bottom */}
        <div className="mt-auto w-full space-y-2">
            <div className="w-3/4 h-3 rounded-full bg-neutral-700" />
            <div className="w-2/3 h-3 rounded-full bg-neutral-700" />
            <div className="w-5/6 h-3 rounded-full bg-neutral-700" />
        </div>
        </div>
    );
};
