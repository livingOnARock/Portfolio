import React from "react";

import Home from "../Home/Home";
import About from "../About/About";
import "./Main.scss";
import Skills from "../Skills/Skills";
import RecentWork from "../RecentWork/RecentWork";
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <div className="Main" id="Main">
      <Home />
      <About />
      <Skills />
      <RecentWork />
      <Contact />
    </div>
  );
};

export default Main;
