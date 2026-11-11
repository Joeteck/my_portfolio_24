import { cn } from "@/utils/cn"; // Ensure you're using the cn utility for merging classes

interface DividerProps {
    className?: string;
}

export function HorizontalDivider({ className }: DividerProps) {
    return <div className={cn("w-full", className)} />;
}

export function VerticalDivider({ className }: DividerProps) {
    return <div className={cn("h-full", className)} />;
}
