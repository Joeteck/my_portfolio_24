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

export default function Popover({ trigger, children, position = "top", className, hover = false }: PopoverProps) {
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
                        className={cn(
                            "fixed z-[9999] bg-black text-white text-sm rounded-md shadow-lg px-2 py-1",
                            "left-1/2 transform -translate-x-1/2",
                            position === "top" ? "bottom-full mb-2" :
                            position === "bottom" ? "top-full mt-2" :
                            position === "left" ? "right-full mr-2" :
                            position === "right" ? "left-full ml-2" : "",
                            className
                        )}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
