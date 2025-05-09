'use client';

import { motion, stagger } from 'framer-motion';
import { Heading } from '@/components/globals/typography/Heading';
import { Paragraph } from '@/components/globals/typography/Paragraph';
import { ComponentCard } from './ComponentCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Drag from '@/components/motionComponent/drag';
import Reordering from '@/components/motionComponent/reorder';
import Button from '@/components/globals/ui/Button';
import LoadingThreeDotsJumping from '@/components/motionComponent/loading';
import Modal from '@/components/globals/ui/Modal';
import Tooltip from '@/components/globals/ui/Tooltip';
import ScrollLinked from '@/components/motionComponent/ScrollLinked';
import TransitionOptions from '@/components/motionComponent/transform';

export const ExampleComponent = () => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center pt-20 md:pt-40 px-4 bg-neutral-100 dark:bg-[#030a07]">
                    
            {/* Noise Background */}
            <div className="absolute inset-0 pointer-events-none z-20">
                <div className="w-full h-full bg-noise-dark opacity-60 dark:opacity-100 mix-blend-multiply z-20"></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-neutral-800/50 dark:to-neutral-900 pointer-events-none z-20"></div>

            {/* Content */}
            <div className="relative w-full flex flex-col items-center">
                
                {/* Label */}
                <span className="relative text-[10px] font-bold px-3 py-1 rounded-full bg-neutral-300 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 backdrop-blur-sm border border-neutral-300/50 dark:border-neutral-700/50 z-30">
                EXAMPLES
                </span>

                {/* Heading + Paragraph */}
                <div className="relative z-30 text-center my-6 max-w-md ">
                <Heading variant="sectionTitle" className="pb-2 text-center text-neutral-800 dark:text-neutral-100">
                    Powerful components
                </Heading>
                <Paragraph className="text-neutral-600 dark:text-neutral-400 font-semibold text-center">
                    Create smooth, high-performance components with React libraries — from simple transforms to advanced interactive gestures
                </Paragraph>
                </div>

                {/* Advanced Grid */}
                <div className="max-w-[80%] w-full grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-4 sm:grid-rows-4">
                
                {/* Component 1 */}
                <ComponentCard name="Simple Button" spanCols={1} spanRows={1} className='h-80 relative '>
                    <div className="relative z-30 border-none bg-none dark:bg-none t rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                    <TransitionOptions loop={true} />
                    </div>
                </ComponentCard>

                {/* Component 2 */}
                <ComponentCard name="Transforms" spanCols={2} spanRows={1}
                    motionProps={{
                    initial: { y: 20 },
                    animate: { y: 0 },
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    }}>
                    <div className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                    <LoadingThreeDotsJumping />
                    </div>
                </ComponentCard>

                {/* Component 3 */}
                <ComponentCard name="Loading" spanCols={1} spanRows={2}>
                    <div className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-2 row-span-1 flex justify-center items-center shadow-none">
                        <Reordering>
                            <Button className='rounded-full p-2 px-4'>
                                
                            </Button>
                            <Button className='rounded-full p-2 px-4 bg-error'>
                                
                            </Button>
                            <Button className='rounded-full p-2 px-4 bg-accent'>

                            </Button>
                            <Button className='rounded-full p-2 px-4 bg-secondary'>
                                
                            </Button>
                        </Reordering>
                    </div>
                </ComponentCard>

                {/* Component 4 */}
                <ComponentCard name="Drag" spanCols={2} spanRows={1} className='h-80'>
                    <div className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-2 flex justify-center items-center shadow-none">
                        <Drag>
                            <div className="h-24 w-24 bg-cyan-700 rounded-lg shadow-lg z-20" />
                        </Drag>
                    </div>
                </ComponentCard>

                {/* Component 5 */}
                <ComponentCard name="Exit" spanCols={1} spanRows={1} className='h-80'>
                    <div className="bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                        <Tooltip
                            content='Tooltip is typically a UI component used to display additional information when a user hovers over or focuses on an element.'
                            position='top'
                            sideOffset={2}
                            duration={100}
                        >
                            <Button className='rounded-full p-2 px-4'>
                                Tooltip
                            </Button>
                        </Tooltip>
                    </div>
                </ComponentCard>

                {/* Component 6 */}
                <ComponentCard name="Springs" spanCols={2} spanRows={1}>
                    <div className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                    <ScrollLinked
                        containerClassName="h-full w-[220px]"
                        vertical
                        listClassName="h-full flex flex-col gap-4"
                    >
                        {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="h-10 w-56 bg-cyan-700 rounded-lg flex items-center justify-start p-2 dark:bg-cyan-700 shadow-none border-none">
                            <div className="w-5 h-5 rounded-full bg-primary"></div>
                        </div>
                        ))}
                    </ScrollLinked>
                    </div>
                </ComponentCard>

                {/* Component 7 */}
                <ComponentCard name="Gestures" spanCols={2} spanRows={1} className="col-start-1"
                    motionProps={{
                    animate: {
                        opacity: [0, 1, 0],
                        rotate: [90, 0, 90],
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    }
                    }}>
                    <div className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                        Component 7
                    </div>
                </ComponentCard>

                {/* Component 8 */}
                <ComponentCard name="Sequencing" spanCols={2} spanRows={2} className="row-start-3 col-start-3"
                    motionProps={{
                    animate: {
                        opacity: [0, 1, 0],
                        rotate: [90, 0, 90],
                    },
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    }
                    }}>
                    <div className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                    Component 8
                    </div>
                </ComponentCard>

                </div>

                {/* Explore more link */}
                <div className="mt-10">
                <Link href="/portfolio/about" className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:underline">
                    Explore more components <ArrowRight size={14} />
                </Link>
                </div>

            </div>
        </div>
    );
};
