import React from 'react'
import { Icon } from "react-3d-icons";
import {tailwindcss, css3, nodedotjs, react, mongodb, postgresql, mysql, docker, amazonaws,bootstrap,javascript, python, git} from "react-3d-icons";
import html5 from "./logos/html5.svg";
const Stack = () => {
    return (
        <div className='bg-black z-20'>Stack
            <div className='grid grid-cols-8 text-center justify-text-center'>
                <Icon file={html5} color={"#E34F26"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={css3} color={"#1572B6"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={nodedotjs} color={"#339933"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <div class="flex flex-col items-center">
                   <Icon file={react} color={"#61DAFB"} scale={10} style={{ height: "120px", width: "120px" }} spin={2} depth={15} />
                   <h4>React</h4>  
                </div>
                <Icon file={mongodb} color={"#47A248"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={postgresql} color={"#4169E1"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={mysql} color={"#4479A1"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={docker} color={"#2496ED"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={amazonaws} color={"#232F3E"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={bootstrap} color={"#7952B3"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={tailwindcss} color={"#1DA1F2"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={javascript} color={"#F7DF1E"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={python} color={"#3776AB"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <Icon file={git} color={"#F05032"} scale={10} style={{ height: "100px", width: "100px" }} spin={1} depth={10} />
                <img src={html5} alt="Your SVG" />
            </div>
        </div>
    )
}

export default Stack