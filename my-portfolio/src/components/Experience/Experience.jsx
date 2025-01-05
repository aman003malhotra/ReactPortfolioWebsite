import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BabyIcon from '../../assets/baby.png';
import SchoolIcons from '../../assets/school.png';
import CollegeIcons from '../../assets/College.png';
import TeacherIcons from '../../assets/teacher.png';
import CodingIcons from '../../assets/coding.png'
import { styles } from "../styles";

const Experience = () => {


    return (
        <div className='bg-black relative' id="experience">
            <h2 className={styles.sectionHeadText}>My Experience</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="August 2023 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Mastersunion</h3>
                    <h4 className="vertical-timeline-element-subtitle">Gurgaon</h4>
                    <p>
                        Full Stack Developer
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="March 2023 - July 2023"
                    contentStyle={{ background: '#282A3A', color: '#C69749' }}
                    contentArrowStyle={{ borderRight: '7px solid #735F32' }}
                    iconStyle={{ background: '#282A3A', color: 'white' }}
                    icon={<img src={CodingIcons} alt="myLogo" />}
                >
                    <h3 className="vertical-timeline-element-title">SDE Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Gurgaon, Haryana</h4>
                    <p>
                        SDE Intern at MachineMode.ai
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Aug 2022 - Dec 2022"
                    contentStyle={{ background: '#282A3A', color: '#C69749' }}
                    contentArrowStyle={{ borderRight: '7px solid #735F32' }}
                    iconStyle={{ background: '#282A3A', color: 'white' }}
                    icon={<img src={TeacherIcons} alt="myLogo" />}
                >
                    <h3 className="vertical-timeline-element-title">Mentor & Teacher</h3>
                    <h4 className="vertical-timeline-element-subtitle">CodeYoung</h4>
                    <p>
                        Teached MERN to students from 8 to 18 years age.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="July 2023"
                    contentStyle={{ background: '#282A3A', color: '#C69749' }}
                    contentArrowStyle={{ borderRight: '7px solid #735F32' }}
                    iconStyle={{ background: '#282A3A', color: 'white' }}
                icon={<img src={CollegeIcons} alt="myLogo" />}
                >
                    <h3 className="vertical-timeline-element-title">Completed Bachelors of Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Guru Nanak Dev Engineering College</h4>
                    <p>
                        Majors in Computer Science
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="JULY 2019"
                    contentStyle={{ background: '#282A3A', color: '#C69749' }}
                    contentArrowStyle={{ borderRight: '7px solid #735F32' }}
                    iconStyle={{ background: '#282A3A', color: 'white' }}
                    icon={<img src={SchoolIcons} alt="myLogo" />}
                >
                    <h3 className="vertical-timeline-element-title">Graduated High School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Rose Mary Convent School</h4>
                    <p>
                    Completed School Education
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="July 2001"
                    contentStyle={{ background: '#282A3A', color: '#C69749' }}
                    contentArrowStyle={{ borderRight: '7px solid #735F32' }}
                    iconStyle={{ background: '#282A3A', color: 'white' }}
                    icon={<img src={BabyIcon} alt="myLogo" />}
                >
                    
                    <h4 className="vertical-timeline-element-subtitle">Came Into This World</h4>
                    <p>
                        Earth
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience
