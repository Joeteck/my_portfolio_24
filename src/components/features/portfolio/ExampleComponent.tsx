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
import { Timeline } from '@/components/motionComponent/timeline';
import { UiCard } from './UiCard';
import ScrollFillCard from '@/components/motionComponent/scrollFillCard';

export const ExampleComponent = () => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center pb-20 px-4 bg-transparent">
            {/* Noise Background */}
            <div className="absolute inset-0 pointer-events-none z-20"></div>
                <div className="w-full h-full bg-noise-dark dark:bg-noise opacity-30 dark:opacity-20 mix-blend-multiply z-20"></div>

            {/* Content */}
            <div className="relative w-full flex flex-col items-center">
                {/* Label */}
                <span className="relative text-[10px] font-bold px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 z-30">
                    EXAMPLES
                </span>

                {/* Heading + Paragraph */}
                <div className="relative z-30 text-center my-6 max-w-md ">
                    <Heading variant="sectionTitle" className="pb-2 text-center text-primary dark:text-primary-300">
                        Powerful components
                    </Heading>
                    <Paragraph className="text-neutral-600 dark:text-neutral-300 font-semibold text-center">
                        Create smooth, high-performance components with React libraries — from simple transforms to advanced interactive gestures
                    </Paragraph>
                </div>

                {/* Advanced Grid */}
                <div className="max-w-[80%] w-full grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-4 sm:grid-rows-4">
                    {/* Component 1 */}
                    <ComponentCard name="Simple Transition" spanCols={1} spanRows={1} className='h-72 relative bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800'>
                        <div className="relative z-30 rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                            <TransitionOptions loop={true} />
                        </div>
                    </ComponentCard>

                    {/* Component 2 */}
                    <ComponentCard name="Loading" spanCols={2} spanRows={1}
                        className="bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800"
                        motionProps={{
                            initial: { y: 20 },
                            animate: { y: 0 },
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                        }}>
                        <div className="h-full bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                            <LoadingThreeDotsJumping />
                        </div>
                    </ComponentCard>

                    {/* Component 3 */}
                    <ComponentCard name="Scroll Fill" spanCols={1} spanRows={2} className="bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                        <div className="h-full py-10 rounded-lg col-span-2 row-span-1 flex justify-center items-center shadow-none">
                            <ScrollFillCard/>
                        </div>
                    </ComponentCard>

                    {/* Component 4 */}
                    <ComponentCard name="Drag" spanCols={2} spanRows={1} className='h-72 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800'>
                        <div className="h-full rounded-lg col-span-1 row-span-2 flex justify-center items-center shadow-none">
                            <Drag>
                                <div className="h-24 w-24 bg-primary dark:bg-primary-400 rounded-lg shadow-lg z-20" />
                            </Drag>
                        </div>
                    </ComponentCard>

                    {/* Component 5 */}
                    <ComponentCard name="Tooltip" spanCols={1} spanRows={1} className='h-72 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800'>
                        <div className="rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                            <Tooltip
                                content='Tooltip is typically a UI component used to display additional information when a user hovers over or focuses on an element.'
                                position='top'
                                sideOffset={2}
                                duration={100}
                            >
                                <Button className='rounded-full p-4 px-6 bg-primary text-white dark:bg-primary-400 dark:text-neutral-900 hover:bg-primary-700 dark:hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50'>
                                    <span className="text-sm font-semibold">Hover me</span>
                                </Button>
                            </Tooltip>
                        </div>
                    </ComponentCard>

                    {/* Component 6 */}
                    <ComponentCard name="Springs" spanCols={2} spanRows={1} className="bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                        <div className="h-full rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                            <ScrollLinked
                                containerClassName="h-full w-[220px]"
                                vertical
                                listClassName="h-full flex flex-col gap-4"
                            >
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <div key={index} className="h-10 w-56 bg-neutral-300 dark:bg-neutral-800 rounded-lg flex items-center justify-start p-2 shadow-none border-none">
                                        <div className="w-3 h-3 rounded-full bg-primary dark:bg-primary-400"></div>
                                    </div>
                                ))}
                            </ScrollLinked>
                        </div>
                    </ComponentCard>

                    {/* Component 7 */}
                    <ComponentCard name="Gestures" spanCols={2} spanRows={1} className="col-start-1 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                        <div className="w-[220px] h-full rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                            <Timeline/>
                        </div>
                    </ComponentCard>

                    {/* Component 8 */}
                    <ComponentCard name="Sequencing" spanCols={2} spanRows={2} className="row-start-3 col-start-3 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                        <div className="h-full w-full rounded-lg grid grid-cols-2 grid-rows-2 gap-2">
                            <div className="relative col-span-1 row-span-1 w-full h-full">
                                <UiCard className="bottom-0 right-0" />
                            </div>
                            <div className="relative col-span-1 row-span-1 w-full h-full">
                                <UiCard className="bottom-0 left-0" />
                            </div>
                            <div className="relative col-span-1 row-span-1 w-full h-full">
                                <UiCard className="top-0 right-0" />
                            </div>
                            <div className="relative col-span-1 row-span-1 w-full h-full">
                                <UiCard className="top-0 left-0" />
                            </div>
                        </div>
                    </ComponentCard>
                </div>

                {/* Explore more link */}
                <div className="mt-10">
                    <Link href="/portfolio/about" className="flex items-center gap-2 text-sm font-medium text-primary dark:text-primary-300 hover:underline">
                        Explore more components <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
};
