"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface ReorderProps {
  children: React.ReactNode; // Expect four buttons as children
}

export default function Reordering({ children }: ReorderProps) {
    const [order, setOrder] = useState(initialOrder);

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
        return () => clearTimeout(timeout);
    }, [order]);

    return (
        <ul style={container}>
        {order.map((backgroundColor, index) => (
            <motion.li
            key={backgroundColor}
            layout
            transition={spring}
            style={{ ...item, backgroundColor }}
            >
            {/* Render the child button based on the index */}
            {React.Children.toArray(children)[index]}
            </motion.li>
        ))}
        </ul>
    );
}

const initialOrder = [
    "#e639473a",
    "#ebaA4c3a",
    "#625f923a",
    "#1bbb8b3a",
];

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[]) {
    return array.sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
};

const container: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    width: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
};

const item: React.CSSProperties = {
    width: 100,
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
};
