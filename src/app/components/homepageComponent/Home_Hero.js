"use client"
// import { set } from 'mongoose';
import React, { useState, useEffect } from 'react';

const Home_Hero = (name) => {

    // const [title , setTitle] = useState('Events');
    // setTitle(name);

  return (
    <div className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Blinking Stars */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <span
            key={index}
            className="absolute bg-adastra-white w-1 h-1 rounded-full"
            style={{
              animation: `blinkingStars 1s infinite ${index * 0.2}s`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></span>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 mt-8">
        {/* SVG */}
        <div className='mt-[15rem]'>
        <svg width="700" height="80" xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#2f2fa2', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00c3ff', stopOpacity: 1 }} />
          </linearGradient>

          <text x="50%" y="50%" fontFamily="Protest Strike" fontSize="80" fontWeight="900"
            fill="url(#gradient)" textAnchor="middle" dominantBaseline="middle"
            filter="url(#textShadow)" style={{ letterSpacing: '2px' }}>
            {/* {title} */} Events
          </text>

          <defs>
            <filter id="textShadow" x="0" y="0" width="150%" height="150%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="3" dy="3" result="offsetblur" />
              <feFlood floodColor="black" />
              <feComposite in2="offsetblur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        </div>

        <div className='text-[1.5rem] w-[40vw] text-center'>
            <p>Explore Various Events Happening Right Now In AdAstra, and Get Chance To Win Amazing Prizes and Certificates</p>
        </div>
        <div className='bg-black h-[5rem]'>

        </div>

        {/* Scroll Down Message */}
        <div className="animate-bounce flex text-center mt-[15rem] items-center">
          <p className="text-adastra-white text-[1.1rem] font-normal h-[2rem]">
            Scroll Down
          </p>
        </div>

        {/* Divider */}
        {[...Array(8)].map((_, index) => (
          <p key={index} className='text-adastra-light-blue m-1'>|</p>
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
    </div>
  );
};

export default Home_Hero;
