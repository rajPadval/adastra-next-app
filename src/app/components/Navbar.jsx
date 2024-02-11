"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ExtendedNav from "./ExtendedNav";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav className="flex justify-between lg:justify-end items-center backdrop-blur-sm py-4 px-4 gap-16 shadow-md bg-white bg-opacity-5 fixed top-0 right-0 left-0 z-20">
      <div className="hidden lg:flex gap-8 ">
        <li className="list-none text-xl font-thin cursor-pointer hidden lg:block">
          HOME
        </li>
        <li className="list-none text-xl font-thin cursor-pointer hidden lg:block">
          EVENTS
        </li>
        <li className="list-none text-xl font-thin cursor-pointer hidden lg:block">
          MORE
        </li>
      </div>
      <span className="font-bebas  flex justify-center items-center gap-3">
        <Image
          width={40}
          height={40}
          src="/logo.png"
          className="w-[30px] lg:w-[40px] "
        />
        <li className="list-none text-3xl lg:text-5xl">AD ASTRA</li>
      </span>
      <GiHamburgerMenu
        className="text-3xl cursor-pointer block lg:hidden"
        onClick={() => {
          setToggleNav(true);
          console.log(toggleNav);
        }}
      />
      <ExtendedNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </nav>
  );
};

export default Navbar;
