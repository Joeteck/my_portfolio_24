import { Container } from '@/components/globals/layout/Container';
import { Paragraph } from '@/components/globals/typography/Paragraph';
import { ShieldQuestion } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FiFramer } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const ComponentCard = ({
    name,
    children,
    className,
    spanCols = 1,
    spanRows = 1,
    icons = [<FaReact />, <SiTypescript />, <FiFramer />],
    motionProps = {}, // Accept motionProps for dynamic animations
    }: {
    name: string;
    children?: React.ReactNode;
    className?: string;
    spanCols?: number;
    spanRows?: number;
    icons?: React.ReactNode[];
    motionProps?: object; // New prop for animation customization
    }) => {
    return (
        <Container
        className={`bg-neutral-300 dark:bg-neutral-800 border-none p-0 rounded-3xl ${className} max-sm:col-span-1 max-[920px]:col-span-3 col-span-${spanCols} max-sm:row-span-1 row-span-${spanRows} flex flex-col justify-center items-center`}
        >
        <div className="w-full h-fit mt-6 px-6 rounded-lg flex justify-end items-center">
            <ShieldQuestion size={16} />
        </div>

        {/* Wrap children with motion.div to enable animation */}
        <Container className="w-full h-full bg-transparent dark:bg-transparent border-none flex justify-center items-center shadow-none">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex justify-center items-center"
            {...motionProps} // Spread motionProps to override defaults
            >
            {children}
            </motion.div>
        </Container>

        <div className="w-full h-fit mb-6 px-6 flex justify-between items-center">
            <Paragraph className="text-[14px] font-medium dark:text-neutral-400">
            {name}
            </Paragraph>
            <div className="flex gap-1">{icons.map((icon, idx) => <span key={idx}>{icon}</span>)}</div>
        </div>
        </Container>
    );
    };
