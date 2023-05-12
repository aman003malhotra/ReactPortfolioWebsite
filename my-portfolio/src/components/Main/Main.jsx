import React from 'react'
import ReactParticle from '../ReactParticle/ReactParticle';
import Typist from 'react-typist';
import Menu from '../Menu/Menu';
const Main = () => {
    
  return (
    <div className="bg-black w-100 h-[100vh]">
        <ReactParticle />
        <Menu />
        <div className='m-10 grid grid-cols-2 justify-text-center'>
            <div className='text-white text-3xl col-span-1'>
                <Typist>
                    Hello ! Animate this text.
                </Typist>    
            </div>
            <div className="col-span-1 z-10">
                <img src="pp.png" alt="myPicture" />
            </div>
        </div>
            

        </div>
  )
}

export default Main