import { cn } from "@/utils/cn";
import React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: "sm" | "md" | "lg" | "xl";
    weight?: "light" | "normal" | "medium" | "bold";
    tone?: "default" | "muted" | "error" | "success" | "warning" | "info";
    align?: "left" | "center" | "right" | "justify";
    truncate?: boolean;
}

export function Paragraph({
    size = "md",
    weight = "normal",
    tone = "default",
    align = "left",
    truncate = false,
    className,
    children,
    ...props
}: ParagraphProps) {
    const sizeStyles = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
    };

    const weightStyles = {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
    };

    const toneStyles = {
        default: "text-gray-900 dark:text-gray-100",
        muted: "text-gray-500 dark:text-gray-400",
        error: "text-red-600 dark:text-red-400",
        success: "text-green-600 dark:text-green-400",
        warning: "text-yellow-600 dark:text-yellow-400",
        info: "text-blue-600 dark:text-blue-400",
    };

    const alignStyles = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    };

    return (
        <p
            className={cn(
                sizeStyles[size],
                weightStyles[weight],
                toneStyles[tone],
                alignStyles[align],
                truncate && "truncate",
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
}
