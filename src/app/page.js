import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Vision from "./components/Vision";
import Members from "./components/Members";
import Home_Blogs from "./components/Home_Blogs";
import Home_Events from "./components/Home_Events";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Home_Events />
      <Home_Blogs />
      <Members />
      <Vision />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
