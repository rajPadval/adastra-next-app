"use client"
import React from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/homepageComponent/Newsletter";
import Vision from "./components/homepageComponent/Vision";
import Members from "./components/homepageComponent/Members";
import Home_Blogs from "./components/homepageComponent/Home_Blogs";
import Home_Events from "./components/homepageComponent/Home_Events";
import Hero from './components/heroComponents/page';
import Home_Hero from './components/homepageComponent/Home_Hero';
// import Hero from '../components/Hero';

const HomePage = () => {
    document.title = 'AdAstra | Home'
    return (
        <div className='gap-6'>

            <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-50">
                {[...Array(20)].map((_, index) => (
                    <span
                        key={index}
                        className="absolute bg-adastra-white w-1 h-1 rounded-full"
                        style={{
                            animation: `blinkingStars 2s infinite ${index * 0.2}s`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    ></span>
                ))}
            </div>
            <style jsx>
                {`
          @keyframes blinkingStars {
            0%, 50%, 100% {
              opacity: 1;
            }
            25%, 75% {
              opacity: 0;
            }
          }
        `}
            </style>
            <Navbar />
            {/* <Hero /> */}
            <Hero />
            {/* <Home_Hero/> */}
            <div>
                <Home_Events />
            </div>
            <div className='sm:mt-[10rem]'>
                <Home_Blogs />
            </div>
            <div className='sm:mt-[10rem]'>
            <Members />
            </div>
            <div className='sm:mt-[10rem]'>
            <Vision />
            </div>
            <div className='sm:mt-[10rem]'>
            <Newsletter />
            </div>
            <div className=''>
            <Footer />
            </div>
        </div>
    )
}

export default HomePage