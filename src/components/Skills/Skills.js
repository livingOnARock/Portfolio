import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="Skills" id="Skills">
      <span className="Skills__heading">Technologies</span>
      <div className="Skills__skills">
        <div className="Skills__skill" tabindex="1">
          <a className="Skills__skill--primary">
            <i className="fab fa-html5 Skills__skill--icon"></i>
            <span class="Skills__skill__heading">HTML5</span>
          </a>
          <div className="Skills__skill__secondary">
            <p className="Skills__skill__secondary--text">
              HTML5 takes HTML from a simple markup for structuring a document
              to a full app development platform. Among other features, HTML5
              including JavaScript APIs to enhance storage, multimedia, and
              hardware access.
            </p>
          </div>
          <span>▼</span>
        </div>
        <div className="Skills__skill" tabindex="1">
          <a className="Skills__skill--primary">
            <i className="fab fa-css3 Skills__skill--icon"></i>
            <span class="Skills__skill__heading">CSS3</span>
          </a>
          <div className="Skills__skill__secondary">
            <p className="Skills__skill__secondary--text">
              the latest evolution of the Cascading Style Sheets language. It
              brings a lot of long-awaited novelties, like rounded corners,
              shadows, gradients, transitions or animations, as well as new
              layouts like multi-columns, flexible box or grid layouts.
            </p>
          </div>
          <span>▼</span>
        </div>
        <div className="Skills__skill" tabindex="1">
          <a className="Skills__skill--primary">
            <i className="fab fa-js-square Skills__skill--icon"></i>
            <span class="Skills__skill__heading">JAVASCRIPT</span>
          </a>
          <div className="Skills__skill__secondary">
            <p className="Skills__skill__secondary--text">
              Javascript is a programming language mostly used to dynamically
              script webpages on the client side, but it is also often utilized
              on the server-side, using packages such as Node.js.
            </p>
          </div>
          <span>▼</span>
        </div>
        <div className="Skills__skill" tabindex="1">
          <a className="Skills__skill--primary">
            <i className="fab fa-react Skills__skill--icon"></i>
            <span class="Skills__skill__heading">REACT</span>
          </a>
          <div className="Skills__skill__secondary">
            <p className="Skills__skill__secondary--text">
              React is a JavaScript library for building user interfaces. It is
              used to build single page applications.
            </p>
          </div>
          <span>▼</span>
        </div>
        <div className="Skills__skill" tabindex="1">
          <a className="Skills__skill--primary">
            <i className="fab fa-sass Skills__skill--icon"></i>
            <span class="Skills__skill__heading">SASS</span>
          </a>
          <div className="Skills__skill__secondary">
            <p className="Skills__skill__secondary--text">
              SASS is a CSS preprocessor, which adds special features such as
              variables, nested rules and mixins into regular CSS.
            </p>
          </div>
          <span>▼</span>
        </div>
        <div className="Skills__skill" tabindex="1">
          <a className="Skills__skill--primary">
            <i className="fab fa-node-js Skills__skill--icon"></i>
            <span class="Skills__skill__heading">NODE.JS</span>
          </a>
          <div className="Skills__skill__secondary">
            <p className="Skills__skill__secondary--text">
              Node is a asynchronous event-driven JavaScript runtime, designed
              to build scalable network applications.
            </p>
          </div>
          <span>▼</span>
        </div>
        <div className="Skills__skill" tabindex="1">
          <a className="Skills__skill--primary">
            <i className="fas fa-shipping-fast Skills__skill--icon"></i>
            <span class="Skills__skill__heading">EXPRESS</span>
          </a>
          <div className="Skills__skill__secondary">
            <p className="Skills__skill__secondary--text">
              Express is a web application framework for Node.js. It is designed
              for building web applications and APIs.
            </p>
          </div>
          <span>▼</span>
        </div>
        <div className="Skills__skill" tabindex="1">
          <a className="Skills__skill--primary">
            <i className="fas fa-server Skills__skill--icon"></i>
            <span class="Skills__skill__heading">API'S</span>
          </a>
          <div className="Skills__skill__secondary">
            <p className="Skills__skill__secondary--text">
              Apis are described as an application programming interface. It is
              a set of rules that allow programs to talk to each other.
            </p>
          </div>
          <span>▼</span>
        </div>
        <div className="Skills__skill" tabindex="1">
          <a className="Skills__skill--primary">
            <i className="fab fa-github Skills__skill--icon"></i>
            <span class="Skills__skill__heading">VERSION CONTROL</span>
          </a>
          <div className="Skills__skill__secondary">
            <p className="Skills__skill__secondary--text">
              Version Control is a system that records changes to a file or set
              of files over time so that you can recall specific versions later.
            </p>
          </div>
          <span>▼</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
