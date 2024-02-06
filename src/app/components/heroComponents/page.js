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

    document.getElementById("slide-logo").style.transition = 'all 0.5s ease-in-out';
    document.getElementById("slide-text").style.transition = 'all 0.5s ease-in-out';

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [elementHeight]);

  return (
    <div id='wrap'>
      <div id='main' className='h-[100vh] w-[100%] bg-adastra-light-blue sm:p-[55px] p-[45px]'>
        <div className='bg-adastra-dark-blue rounded-2xl h-[90vh] border-[3px] border-adastra-white'>
          <div className='flex h-[70vh] justify-between items-center my-auto'>
            <div className='flex md:flex-row flex-col justify-center items-center md:mx-28'>
              <Image src="/logo.png" width={300} height={500} className='w-[10rem] md:w-[20rem]' id='slide-logo'/>
              <div className='flex flex-col justify-center items-center' id='slide-text'>
              <h1 className='sm:text-9xl text-4xl font-bold text-adastra-light-blue'>AdAstra</h1>
              <p className='md:text-[1.4rem] md:tracking-[0.3rem] text-[0.6rem] font-Logo'>To The Stars Throuugh HardShip</p>
              </div>
            </div>
            <div className=''>
              <Image src="/pinkStar10x.png" className='animate-bounce duration-[5s] absolute right-[20rem] top-[18rem] opacity-[60%] lg:w-[3rem] xl:w-[8rem] 2xl:top-[25rem] w-[2rem] lg:top-[20rem] md:visible' width={150} height={100} />
              <Image src="/blueStar10x.png" className='animate-bounce duration-[5s] absolute right-[13rem] top-[26rem] opacity-[60%] lg:w-[3rem] xl:w-[8rem] 2xl:top-[33rem] w-[2rem] lg:top-[27rem] md:visible' width={160} height={100} />
              <Image src="/greenStar10x.png" className='animate-bounce duration-[5s] absolute right-[24rem] top-[31rem] opacity-[60%] lg:w-[5rem] xl:w-[8rem] 2xl:top-[35rem] w-[2rem] lg:top-[35rem] md:visible' width={130} height={100} />
            </div>
          </div>
          <div className='flex sm:flex-row'>
            <div className='flex flex-col sm:ml-[25rem] ml-[3rem] w-[30vw]'>
              <div>
                <Image src="./scrool.svg" width={70} height={50} className='animate-bounce sm:w-[4em] w-[3em]' />
              </div>
              <div className='sm:m-[35px] m-[20px] font-bold'>
                <p className='text-adastra-light-blue'>|</p>
                <p className='text-adastra-light-blue'>|</p>
                <p className='text-adastra-light-blue'>|</p>
                <p className='text-adastra-dark-blue'>|</p>
                <p className='text-adastra-dark-blue'>|</p>
                <p className='text-adastra-dark-blue'>|</p>
              </div>
            </div>
            <div className='flex sm:my-0 my-8 sm:mx-auto md:flex-row flex-col'>
              <a href='https://instagram.com' className=' hover:text-adastra-purple hover:text-[1.6rem]'><FaInstagram className='sm:text-[4rem] text-[1.5rem] sm:m-4 m-2 text-adastra-light-blue' /></a>
              <FaTwitter className='sm:text-[4rem] text-[1.5rem] sm:m-4 m-2 text-adastra-light-blue hover:text-adastra-purple hover:text-[1.6rem]' />
              <FaLinkedin className='sm:text-[4rem] text-[1.5rem] sm:m-4 m-2 text-adastra-light-blue hover:text-adastra-purple hover:text-[1.6rem]' />
            </div>
          </div>
        </div>
        <div className='absolute top-[96vh] left-[35%] sm:text-4xl text-xl font-bold text-adastra-dark-blue '>To The Stars Through HardShip 🚀</div>
      </div>
    </div>
  );
};

export default Hero;
