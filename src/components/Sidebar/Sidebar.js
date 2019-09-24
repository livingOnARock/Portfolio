import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import Logo from "../../assets/jh-logo.png";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__logo-name">
        <div className="Sidebar__img">
          <img src={Logo} alt="logo" className="Sidebar__logo" />
        </div>
      </div>
      <nav className="Sidebar__nav">
        <ul className="Sidebar__list">
          <li className="Sidebar__list-item">
            <Link
              activeClass="active"
              className="Sidebar__link"
              containerId="Main"
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              Home
            </Link>
          </li>
          <li className="Sidebar__list-item">
            <Link
              activeClass="active"
              className="Sidebar__link"
              containerId="Main"
              to="About"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              About
            </Link>
          </li>
          <li className="Sidebar__list-item">
            <Link
              activeClass="active"
              className="Sidebar__link"
              containerId="Main"
              to="Skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              Skills
            </Link>
          </li>
          <li className="Sidebar__list-item">
            <Link
              activeClass="active"
              className="Sidebar__link"
              containerId="Main"
              to="RecentWork"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              Recent Work
            </Link>
          </li>
          <li className="Sidebar__list-item">
            <Link
              activeClass="active"
              className="Sidebar__link"
              containerId="Main"
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="Sidebar__social-media">
        <a
          class="fab fa-linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/jason-hastey-55212813b/"
        />
        <a class="fab fa-github" target="_blank" href="https://github.com/"></a>
      </div>
    </div>
  );
};

export default Sidebar;
