import { Container } from '@/components/globals/layout/Container'
import { Grid, GridItem } from '@/components/globals/layout/GridSystem'
import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const ExampleComponent = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center mt-40 px-4">
      {/* Label */}
      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-400">
        EXAMPLES
      </span>

      {/* Heading + Paragraph */}
      <div className="text-center mt-4 max-w-md">
        <Heading variant="sectionTitle" className="pb-2">Powerful components</Heading>
        <Paragraph className="text-neutral-600 dark:text-neutral-500 font-semibold">
          Create smooth, high-performance animations with Motion’s easy-to-use API—from simple transforms to advanced interactive gestures
        </Paragraph>
      </div>

        {/* Component Grid */}
        <div className="max-w-4xl w-full grid grid-cols-4 grid-rows-4 gap-4 auto-rows-fr md:grid-cols-4 md:grid-rows-4 sm:grid-cols-1 sm:grid-rows-none sm:auto-rows-auto">

        {/* Item 1: Top Left - spans 1 col, 1 row */}
        <Container className="bg-neutral-300 border-none h-72 dark:bg-neutral-800 rounded-lg col-span-1 row-span-1 flex justify-center items-center">Item 1</Container>

        {/* Item 2: Top Center - spans 2 cols, 1 row */}
        <Container className="bg-neutral-300 border-none dark:bg-neutral-800 rounded-lg col-span-2 row-span-1 flex justify-center items-center">Item 2</Container>

        {/* Item 3: Top Right - spans 1 col, 1 row */}
        <Container className="bg-neutral-300 border-none dark:bg-neutral-800 rounded-lg col-span-1 row-span-2 flex justify-center items-center">Item 3</Container>

        {/* Item 4: Second Row Left - spans 1 col, 2 rows */}
        <Container className="bg-neutral-300 border-none h-72 dark:bg-neutral-800 rounded-lg col-span-2 row-span-1 flex justify-center items-center">Item 4</Container>

        {/* Item 5: Second Row Middle - spans 2 cols, 1 row */}
        <Container className="bg-neutral-300 border-none dark:bg-neutral-800 rounded-lg col-span-1 row-span-1 flex justify-center items-center">Item 5</Container>

        {/* Item 6: Second Row Right - spans 1 col, 1 row */}
        <Container className="bg-neutral-300 border-none dark:bg-neutral-800 rounded-lg col-span-2 row-span-1 flex justify-center items-center">Item 6</Container>

        {/* Item 7: Third Row Middle - spans 2 cols, 1 row */}
        <Container className="bg-neutral-300 border-none h-72 dark:bg-neutral-800 rounded-lg col-start-1 col-span-2 row-span-1 flex justify-center items-center">Item 7</Container>

        {/* Item 8: Bottom Right - spans 2 cols, 2 rows */}
        <Container className="bg-neutral-300 border-none dark:bg-neutral-800 rounded-lg col-start-3 col-span-2 row-start-3 row-span-2 grid grid-cols-2 grid-rows-2 gap-2">

            <Container className="relative flex bg-transparent shadow-none dark:bg-transparent w-full border-none col-span-1 h-full  mb-2 rounded" >
                <div className='absolute w-48 h-40 rounded-lg bg-gray-400 flex justify-center items-center bottom-0 right-0'>
                    item

                </div>
            </Container>
            <Container className="relative flex bg-transparent shadow-none dark:bg-transparent w-full border-none col-span-1 h-full  mb-2 rounded" >
                <div className='absolute w-48 h-40 rounded-lg bg-gray-400 flex justify-center items-center bottom-0 left-0'>
                    item

                </div>
            </Container>
            <Container className="relative flex bg-transparent shadow-none dark:bg-transparent w-full border-none col-span-1 h-full  mb-2 rounded" >
                <div className='absolute w-48 h-40 rounded-lg bg-gray-400 flex justify-center items-center top-0 right-0'>
                    item

                </div>
            </Container>
            <Container className="relative flex bg-transparent shadow-none dark:bg-transparent w-full border-none col-span-1 h-full  rounded" >
                <div className='absolute w-48 h-40 rounded-lg bg-gray-400 flex justify-center items-center top-0 left-0'>
                    item

                </div>
            </Container>
        </Container>

        </div>

      {/* Link */}
      <div className="mt-10">
        <Link href="/portfolio/about">
          <span className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:underline">
            Explore more components <ArrowRight size={14} />
          </span>
        </Link>
      </div>
    </div>
  )
}
