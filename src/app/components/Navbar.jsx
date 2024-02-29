"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ExtendedNav from "./ExtendedNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex justify-between lg:justify-end items-center backdrop-blur-sm py-4 px-4 gap-16 shadow-md bg-white bg-opacity-5 fixed top-0 right-0 left-0 z-20">
      <div className="hidden lg:flex gap-8 ">
        <Link
          href="/"
          className={`list-none text-xl font-thin cursor-pointer hidden lg:block transition-all ease-in-out duration-500  hover:scale-125 `}
        >
          HOME
        </Link>
        <Link
          href="/pages/about"
          className={`list-none text-xl font-thin cursor-pointer hidden lg:block transition-all ease-in-out duration-500  hover:scale-125 ${
            pathname === "/pages/about" && "font-semibold"
          }`}
        >
          ABOUT
        </Link>
        <Link
          href="/pages/events"
          className={`list-none text-xl font-thin cursor-pointer hidden lg:block transition-all ease-in-out duration-500  hover:scale-125 ${
            pathname === "/pages/events" && "font-semibold"
          }`}
        >
          EVENTS
        </Link>
        <Link
          href="/pages/blogs"
          className={`list-none text-xl font-thin cursor-pointer hidden lg:block transition-all ease-in-out duration-500  hover:scale-125 ${
            pathname === "/pages/blogs" && "font-semibold"
          }`}
        >
          BLOGS
        </Link>
      </div>
      <span className="font-bebas  flex justify-center items-center gap-3">
        <Image
          width={40}
          height={40}
          src="/logo.png"
          className="w-[30px] lg:w-[40px] "
        />
        <li className="list-none text-3xl lg:text-5xl animate-pulse">
          AD ASTRA
        </li>
      </span>
      <GiHamburgerMenu
        className="text-3xl cursor-pointer block lg:hidden"
        onClick={() => {
          setToggleNav(true);
        }}
      />
      <ExtendedNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
    </nav>
  );
};

export default Navbar;
