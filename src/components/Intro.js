import React from "react";
import officeImg1 from "../srcImgs/introHeader1.jpg";
import officeImg2 from "../srcImgs/introHeader2.jpg";
import codeImg from "../srcImgs/codePic.jpg";
import "../App.css";
const Intro = () => {
  return (
    <div>
      <span className="sectionHeading1">WEB DEVELOPMENT </span>
      <span className="sectionHeading2">Full Stack Web Developer</span>
      <div className="introImgs">
        <img id="img2" src={officeImg2} alt="" />
        <img id="img1" src={officeImg1} alt="" />
        <img id="codeImg" src={codeImg} alt="" />
      </div>
    </div>
  );
};

export default Intro;
