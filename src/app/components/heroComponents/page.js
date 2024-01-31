"use client"
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

// Hero component
const Hero = () => {


  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    const element = document.getElementById('main');
    setElementHeight(element.offsetHeight);

    const onScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos <= elementHeight) {
        const value = scrollPos / elementHeight.toFixed(2);
        const xValue = 55 - value * 205;

        if (xValue >= 0) {
          // When xValue is greater than or equal to 0, adjust padding
          element.style.padding = `${xValue}px`;
        } else {
          // When xValue is less than 0, increase element height until it reaches 100vh
          const heightIncrease = Math.min(100, 100 - xValue * 2);
          const newHeight = Math.max(0, heightIncrease);
          element.style.height = `${newHeight}vh`;
        }
      }
    };

    const onResize = () => {
      setElementHeight(element.offsetHeight);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [elementHeight]);

  return (
    <div id='wrap'>
      <div id='main' className='h-[100vh] bg-adastra-light-blue'>
        <div className='bg-adastra-dark-blue rounded-2xl h-[90vh]'>
          <div className='flex h-[70vh] justify-center items-center my-auto'>
            <Image src="/download.png" width={1000} height={500} />
          </div>
            <div className='flex'>
              <div className='flex flex-col ml-[25rem] w-[30vw]'>
                <Image src="./scrool.svg" width={70} height={50} className='animate-bounce' />
                <div className='m-[35px] font-bold'>
                  <p className='text-adastra-light-blue'>|</p>
                  <p className='text-adastra-light-blue'>|</p>
                  <p className='text-adastra-light-blue'>|</p>
                  <p className='text-adastra-dark-blue'>|</p>
                  <p className='text-adastra-dark-blue'>|</p>
                  <p className='text-adastra-dark-blue'>|</p>
                </div>
              </div>
              <div className='flex my-auto mx-auto'> 
                <FaInstagram className='text-[4rem] m-4 text-adastra-light-blue' />
                <FaTwitter className='text-[4rem] m-4 text-adastra-light-blue' />
                <FaLinkedin className='text-[4rem] m-4 text-adastra-light-blue' />
              </div>
            </div>
        </div>
        <div className='absolute top-[96vh] left-[35%] text-4xl font-bold text-adastra-dark-blue '>To The Stars Through HardShip 🚀</div>
      </div>
    </div>
  );
};

export default Hero;
