"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface DragProps {
    children: ReactNode;
}

export default function Drag({ children }: DragProps) {
    const constraintsRef = useRef<HTMLDivElement>(null)


    return (
        <motion.div ref={constraintsRef} className="w-32 h-32 flex items-center justify-center bg-transparent">
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            drag
            dragSnapToOrigin
            className="flex items-center justify-center cursor-grab w-full h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 shadow-none"
            >
            {children}
            </motion.div>
        </motion.div>
    );
    
}
