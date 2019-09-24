import React from "react";
import "./About.scss";

import Portrait from "../../assets/images/jhh1-small.jpg";

const About = () => {
  return (
    <div className="About" id="About">
      <img src={Portrait} alt="Portrait" className="About__portrait" />
      <div className="About__text">
        <h3 className="About__header">About Me</h3>
        <p className="About__info">
          Hello, I am a front end web-developer based out of Dallas, Tx. I like
          to code things from scratch, and enjoy bringing ideas to life in the
          browser.
        </p>
      </div>
    </div>
  );
};

export default About;
