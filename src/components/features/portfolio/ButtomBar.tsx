import { Book, Globe, Globe2, GlobeIcon } from 'lucide-react'
import React from 'react'
import { FaGlobe, FaMobile, FaMobileAlt, FaReact } from 'react-icons/fa'
import { SiAnalogue, SiExpo, SiExpress, SiNextdotjs, SiPython, SiPythonanywhere, SiPytorch } from "react-icons/si";

export const ButtomBar = () => {
    return (
        <div className='w-fit flex flex-row gap-5 bg-transparent'>
            <div className='w-[72px] flex flex-col gap-3 item-center justify-center'>
                <FaReact size={16}  className="w-full flex text-[14px] font-thin item-center justify-center" />
                <span className="text-center dark:text-neutral-400 text-[13px] font-medium leading-none">
                    React and javaScript
                </span>
            </div>
            <div className='w-[72px] flex flex-col gap-3 item-center justify-center'>
                <GlobeIcon size={16} className="w-full flex text-[14px] font-thin item-center justify-center" />
                <span className="text-center dark:text-neutral-400 text-[13px] font-medium leading-none">
                    Nextjs and typeScript
                </span>
            </div>
            <div className='w-[72px] flex flex-col gap-3 item-center justify-center'>
                <FaMobileAlt size={16} className="w-full flex text-[14px] font-thin item-center justify-center" />
                <span className="text-center dark:text-neutral-400 text-[13px] font-medium leading-none">
                    React native and expo
                </span>
            </div>
            <div className='w-[72px] flex flex-col gap-3 item-center justify-center'>
                <SiPytorch size={16} className="w-full flex text-[14px] font-thin item-center justify-center" />
                <span className="text-center dark:text-neutral-400 text-[13px] font-medium leading-none">
                    DataScience and python
                </span>
            </div>
            <div className='w-[72px] flex flex-col gap-3 item-center justify-center'>
                <SiExpress size={16} className="w-full flex text-[14px] font-thin item-center justify-center" />
                <span className="text-center dark:text-neutral-400 text-[13px] font-normal leading-none">
                    Express and nodejs
                </span>
            </div>
        </div>
    )
}
