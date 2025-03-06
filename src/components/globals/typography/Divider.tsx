import { cn } from "@/utils/cn";

interface DividerProps {
    orientation?: "horizontal" | "vertical";
    thickness?: "thin" | "medium" | "thick";
    color?: "primary" | "secondary" | "muted";
    className?: string;
}

export function Divider({
    orientation = "horizontal",
    thickness = "medium",
    color = "muted",
    className,
}: DividerProps) {
    return (
        <div
            className={cn(
                "divider",
                `divider-${orientation}`,
                `divider-${thickness}`,
                `divider-${color}`,
                className
            )}
        />
    );
}
