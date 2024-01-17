import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="items-center py-2 px-3 sm:w-[80vw] m-6 sm:mx-auto rounded-md border-2 border-[black] shadow-[0px_3px_0px_3px_black]">
      <div className="p-3 flex justify-between">
        <div className="flex ">
          <Image src="/download.png" width={40} height={40} className="" />
          <span className="sm:text-4xl text-2xl">AdAstra</span>
        </div>
        <div className="text-xl flex gap-4 hidden sm:block">
          <Link href="/" className="text-adastra-blue">Home</Link>
          <Link href="/" className="text-adastra-blue">Events</Link>
          <Link href="/" className="text-adastra-blue">Blogs</Link>
          <Link href="/" className="text-adastra-blue">About</Link>
          <Link href="/login" className="text-adastra-blue">Login</Link>
        </div>
        <div className="sm:hidden">
          <button className="toggle flex flex-col leading-[10px] text-[3rem]"><span>--</span><span>--</span><span>-</span></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
