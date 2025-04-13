'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ExternalLink, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heading } from '@/components/globals/typography/Heading';
import { Paragraph } from '@/components/globals/typography/Paragraph';

// Dynamically import Slider to disable SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Creative Playground',
    description: 'A visually dynamic site to showcase my design and frontend skills.',
    image: '/images/project/project-1.png',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion', 'React', 'TypeScript', 'Chart.js'],
    liveUrl: 'https://myportfolio24-drab.vercel.app',
    githubUrl: 'https://github.com/joeteck/my_portfolio_24',
  },
  {
    title: 'Joeteck Portfolio',
    description: 'A powerful dashboard for developers to manage their stack and tools.',
    image: '/images/project/project-2.png',
    tech: ['React', 'TypeScript', 'Chart.js', 'Nextjs'],
    liveUrl: 'https://myportfolio24-drab.vercel.app/portfolio',
    githubUrl: 'https://github.com/joeteck/my_portfolio_24',
  },
  {
    title: 'Home Service Mobile App',
    description: 'Responsive landing page built for a mobile-first startup.',
    image: '/images/project/project-3.jpg',
    tech: ['React Native', 'Clerk Expo Auth', 'JavaScript'],
    liveUrl: 'https://drive.google.com/drive/folders/1oGng28llrQT_Cn9TsS-sBZy5Mz3rqEKt?usp=sharing',
    githubUrl: 'https://github.com/Joeteck/home-service-app',
  },
  {
    title: 'Blockchain Based Land Registration System',
    description: 'Blockchain based property registry platform.',
    image: '/images/project/project-3.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web3', 'Meta', 'Smart Contract'],
    githubUrl: 'https://github.com/Joeteck/home-service-app',
  },
];

const FeaturedProjects = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    beforeChange: (_: number, next: number) => setCenterIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, centerPadding: '60px' },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: '40px' },
      },
    ],
  };

  return (
    <section className="w-full px-6 md:px-16 py-12 bg-primary dark:bg-primaryDark text-primaryDark dark:text-white">
      <div className="max-w-7xl mx-auto">
        <Heading variant="title" className="py-6 text-center">
          Featured Projects
        </Heading>

        <Slider {...settings}>
          {projects.map((project, idx) => {
            const isCenter = idx === centerIndex;

            return (
              <div key={idx} className="px-3">
                <motion.div
                  className="slick-slide-card"
                  style={{
                    scale: isCenter ? 1.1 : 0.9,
                    translateY: isCenter ? '-10px' : '30px',
                    opacity: isCenter ? 1 : 0.5,
                    zIndex: isCenter ? 10 : 1,
                    filter: isCenter ? 'none' : 'blur(1px)',
                    boxShadow: isCenter ? '0 15px 35px rgba(0,0,0,0.15)' : 'none',
                    transition: 'all 0.4s ease-in-out',
                    pointerEvents: isCenter ? 'auto' : 'none',
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  <div className="relative w-full h-52">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-[#fef6ff] dark:bg-primaryDarklight">
                    <Heading variant="subtitle" className="text-left mb-2">
                      {project.title}
                    </Heading>
                    <Paragraph className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {project.description}
                    </Paragraph>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gray-300 dark:bg-accent rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-secondary flex items-center gap-1 hover:underline"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary flex items-center gap-1 hover:underline"
                        >
                          <GitBranch size={16} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProjects;
