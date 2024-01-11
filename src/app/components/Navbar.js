import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-3 w-[80vw]  mx-auto rounded-md border-2  my-10">
      <div className="flex ">
        <Image src="/rocket2.png" width={40} height={40} className="" />
        <span className="text-4xl">AdAstra</span>
      </div>
      <div className="text-xl flex gap-4">
        <Link href="/" className="text-adastra-blue">Home</Link>
        <Link href="/" className="text-adastra-blue">Events</Link>
        <Link href="/" className="text-adastra-blue">Blogs</Link>
        <Link href="/" className="text-adastra-blue">About</Link>
        <Link href="/" className="text-adastra-blue">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
