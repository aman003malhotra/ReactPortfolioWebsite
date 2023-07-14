import React from 'react'
import Tilt from 'react-parallax-tilt';
import { styles } from "../styles";

const About = () => {
  return (
    <div className=' bg-black relative flex flex-col px-[100px] py-[100px]' id="about">
        <h1 className={styles.sectionHeadText}>About Me</h1>
        <div className='grid grid-cols-2 mt-10 justify-items-center'>
            <Tilt>
                <div className='col-span-1'>
                    <img src="./profile2.jpeg" alt=""/>
                </div>
            </Tilt>
            <div className='col-span-1 text-justify text-[#C69749] text-2xl'>
                Hi, My name is Aman Malhotra,I am a recent graduate from Guru Nanak Dev Engineering college in Ludhiana. I majored in Computer Science. Currently I am working as an SDE Intern @machinemode.ai, Which is a Startup which revolutionizes how UPSC students Prepare through AI.
                My work There includes handling the front-end design and developing of the Main software which will include building the PDF Annotation React App. I have also worked as a Freelancer with EverAssignment as a MERN Stack Developer. 
                I love teaching and have been a tutor with CodeYoung in teaching students Web Development. I like building project, some of the projects that i have build includes PDF Annotation React App, Upwork Clone, Smart Attendance System, Ecommerce Website and many more.
                Wanna Know more about me Please Continue seeing below.   
            </div>
        </div>
    </div>
  )
}

export default About