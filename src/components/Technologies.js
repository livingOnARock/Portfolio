import React from "react";
import techFooterDiv from "../srcImgs/techFooterImg.jpg";
import "../App.css";

const Technologies = () => {
  return (
    <div className="Technologies">
      <span className="sectionHeading1">CODING </span>
      <span className="sectionHeading2">TECHNOLOGIES</span>

      <br />
      <span className="sectionSubHeading">
        Familiar Technologies I Use When Developing Projects
      </span>
      <div className="tech">
        <ul>
          <li>
            <i className="fab fa-html5" />
            HTML5
            <div className="line" />
          </li>
          <li>
            <i className="fab fa-css3" />
            CSS3
            <div className="line" />
          </li>
          <li>
            <i className="fab fa-sass" />
            SASS
            <div className="line" />
          </li>
          <li>
            <i className="fab fa-bootstrap" />
            BOOTSTRAP
            <div className="line" />
          </li>
          <li>
            <i className="fab fa-js-square" />
            JAVASCRIPT
            <div className="line" />
          </li>
          <li>
            <i className="fas fa-dollar-sign" />
            JQUERY
            <div className="line" />
          </li>
          <li>
            <i className="fab fa-react" />
            REACT
            <div className="line" />
          </li>
          <li>
            <i className="fas fa-server" />
            REST SERVICES AND API'S
            <div className="line" />
          </li>
          <li>
            <i className="fab fa-github" />
            VERSION CONTROL/GIT
            <div className="line" />
          </li>
          <li>
            <i className="fab fa-node-js" />
            NODE.JS
            <div className="line" />
          </li>
          <li>
            <i className="fas fa-shipping-fast" />
            EXPRESS
            <div className="line" />
          </li>
          <li>
            <i className="fas fa-database" />
            MONGODB
            <div className="line" />
          </li>
        </ul>
      </div>
      <div className="footInfo">
        <div className="footText">
          <h1>NEVER STOP!</h1>
          <h5>
            I follow the NEVER STOP principle when it comes to learning. There
            is much I do not know, and that makes me curious and excited to
            close the gap.
          </h5>
        </div>
        <img src={techFooterDiv} alt="" />
      </div>
    </div>
  );
};

export default Technologies;
