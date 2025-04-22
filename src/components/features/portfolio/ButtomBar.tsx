import { Book } from 'lucide-react'
import React from 'react'

export const ButtomBar = () => {
    return (
        <div className='w-fit flex flex-row gap-4 bg-transparent'>
            <div className='w-20 flex flex-col gap-3 item-center justify-center'>
                <Book size={16}  className="w-full flex text-[14px] font-thin item-center justify-center" />
                <span className="text-center text-neutral-400 text-sm leading-none">
                    Skill and features
                </span>
            </div>
            <div className='w-20 flex flex-col gap-3 item-center justify-center'>
                <Book size={16} className="w-full flex text-[14px] font-thin item-center justify-center" />
                <span className="text-center text-neutral-400 text-sm leading-none">
                    Skill and features
                </span>
            </div>
            <div className='w-20 flex flex-col gap-3 item-center justify-center'>
                <Book size={16} className="w-full flex text-[14px] font-thin item-center justify-center" />
                <span className="text-center text-neutral-400 text-sm leading-none">
                    Skill and features
                </span>
            </div>
            <div className='w-20 flex flex-col gap-3 item-center justify-center'>
                <Book size={16} className="w-full flex text-[14px] font-thin item-center justify-center" />
                <span className="text-center text-neutral-400 text-sm leading-none">
                    Skill and features
                </span>
            </div>
            <div className='w-20 flex flex-col gap-3 item-center justify-center'>
                <Book size={16} className="w-full flex text-[14px] font-thin item-center justify-center" />
                <span className="text-center text-neutral-400 text-sm leading-none">
                    Skill and features
                </span>
            </div>
        </div>
    )
}
