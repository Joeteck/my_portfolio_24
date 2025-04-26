import { motion } from "framer-motion";

interface TransitionOptionsProps {
    children?: React.ReactNode;
    loop?: boolean;
}

export default function TransitionOptions({ children, loop = false }: TransitionOptionsProps) {
    return (
        <motion.div
            style={ball}
            className="shadow-[0_5px_10px_0px_rgba(0, 0, 0, 0.598)]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 3,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: loop ? Infinity : 0,
            }}
        >
            {children}
        </motion.div>
    );
}

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 100,
    height: 100,
    borderRadius: "100%",
    background: "var(--accent)",
};
