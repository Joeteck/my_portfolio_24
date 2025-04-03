import React from "react";
import { cn } from "@/utils/cn";

// ✅ Explicitly define `ContainerProps` before using it
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    fluid?: boolean; // If true, container takes full width
    padding?: "none" | "sm" | "md" | "lg";
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const paddingStyles = {
    none: "p-0",
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
};

const maxWidthStyles = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "w-full",
};

export function Container({
    fluid = false,
    padding = "md",
    maxWidth = "xl",
    className = "",
    children,
    ...props
}: ContainerProps) {
    return (
        <div
            className={cn(
                "relative mx-auto w-full rounded-2xl shadow-lg transition-all duration-300",
                "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 z-0",
                !fluid && maxWidthStyles[maxWidth],
                paddingStyles[padding],
                className || "" // Ensures className is always a string
            )}
            {...props}
        >
            {children}
        </div>
    );
}
