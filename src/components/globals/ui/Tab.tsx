"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
    label: string;
    value: string;
    icon?: React.ReactNode;
    targetId?: string; // For scrolling
}

interface TabsProps {
    tabs: Tab[];
    onChange?: (value: string) => void;
    variant?: "underline" | "pill" | "boxed";
    animate?: boolean;
    scrollToSection?: boolean;
    className?: string;
    contentMap?: Record<string, React.ReactNode>; // For content switching
}

export default function Tabs({
    tabs,
    onChange,
    variant = "underline",
    animate = true,
    scrollToSection = false,
    className,
    contentMap,
}: TabsProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.value);
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (scrollToSection) {
            const targetElement = document.getElementById(activeTab);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [activeTab, scrollToSection]);
    
    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab.value);
        onChange?.(tab.value);
    };

    return (
        <div className={cn("tabs-container", className)}>
            <div className={cn("tabs", `tabs-${variant}`)}>
                {tabs.map((tab, index) => (
                    <div
                        key={tab.value}
                        ref={(el) => {
                            tabRefs.current[index] = el;
                        }}
                        className={cn("tab", { "tab-active": tab.value === activeTab })}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab.icon && <span className="tab-icon">{tab.icon}</span>}
                        {tab.label}
                    </div>
                ))}
            </div>
            {animate && (
                <motion.div
                    layoutId="activeTabIndicator"
                    className="tab-indicator"
                    animate={{ x: tabRefs.current[tabs.findIndex(t => t.value === activeTab)]?.offsetLeft || 0 }}
                />
            )}
            {!scrollToSection && contentMap && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="tab-content"
                    >
                        {contentMap[activeTab]}
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
}
