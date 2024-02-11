import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center backdrop-blur-sm py-4 px-4 gap-16 shadow-md bg-white bg-opacity-5 ">
      <div className="flex gap-8">
        <li className="list-none text-xl font-thin cursor-pointer ">HOME</li>
        <li className="list-none text-xl font-thin cursor-pointer ">EVENTS</li>
        <li className="list-none text-xl font-thin cursor-pointer ">MORE</li>
      </div>
      <span className="font-bebas  flex justify-center items-center gap-3">
        <Image width={40} height={40} src="/logo.png" />
        <li className="list-none text-5xl">AD ASTRA</li>
      </span>
    </nav>
  );
};

export default Navbar;
