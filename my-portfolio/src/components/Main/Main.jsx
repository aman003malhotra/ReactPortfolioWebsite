import React from "react";
import ReactParticle from "../ReactParticle/ReactParticle";
import Menu from "../Menu/Menu";
import Typed from "react-typed";
import "./Main.css";
import { styles } from "../styles";

const Main = () => {
  return (
    <div className="bg-black w-100 h-[88vh]">
      <ReactParticle />

      <Menu />
      <div className="grid grid-cols-2 justify-text-center items-center max-md:grid-cols-1">
        <div className="text-white text-3xl col-span-1 flex flex-col justify-center">
          <div>
            I'm <span className="text-5xl text-bold">Aman Malhotra</span>
            <br />
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
          <div className="flex flex-row gap-x-5 mt-5 justify-center items-center">
            <a target="_blank" href="https://github.com/aman003malhotra">
              <img className="h-[30px] w-[30px]" src="github.png" alt="" />
            </a>
            <a  target="_blank" href="https://twitter.com/Aman003Malhotra">
              <img className="h-[30px] w-[30px]" src="twitter.png" alt="" />
            </a>
            <a  target="_blank" href=" https://wa.me/qr/ZUTLJK6UEBG2H1">
              <img className="h-[30px] w-[30px]" src="whatsapp.png" alt="" />
            </a>
            <a  target="_blank" href="https://www.linkedin.com/in/aman-003-malhotra/">
              <img className="h-[28px] w-[28px]" src="linkedin.png" alt="" />
            </a>
            <a  target="_blank" href="mailto:aman003malhotra@gmail.com">
              <img className="h-[30px] w-[30px]" src="gmail.png" alt="" />
            </a>
            <a  target="_blank" href="https://medium.com/@aman003malhotra">
              <img className="h-[30px] w-[30px]" src="medium.png" alt="" />
            </a>
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center max-md:hidden">
          <img
            src="pp.png"
            alt="myPicture"
            className="img relative rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
