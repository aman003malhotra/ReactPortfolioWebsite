import React from 'react'
import Tilt from 'react-parallax-tilt';
import { styles } from "../styles";

const About = () => {
  return (
    <div className=' bg-black relative flex flex-col lg:px-[100px] px-10 py-[100px]' id="about">
        <h1 className={styles.sectionHeadText}>About Me</h1>
        <div className='grid grid-cols-2 mt-10 justify-items-center max-lg:grid-cols-1'>
            <Tilt>
                <div className='col-span-1'>
                    <img src="./profile2.jpeg" alt=""/>
                </div>
            </Tilt>
            <div className='col-span-1 text-justify text-[#C69749] text-2xl max-lg:mt-9 max-lg:text-left max-lg:text-base'>
                Hi, my name is Aman Malhotra, and I am a recent graduate from Guru Nanak Dev Engineering College, Ludhiana, where I majored in Computer Science. 
              I previously worked as an SDE Intern at machinemode.ai, a startup that leverages AI to help UPSC students prepare for exams. During my time there, 
              I focused on front-end design and development, including building the PDF Annotation React App. I stopped working with machinemode.ai in July 2023
              and am currently working as a Full Stack Developer at MastersUnion since August 2023. At MastersUnion, I have been developing several key internal 
              tools and systems, including an expense management software for handling millions of dollars in transactions, an employee intranet for managing 
              various internal services, and an ads revenue management system using CSV uploads. In addition, I’ve introduced Amazon RDS, Amplify, and Astro 
              framework to the organization to improve database reliability, deployment efficiency, and SEO practices. Previously, I’ve also worked as a Freelancer 
              with EverAssignment as a MERN Stack Developer and taught Web Development to students at CodeYoung. I am passionate about building impactful projects, 
              and some of the personal projects I’ve worked on include a PDF Annotation React App, an Upwork Clone, a Smart Attendance System, and an Ecommerce 
              Website. I’m always eager to learn, collaborate, and contribute to projects that drive innovation. 
            </div>
        </div>
    </div>
  )
}

export default About
