import React from 'react'
import { BallCanvas } from "../canvas";
import { technologies } from "../../content";


const Stack = () => {
    return (
            <div className='flex flex-col bg-black py-10 realtive'>
                <div className="text-3xl">Technologies</div>
                <div className='flex flex-row flex-wrap justify-center gap-10 py-10 px-[60px]'>
                    {technologies.map((technology) => (
                        <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Stack