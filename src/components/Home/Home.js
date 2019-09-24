import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home" id="Home">
      <div class="Home__heading">
        <strong class="Home__heading--primary">Jason Hastey</strong>
        <strong class="Home__heading--secondary">Front-End Developer</strong>
        <a href="#" class="btn btn--contrast">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Home;
