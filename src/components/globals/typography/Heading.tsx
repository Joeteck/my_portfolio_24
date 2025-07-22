import { cn } from "@/utils/cn";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    variant?: "title" | "subtitle" | "sectionTitle" | "caption" | "label";
    weight?: "light" | "normal" | "medium" | "bold" | "extrabold";
    align?: "left" | "center" | "right";
    uppercase?: boolean;
    muted?: boolean;
    gradient?: boolean;
    underline?: boolean;
    overline?: boolean;
    strikethrough?: boolean;
    shadow?: boolean;
    glow?: boolean;
    code?: boolean; // Use monospaced font
}

export function Heading({
    variant = "title",
    weight = "bold",
    align = "left",
    uppercase = false,
    muted = false,
    gradient = false,
    underline = false,
    overline = false,
    strikethrough = false,
    shadow = false,
    glow = false,
    code = false,
    className,
    ...props
}: HeadingProps) {
    const baseStyles = "tracking-tight";

    const variantStyles = {
        title: "text-4xl md:text-5xl",
        subtitle: "text-3xl md:text-4xl",
        sectionTitle: "text-xl md:text-3xl",
        caption: "text-sm md:text-base",
        label: "text-xs md:text-sm uppercase font-medium",
    };

    const weightStyles = {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
        extrabold: "font-extrabold",
    };

    const alignStyles = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    return (
        <h2
            className={cn(
                baseStyles,
                variantStyles[variant],
                weightStyles[weight],
                alignStyles[align],
                uppercase && "uppercase",
                muted && "text-muted-foreground",
                gradient &&
                "bg-[linear-gradient(45deg,_#1f7268,_#1BBB8B,_#00ff88)] bg-clip-text text-transparent",
                gradient &&
                // "bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-primary via-secondary to-accent bg-clip-text text-transparent",
                            underline && "underline",
                overline && "overline",
                strikethrough && "line-through",
                shadow && "shadow-md",
                glow && "text-shadow-glow",
                code && "font-mono",
                "py-2 px-2 z-30",
                className
            )}
            {...props}
        />
    );
}
