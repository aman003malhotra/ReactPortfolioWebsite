import React from 'react'
import { styles } from "../styles";


const Projects = () => {
  return (
    <div className='flex flex-col bg-black py-10 relative '>
        <div className={styles.sectionHeadText}>
            Portfolio
        </div>
        <div>
            <div className='grid grid-cols-2'>
                <div className='col-span-1'>Upwork Clone</div>
                <div>
                    <img 
                        src="" 
                        alt="" 
                        className='col-span-1'
                    />
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <img 
                        src="" 
                        alt="" 
                        className='col-span-1'
                    />
                </div>
                <div className='col-span-1'>Smart Attendance System</div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='col-span-1'>Ecommerce Webiste</div>
                <div>
                    <img 
                        src="" 
                        alt="" 
                        className='col-span-1'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects