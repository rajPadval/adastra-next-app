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
            <Members />
            <Vision />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default HomePage