import { cn } from "@/utils/cn";

interface GridProps {
    children: React.ReactNode;
    cols?: number;
    gap?: string;
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "end" | "between" | "around";
    responsive?: string; // For custom Tailwind breakpoints
    className?: string;
}

export const Grid = ({
    children,
    cols = 2,
    gap = "gap-6",
    align = "start",
    justify = "start",
    responsive = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    className
}: GridProps) => {
    return (
        <div
            className={cn(
                `grid grid-cols-${cols} ${gap} items-${align} justify-${justify} ${responsive}`,
                className
            )}
        >
            {children}
        </div>
    );
};


// GridItemProps


interface GridItemProps {
    children: React.ReactNode;
    className?: string;
}

export const GridItem = ({ children, className }: GridItemProps) => {
    return <div className={cn("p-4", className)}>{children}</div>;
};
