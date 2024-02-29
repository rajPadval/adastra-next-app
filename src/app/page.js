import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DotComp from "./components/DotComp";
import AboutComp from "./components/AboutComp";
import MoreAbout from "./components/MoreAbout";

const Home = () => {
  return (
    <div className="overflow-x-clip">
      <HeroSection />
      <DotComp />
      <AboutComp />
      <MoreAbout />
    </div>
  );
};

export default Home;
