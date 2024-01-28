"use client"
import React from 'react';
import Image from 'next/image';

// Hero component
const Hero = () => {

  return (
    <div>
      <div>
        <div className='flex h-[90vh] justify-center items-center my-auto'>
          <Image src="/download.png" width={1000} height={500} />
        </div>
        <div>
          <div className='flex flex-col ml-[25rem]'>
            <p>|</p>
            <p>|</p>
            <p>|</p>
            <p>|</p>
            <p>|</p>
            <p>|</p>
          </div>
          <div>
            <p>{Blog}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
