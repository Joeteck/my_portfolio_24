'use client';
import { ButtonHTMLAttributes } from "react";
import { cn } from '@/utils/cn'; // Utility for conditional class merging

type ButtonVariant = "primary" | "secondary" | "accent" | "error" | "success" | "outline" | "ghost" | "disabled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant; // Use 'variant' instead of 'type'
}

const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
    return (
        <button
        className={cn(
            'btn', // Base styles
            variant === 'primary' && 'btn-primary',
            variant === 'secondary' && 'btn-secondary',
            variant === 'accent' && 'btn-accent',
            variant === 'error' && 'btn-error',
            variant === 'success' && 'btn-success',
            variant === 'outline' && 'btn-outline',
            variant === 'ghost' && 'btn-ghost',
            variant === 'disabled' && 'btn-disabled',
            className
        )}
        {...props}
        >
        {children}
        </button>
    );
};

export default Button;
