"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

interface PopoverProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
    hover?: boolean;
}

export default function Popover({ trigger, children, position = "bottom", className, hover = false }: PopoverProps) {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div 
            className="relative inline-block"
            ref={triggerRef}
            onMouseEnter={hover ? () => setIsOpen(true) : undefined}
            onMouseLeave={hover ? () => setIsOpen(false) : undefined}
            onClick={!hover ? () => setIsOpen(!isOpen) : undefined}
        >
            {trigger}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={popoverRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className={cn("popover-content", `popover-${position}`, className)}
                    >
                        <div className="popover-arrow" />
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
