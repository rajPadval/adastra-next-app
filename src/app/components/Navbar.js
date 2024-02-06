"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const ele = document.getElementById('nav');
  
      if (ele) {
        const scrolled = window.scrollY > 30;
        if (scrolled !== isScrolled) {
          setScrolled(scrolled);
        }
        if (scrolled) {
          ele.classList.add('border-2', 'border-[black]', 'shadow-[0px_3px_0px_3px_black]', 'top-[1.5rem]');
          ele.classList.remove('md:top-[3.4rem]')
        } else {
          ele.classList.remove('border-2', 'border-[black]', 'shadow-[0px_3px_0px_3px_black]', 'top-[1.5rem]');
          ele.classList.add('md:top-[3.4rem]')
        }
      } else {
        console.warn('Element with ID "nav" not found');
      }
    };
  
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]); 
  return (
    <nav id="nav" className="items-center sm:justify-between top-[2rem] py-2 px-3 sm:navbar md:top-[3.4rem] sm:w-[80vw] w-[60vw] m-6 rounded-md bg-adastra-dark-blue fixed xl:left-[10rem] lg:left-[6rem] md:left-[6rem] sm:left-[4rem] left-[3.2rem] z-10 duration-100">
      <div className="p-3 flex justify-between">
        <div className="flex justify-center items-center">
          <Image src="/logo.png" width={50} height={40} className="" />
          <span className="sm:text-4xl text-lg ml-5 font-Logo">AdAstra</span>
        </div>
        <div className="text-xl flex gap-4 hidden sm:block font-Normal-Text mt-2">
          <Link href="/" className="text-adastra-blue mx-2 hover:text-[2.2rem] text-[2rem] duration-200">
            Home
          </Link>
          <Link href="/pages/events" className="text-adastra-blue mx-2 hover:text-[2.2rem] text-[2rem] duration-200">
            Events
          </Link>
          <Link href="/pages/blogs" className="text-adastra-blue mx-2 hover:text-[2.2rem] text-[2rem] duration-200">
            Blogs
          </Link>
          <Link href="/pages/about" className="text-adastra-blue mx-2 hover:text-[2.2rem] text-[2rem] duration-200">
            About
          </Link>
          <Link href="/pages/login" className="text-adastra-blue mx-2 hover:text-[2.2rem] text-[2rem] duration-200">
            Login
          </Link>
        </div>
        <div className="sm:hidden text-[1.5rem]">
          <button
            className="toggle flex flex-col leading-[10px] text-[3rem]"
            onClick={toggleMobileMenu}
          >
            <span className=" text-[1.85rem]">--</span>
            <span className=" text-[1.85rem]">--</span>
            <span className=" text-[1.85rem]">-</span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="text-xl flex flex-col gap-4 m-4 z-[1]">
            <Link href="/" className="text-adastra-blue shadow-[0px_3px_0px_3px_black">
              Home
            </Link>
            <Link href="/pages/events" className="text-adastra-blue shadow-[0px_3px_0px_3px_black">
              Events
            </Link>
            <Link href="/pages/blogs" className="text-adastra-blue shadow-[0px_3px_0px_3px_black">
              Blogs
            </Link>
            <Link href="/pages/about" className="text-adastra-blue shadow-[0px_3px_0px_3px_black">
              About
            </Link>
            <Link href="/pages/login" className="text-adastra-blue shadow-[0px_3px_0px_3px_black">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
