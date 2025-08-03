'use client'

import { GlobeIcon } from 'lucide-react'
import React from 'react'
import {
  FaReact,
  FaMobileAlt,
  FaSearch,
  FaServer,
  FaCogs,
  FaDiscord,
} from 'react-icons/fa'
import {
  SiPytorch,
  SiExpress,
  SiNextdotjs,
  SiExpo,
  SiPython,
  SiCypress,
  SiPostman,
  SiGithubactions,
  SiVercel,
  SiGoogleanalytics,
} from 'react-icons/si'

type ButtomBarProps = {
  page?: 'about' | 'default'
}

export const ButtomBar = ({ page = 'default' }: ButtomBarProps) => {
  const defaultItems = [
    {
      icon: <FaReact size={16} />,
      label: 'React and JavaScript',
    },
    {
      icon: <GlobeIcon size={16} />,
      label: 'Next.js and TypeScript',
    },
    {
      icon: <FaMobileAlt size={16} />,
      label: 'React Native and Expo',
    },
    {
      icon: <SiPytorch size={16} />,
      label: 'Data Science and Python',
    },
    {
      icon: <SiExpress size={16} />,
      label: 'Express and Node.js',
    },
  ]

  const aboutItems = [
    {
      icon: <SiPostman size={16} />,
      label: 'API Testing',
    },
    {
      icon: <SiCypress size={16} />,
      label: 'E2E Testing',
    },
    {
      icon: <SiGithubactions size={16} />,
      label: 'CI/CD',
    },
    {
      icon: <SiVercel size={16} />,
      label: 'Deployments',
    },
    {
      icon: <FaSearch size={16} />,
      label: 'SEO',
    },
    {
      icon: <SiGoogleanalytics size={16} />,
      label: 'Analytics',
    },
    {
      icon: <FaDiscord size={16} />,
      label: 'Community',
    },
  ]

  const items = page === 'about' ? aboutItems : defaultItems

  return (
    <div className="md:w-fit w-full max-sm:px-4 flex flex-row md:gap-5 gap-3 bg-transparent items-center justify-center max-sm:justify-between flex-wrap">
      {items.map((item, index) => (
        <div
          key={index}
          className={` w-[72px] flex ${
        page === 'default'
          ? 'flex flex-col gap-3 md:gap-5'
          : 'flex-row md:gap-1'
      } gap-3 items-center justify-center`}
        >
          <div className="text-[10px] text-neutral-800 dark:text-neutral-300">
            {item.icon}
          </div>
          <span className="text-center text-[10px] dark:text-neutral-400 font-medium leading-none">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}