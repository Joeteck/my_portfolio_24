"use client";

import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn"; // Utility for conditional class merging

type ButtonVariant =
    | "primary"
    | "secondary"
    | "accent"
    | "error"
    | "success"
    | "outline"
    | "ghost"
    | "disabled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

// Forwarding ref to allow external components to use `useRef`
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", children, className, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref} // ✅ Assign the forwarded ref here
                disabled={disabled} // ✅ Properly disable button
                className={cn(
                    "btn",
                    variant === "primary" && "btn-primary",
                    variant === "secondary" && "btn-secondary",
                    variant === "accent" && "btn-accent",
                    variant === "error" && "btn-error",
                    variant === "success" && "btn-success",
                    variant === "outline" && "btn-outline",
                    variant === "ghost" && "btn-ghost",
                    (variant === "disabled" || disabled) && "btn-disabled", // ✅ Apply "btn-disabled" correctly
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

// ✅ Display name for debugging in React DevTools
Button.displayName = "Button";

export default Button;
