import React from 'react'
import { Icon } from "react-3d-icons";
import {notion, postman, bitbucket, visualstudiocode, github} from "react-3d-icons";

const Tools = () => {
    return (
        <div className='flex flex-col bg-black z-20'>Tools And Technologies 
            <div className='grid grid-cols-6 text-center mx-auto'>
                <Icon file={postman} color={"#FF6C37"} scale={10} style={{ height: "100px", width: "100px" }} spin={0.5} depth={10} />
                <Icon file={notion} color={"#fff"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={bitbucket} color={"#0052CC"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={visualstudiocode} color={"#007ACC"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={github} color={"#181717"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
            </div>
        </div>
    )
}

export default Tools;