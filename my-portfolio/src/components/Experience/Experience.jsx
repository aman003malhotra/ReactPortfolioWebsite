import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BabyIcon from '../../assets/baby.png';
import SchoolIcons from '../../assets/school.png';
import CollegeIcons from '../../assets/College.png';
import TeacherIcons from '../../assets/teacher.png';
import CodingIcons from '../../assets/coding.png'

const Experience = () => {


    return (
        <div className='bg-black'>
            <h2 className='text-3xl py-10'>My Experience</h2>
            <VerticalTimeline>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement> */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="March 2023 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<img src={CollegeIcons} alt="myLogo" />}
                >
                    <h3 className="vertical-timeline-element-title">Completed Bachelors of Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Guru Nanak Dev Engineering College</h4>
                    <p>
                        Computer Science
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="JULY 2019"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
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
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
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