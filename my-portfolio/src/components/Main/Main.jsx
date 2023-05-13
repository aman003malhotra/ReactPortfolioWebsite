import React from 'react'
import ReactParticle from '../ReactParticle/ReactParticle';
import Menu from '../Menu/Menu';
const Main = () => {

    return (
        <div className="bg-black w-100 h-[100vh]">
            {/* <ReactParticle /> */}
            <Menu />
            <div className='m-10 grid grid-cols-2 justify-text-center'>
                <div className='text-white text-3xl col-span-1'>
                    My Name is Aman Malhotra
                </div>
                <div className="col-span-1 z-10 bottom-0 absolute right-40 ">
                    <img src="pp.png" alt="myPicture" />
                </div>
            </div>


        </div >
    )
}

export default Main