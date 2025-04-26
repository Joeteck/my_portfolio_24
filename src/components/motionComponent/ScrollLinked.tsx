"use client";

import {
    motion,
    AnimatePresence,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    animate,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollLinkedProps {
    children: ReactNode[];
    vertical?: boolean;
    containerClassName?: string;
    listClassName?: string;
    style?: React.CSSProperties;
  interval?: number; // in milliseconds
}

export default function ScrollLinked({
    children,
    vertical = false,
    containerClassName = "",
    listClassName = "",
    style = {},
    interval = 2000,
    }: ScrollLinkedProps) {
    const ref = useRef<HTMLUListElement>(null);
    const { scrollXProgress, scrollYProgress } = useScroll({ container: ref });
    const scrollProgress = vertical ? scrollYProgress : scrollXProgress;
    const maskImage = useScrollOverflowMask(scrollProgress, vertical);

    const [items, setItems] = useState(children);

    useEffect(() => {
        if (children.length <= 1) return;
        const timer = setInterval(() => {
        setItems((prev) => {
            const updated = prev.slice(1);
            if (updated.length === 0) {
            return children; // Restart from full list
            }
            return updated;
        });
        }, interval);

        return () => clearInterval(timer);
    }, [children, interval]);

    return (
        <div
        className={`relative overflow-hidden ${containerClassName}`}
        style={{
            position: "relative",
            ...style,
        }}
        >
        <style>
            {`
                .custom-scrollbar::-webkit-scrollbar-corner {
                background: transparent;
                }
                .custom-scrollbar {
                background: transparent;
                -webkit-border-radius: 1ex;
                }
            `}
        </style>


        <motion.ul
            ref={ref}
            layout
            style={{
            display: "flex",
            flexDirection: vertical ? "column" : "row",
            listStyle: "none",
            padding: vertical ? "10px 0" : "0 20px",
            margin: "0 auto",
            gap: "10px",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            maskImage,
            WebkitMaskImage: maskImage,
            position: "relative",
            }}
            className={`custom-scrollbar ${listClassName}`}
        >
            <AnimatePresence initial={false}>
            {items.map((child, index) => (
                <motion.li
                key={index}
                layout
                initial={{ opacity: 0, y: vertical ? 50 : 0, x: vertical ? 0 : 50 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: vertical ? -50 : 0, x: vertical ? 0 : -50 }}
                transition={{ duration: 0.5 }}
                style={{
                    flexShrink: 0,
                }}
                >
                {child}
                </motion.li>
            ))}
            </AnimatePresence>
        </motion.ul>

        {/* Soft Fade Overlay at Bottom */}
        {vertical && (
            <div
            className="pointer-events-none absolute bottom-0 left-0 w-full h-4"

            />
        )}
        </div>
    );
}

// Constants for fade
const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#00000082`;
const opaque = `#000000`;

function useScrollOverflowMask(
    scrollProgress: ReturnType<typeof useScroll>["scrollXProgress" | "scrollYProgress"],
    vertical: boolean
    ) {
    const maskImage = useMotionValue(
        vertical
        ? `linear-gradient(180deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
        : `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    );

    useMotionValueEvent(scrollProgress, "change", (value) => {
        if (value === 0) {
        animate(
            maskImage,
            vertical
            ? `linear-gradient(180deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            : `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
        );
        } else if (value === 1) {
        animate(
            maskImage,
            vertical
            ? `linear-gradient(180deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            : `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
        );
        } else if (
        scrollProgress.getPrevious() === 0 ||
        scrollProgress.getPrevious() === 1
        ) {
        animate(
            maskImage,
            vertical
            ? `linear-gradient(180deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            : `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
        );
        }
    });

    return maskImage;
}
