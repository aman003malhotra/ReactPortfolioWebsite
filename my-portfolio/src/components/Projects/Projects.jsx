import React from "react";
import { styles } from "../styles";
import './Project.css';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  return (
    <div className="flex flex-col bg-black py-10 relative" id="project">
      <div className={styles.sectionHeadText}>Portfolio</div>
      <div>
        <div className="grid grid-cols-2">
          <div className="col-span-1">Upwork Clone</div>
          <div>
          <Tilt>
          <div class="card">
        <div class="container-card bg-yellow-box">
        <img
              src="https://www.projectmanager.com/wp-content/uploads/2022/09/IT-Project-Management.png"
              alt=""
              className="rounded-xl"
            />
            <p class="card-title">Zero-cost Possibilities</p>
            <p class="card-description">Hubble lets users borrow USDH for a one-time 0.5% fee. No variable rates. No interest charged, ever.</p>
        </div>
    </div>   
    </Tilt>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <div className="col-span-1">Smart Attendance System</div>
            <img
              src="https://www.projectmanager.com/wp-content/uploads/2022/09/IT-Project-Management.png"
              alt=""
              className="col-span-1"
            />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1">Ecommerce Webiste</div>
          <div>
            <img
              src="https://www.projectmanager.com/wp-content/uploads/2022/09/IT-Project-Management.png"
              alt=""
              className="col-span-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
