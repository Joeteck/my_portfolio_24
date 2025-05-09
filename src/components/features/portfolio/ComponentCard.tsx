import { Container } from '@/components/globals/layout/Container';
import { Paragraph } from '@/components/globals/typography/Paragraph';
import { ShieldQuestion } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FiFramer } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
export const ComponentCard = ({
    name,
    children,
    className,
    spanCols = 1,
    spanRows = 1,
    icons = [
        <FaReact key="react" className="relative z-30" />,
        <SiTypescript key="ts" className="relative z-[31]" />,
        <FiFramer key="framer" className="relative z-[32]" />,
    ],
    motionProps = {},
    }: {
    name: string;
    children?: React.ReactNode;
    className?: string;
    spanCols?: number;
    spanRows?: number;
    icons?: React.ReactNode[];
    motionProps?: object;
    }) => {
    return (
        <Container
        className={cn(
            `relative z-50 bg-neutral-300 dark:bg-[#111411] border-none p-0 rounded-3xl 
            max-sm:col-span-1 max-[920px]:col-span-3 
            col-span-${spanCols} row-span-${spanRows}
            flex flex-col justify-center items-center`,
            className
        )}
        >
            {/* Noise Background */}
            <div className="absolute inset-0 pointer-events-none z-0 rounded-3xl">
                <div className="w-full h-full rounded-3xl bg-noise-dark opacity-60 dark:opacity-100 mix-blend-multiply z-20"></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute  inset-0 bg-gradient-to-b dark:from-neutral-800/30 from-neutral-500/50 via-neutral-500/50 to-neutral-600/50 dark:via-neutral-800/50 dark:to-neutral-900/50 pointer-events-none z-0 rounded-3xl"></div>
            {/* Top right icon */}
            <div className="relative z-30 w-full h-fit mt-6 px-6 rounded-lg flex justify-end items-center">
                <ShieldQuestion size={16} />
            </div>

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-transparent dark:bg-none p-0 m-0 border-none flex justify-center items-center shadow-none"
                {...motionProps}
                >
                {children}
                </motion.div>

            {/* Bottom text + icons */}
            <div className="relative w-full h-fit mb-6 px-6 flex justify-between items-center">
                <Paragraph className="relative text-[14px] font-medium dark:text-neutral-400">
                {name}
                </Paragraph>
                <div className="relative flex gap-1">
                {icons.map((icon, idx) => (
                    <span key={idx} className="flex items-center">
                    {icon}
                    </span>
                ))}
                </div>
            </div>
        </Container>
    );
};
