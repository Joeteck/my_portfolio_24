"use client"

import { motion, Variants } from "framer-motion";

function LoadingThreeDotsJumping() {
    const dotVariants: Variants = {
        jump: {
            y: -30,
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate="jump"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="flex justify-center items-center gap-[10px]"
        >
            <motion.div className="dot shadow-2xl" variants={dotVariants} />
            <motion.div className="dot shadow-2xl" variants={dotVariants} />
            <motion.div className="dot shadow-2xl" variants={dotVariants} />
            <StyleSheet />
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
            .dot {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #1bbb8b;
                will-change: transform;
            }
            `}
        </style>
    )
}

export default LoadingThreeDotsJumping
