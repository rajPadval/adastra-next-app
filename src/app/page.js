import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DotComp from "./components/DotComp";
import AboutComp from "./components/AboutComp";
import MoreAbout from "./components/MoreAbout";
import ConnectWithUs from "./components/ConnectWithUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DotComp />
      <AboutComp />
      <MoreAbout/>
      <ConnectWithUs/>
    </div>
  );
};

export default Home;
