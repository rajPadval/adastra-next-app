import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DotComp from "./components/DotComp";
import AboutComp from "./components/AboutComp";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DotComp />
      <AboutComp />
    </div>
  );
};

export default Home;
