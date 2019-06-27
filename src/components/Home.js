import React from "react";
import Intro from "./Intro";
import Technologies from "./Technologies";
import RecentWorkCarousel from "./RecentWorkCarousel";

const Home = () => {
  return (
    <div>
      <Intro />
      <Technologies />
      <RecentWorkCarousel />
    </div>
  );
};

export default Home;
