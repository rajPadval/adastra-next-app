"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="items-center sm:justify-between py-2 px-3 w-[80vw] m-6  rounded-md border-2 border-[black] bg-adastra-dark-blue shadow-[0px_3px_0px_3px_black] fixed xl:left-[10rem] lg:left-[6rem] md:left-[4rem] sm:left-[4rem] top-[0rem] z-10">
      <div className="p-3 flex justify-between">
        <div className="flex ">
          <Image src="/download.png" width={40} height={40} className="" />
          <span className="sm:text-4xl text-2xl ml-5 font-Logo">AdAstra</span>
        </div>
        <div className="text-xl flex gap-4 hidden sm:block font-Normal-Text mt-2">
          <Link href="/" className="text-adastra-blue mx-2 text-[2rem] hover:text-[1.40rem] duration-200">
            Home
          </Link>
          <Link href="/pages/events" className="text-adastra-blue mx-2 text-[2rem] hover:text-[1.40rem] duration-200">
            Events
          </Link>
          <Link href="/pages/blogs" className="text-adastra-blue mx-2 text-[2rem] hover:text-[1.40rem] duration-200">
            Blogs
          </Link>
          <Link href="/pages/about" className="text-adastra-blue mx-2 text-[2rem] hover:text-[1.40rem] duration-200">
            About
          </Link>
          <Link href="/pages/login" className="text-adastra-blue mx-2 text-[2rem] hover:text-[1.40rem] duration-200">
            Login
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            className="toggle flex flex-col leading-[10px] text-[3rem]"
            onClick={toggleMobileMenu}
          >
            <span>--</span>
            <span>--</span>
            <span>-</span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden">
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
