import React from 'react'
import ReactParticle from '../ReactParticle/ReactParticle';
import Menu from '../Menu/Menu';
import Typed from "react-typed"
import './Main.css';
import { styles } from "../styles";

const Main = () => {

    return (
        <div className="bg-black w-100 h-[88vh]">
                <ReactParticle />

            
            <Menu />
            <div className='grid grid-cols-2 justify-text-center items-center'>
                <div className='text-white text-3xl col-span-1'>
                    I'm <span className="text-5xl text-bold">Aman Malhotra</span><br />
                    I'm a
                    <Typed
                        strings={[
                            "&nbsp;Full Stack Developer",
                            "&nbsp;Frontend Developer",
                            "&nbsp;Leet Coder",
                            "&nbsp;Machine Learning Enthusiast",
                        ]}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                    />
                </div>
                <div className="w-[100%] flex justify-center items-center">
                    <img src="pp.png" alt="myPicture" className="img relative rounded-full"  />
                </div>
            </div>
        </div >
    )
}

export default Main