import { cn } from "@/utils/cn";

interface BadgeProps {
    variant?: "solid" | "outline" | "subtle";
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function Badge({ variant = "solid", color = "primary", size = "md", children }: BadgeProps) {
    return (
        <span
            className={cn(
                "badge", 
                `badge-${size}`,
                {
                    "badge-solid": variant === "solid",
                    "badge-outline": variant === "outline",
                    "badge-subtle": variant === "subtle",
                },
                `badge-${color}`
            )}
        >
            {children}
        </span>
    );
}
