import { cn } from "@/utils/cn";
import React from "react";

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    variant?: "unordered" | "ordered" | "inline";
    marker?: "default" | "dash" | "check" | "arrow" | "none" | React.ReactNode;
    markerClassName?: string;
    spacing?: "tight" | "normal" | "loose";
    align?: "left" | "center" | "right";
    divided?: boolean;
    muted?: boolean;
}

export function List({
    variant = "unordered",
    marker = "none", // Default to "none" to avoid unintended markers
    markerClassName = "",
    spacing = "normal",
    align = "left",
    divided = false,
    muted = false,
    className,
    children,
    ...props
}: ListProps) {
    const variantStyles = {
        unordered: "list-none", // Removes default bullets
        ordered: "list-decimal pl-5", // Uses native numbering for ordered lists
        inline: "flex flex-wrap gap-2 item-center",
    };

    const spacingStyles = {
        tight: "space-y-1",
        normal: "space-y-2",
        loose: "space-y-4",
    };

    const alignStyles = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    return (
        <ul
            className={cn(
                variantStyles[variant],
                spacingStyles[spacing],
                alignStyles[align],
                muted && "text-muted-foreground",
                className
            )}
            {...props}
        >
            {children &&
                React.Children.map(children, (child, index) => (
                    <li
                        key={index}
                        className={cn(
                            "flex items-start gap-2",
                            divided && "border-b border-gray-300 dark:border-gray-700 pb-1"
                        )}
                    >
                        {/* Marker Handling - Only show if a custom marker is set */}
                        {marker !== "none" && marker !== "default" && (
                            typeof marker === "string" && ["dash", "check", "arrow"].includes(marker) ? (
                                <span className={cn("shrink-0", markerClassName)}>
                                    {marker === "dash" && "—"}
                                    {marker === "check" && "✔"}
                                    {marker === "arrow" && "➝"}
                                </span>
                            ) : (
                                <span className={cn("shrink-0", markerClassName)}>
                                    {typeof marker === "string" ? marker : marker}
                                </span>
                            )
                        )}
                        {child}
                    </li>
                ))}
        </ul>
    );
}
