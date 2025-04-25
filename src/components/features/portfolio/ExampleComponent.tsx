'use client';

import { motion, stagger } from 'framer-motion'; // Import the motion component
import { Heading } from '@/components/globals/typography/Heading';
import { Paragraph } from '@/components/globals/typography/Paragraph';
import { ComponentCard } from './ComponentCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/globals/layout/Container';
import Drag from '@/components/motionComponent/drag';
import Reordering from '@/components/motionComponent/reorder';
import Button from '@/components/globals/ui/Button';
import LoadingThreeDotsJumping from '@/components/motionComponent/loading';
import Modal from '@/components/globals/ui/Modal';
import Tooltip from '@/components/globals/ui/Tooltip';

export const ExampleComponent = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-20 md:pt-40 px-4 bg-neutral-200 dark:bg-neutral-900">
        {/* Label */}
        <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
            EXAMPLES
        </span>

        {/* Heading + Paragraph */}
        <div className="text-center my-6 max-w-md">
            <Heading variant="sectionTitle" className="pb-2 text-center">Powerful components</Heading>
            <Paragraph className="text-neutral-600 dark:text-neutral-400 font-semibold text-center">
            Create smooth, high-performance components with React libraries—from simple transforms to advanced interactive gestures
            </Paragraph>
        </div>

        {/* Advanced Grid */}
        <div className="max-w-[80%] w-full grid gap-4 auto-rows-fr grid-cols-1 sm:grid-cols-4 sm:grid-rows-4">
            {/* Example Component Card 1: Simple */}
            <ComponentCard
            name="Simple Button"
            spanCols={1}
            spanRows={1}

            >
            <Container className="bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                <Button variant='outline'>Button</Button>
            </Container>
            </ComponentCard>

            {/* Example Component Card 2: Transforms */}
            <ComponentCard
            name="Transforms"
            spanCols={2}
            spanRows={1}
            motionProps={{
                initial: { y: 20 },
                animate: { y: 0 },
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.9 },
            }}
            >
            <Container className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                <LoadingThreeDotsJumping/>
            </Container>
            </ComponentCard>
            {/* Example Component Card 3 with looping animation */}
            <ComponentCard
                name="Loading"
                spanCols={1}
                spanRows={2}
            >
                <Container className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-2 row-span-1 flex justify-center items-center shadow-none">
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
                </Container>
            </ComponentCard>

            {/* Example Component Card 4 with looping animation */}
            <ComponentCard
                name="Scroll"
                spanCols={2}
                spanRows={1}
            >
                <Container className="h-full w-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-2 flex justify-center items-center shadow-none">
                <Drag>
                        <Container className="h-28 w-28 bg-cyan-700 border-none dark:bg-cyan-700 rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-2xl">
                            
                        </Container>
                    </Drag>
                </Container>
            </ComponentCard>

            {/* Example Component Card 5 with looping animation */}
            <ComponentCard
                name="Exit"
                spanCols={1}
                spanRows={1}
                className='h-80'
            >
                <Container className="bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
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
                </Container>
            </ComponentCard>

            {/* Example Component Card 6 with looping animation */}
            <ComponentCard
                name="Springs"
                spanCols={2}
                spanRows={1}
                className=''
                motionProps={{
                    animate: {
                        opacity: [0, 1, 0], // Opacity loop
                        rotate: [90, 0, 90], // Rotation loop
                    },
                    transition: {
                        duration: 2, // Total loop time
                        repeat: Infinity, // Infinite loop
                        repeatType: 'loop', // Loop animation
                        ease: 'easeInOut',
                    }
                }}
            >
                <Container className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                    Component 6
                </Container>
            </ComponentCard>

            {/* Example Component Card 7 with looping animation */}
            <ComponentCard
                name="Gestures"
                spanCols={2}
                spanRows={1}
                className='col-start-1'
                motionProps={{
                    animate: {
                        opacity: [0, 1, 0], // Opacity loop
                        rotate: [90, 0, 90], // Rotation loop
                    },
                    transition: {
                        duration: 2, // Total loop time
                        repeat: Infinity, // Infinite loop
                        repeatType: 'loop', // Loop animation
                        ease: 'easeInOut',
                    }
                }}
            >
                <Container className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                    Component 7
                </Container>
            </ComponentCard>

            {/* Example Component Card 8 with looping animation */}
            <ComponentCard
                name="Sequencing"
                spanCols={2}
                spanRows={2}
                className='row-start-3 col-start-3'
                motionProps={{
                    animate: {
                        opacity: [0, 1, 0], // Opacity loop
                        rotate: [90, 0, 90], // Rotation loop
                    },
                    transition: {
                        duration: 3, // Total loop time
                        repeat: Infinity, // Infinite loop
                        repeatType: 'loop', // Loop animation
                        ease: 'easeInOut',
                    }
                }}
            >
                <Container className="h-full bg-transparent border-none dark:bg-transparent rounded-lg col-span-1 row-span-1 flex justify-center items-center shadow-none">
                    Component 8
                </Container>
            </ComponentCard>
        </div>

        {/* Explore more */}
        <div className="mt-10">
            <Link href="/portfolio/about" className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:underline">
            Explore more components <ArrowRight size={14} />
            </Link>
        </div>
        </div>
    );
};
