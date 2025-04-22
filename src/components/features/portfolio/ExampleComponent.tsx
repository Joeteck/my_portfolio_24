import { Container } from '@/components/globals/layout/Container'
import { Grid, GridItem } from '@/components/globals/layout/GridSystem'
import { Heading } from '@/components/globals/typography/Heading'
import { Paragraph } from '@/components/globals/typography/Paragraph'
import { ArrowBigLeftDashIcon, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const ExampleComponent = () => {
    return (
        <div className='min-h-screen w-full flex flex-col mt-32 items-center'>
            <span className='w-fit text-center text-neutral-400 text-[10px] font-bold p-1 px-3 rounded-full dark:bg-neutral-800 bg-neutral-200'>
                EXAMPLES
            </span>
            <div className='w-86 flex flex-col py-4 justify-center items-center'>
                <Heading variant='sectionTitle' className='pb-2'>Powerful components</Heading>
                <Paragraph className='w-96 text-center text-base font-semibold text-neutral-600 dark:text-neutral-500'>
                    Create smooth, high-performance animations with Motion’s easy-to-use API—from simple transforms to advanced interactive gestures
                </Paragraph>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <Grid cols={1} align='center' justify='center' responsive='grid-cols-1' gap={0}>
                    <GridItem>
                        <Grid>
                            <GridItem>
                                <Container className='bg-neutral-300 dark:bg-neutral-600'>
                                    HEY
                                </Container>
                            </GridItem>
                            <GridItem>
                                <Container className='bg-neutral-300 dark:bg-neutral-600'>
                                    Hey
                                </Container>
                            </GridItem>
                        </Grid>
                        <GridItem>
                                <Container className='bg-neutral-300 dark:bg-neutral-600'>
                            Hey
                                    
                                </Container>
                        </GridItem>
                    </GridItem>
                    <GridItem>
                        <Grid>
                            <GridItem>
                                <Container className='bg-neutral-300 dark:bg-neutral-600'>
                                Hey
                                    
                                </Container>
                            </GridItem>
                            <GridItem>
                                <Container className='bg-neutral-300 dark:bg-neutral-600'>
                                Hey
                                    
                                </Container>
                            </GridItem>
                        </Grid>
                        <GridItem >
                            <Grid>
                                <Container className='bg-neutral-300 dark:bg-neutral-600'>
                                Hey
                                    
                                </Container>
                            </Grid>
                            <Grid>
                                <Container className='bg-neutral-300 dark:bg-neutral-600'>
                                Hey
                                    
                                </Container>
                            </Grid>
                            <Grid>
                                <Container className='bg-neutral-300 dark:bg-neutral-600'>
                                    Hey
                                </Container>
                            </Grid>
                            <Grid>
                                <Container className='bg-neutral-300 dark:bg-neutral-600'>
                                    Hey
                                </Container>
                            </Grid>
                        </GridItem>
                    </GridItem>
                </Grid>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <Link href='/portfolio/about'>
                    <span className='w-fit flex flex-row gap-2 bg-transparent justify-center items-center'>
                        <p className='text-base font-medium'>Explore more components </p>
                        <ArrowRight size={12}/>
                    </span>
                </Link>
            </div>
        </div>
    )
}
