import React from 'react'
import ReactParticle from '../ReactParticle/ReactParticle';
import Menu from '../Menu/Menu';
import Typed from "react-typed"
import './Main.css';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Main = () => {

    return (
        <div className="bg-black w-100 h-[100vh]">
                <ReactParticle />

            
            <Menu />
            <div className='grid grid-cols-2 justify-text-center items-center'>
                <div className='text-white text-3xl col-span-1'>
                    My Name is Aman Malhotra<br />
                    I'm a
                    <Typed
                        strings={[
                            "&nbsp;Full Stack Developer",
                            "&nbsp;Frontend Developer",
                            "&nbsp;Leet Coder",
                        ]}
                        typeSpeed={350}
                        backSpeed={200}
                        loop
                    />
                </div>
                <div className="w-[100%] flex justify-center items-center">
                    <img src="pp.png" alt="myPicture" className="img relative" />
                </div>
            </div>
        </div >
    )
}

export default Main