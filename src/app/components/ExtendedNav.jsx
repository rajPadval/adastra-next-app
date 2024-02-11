"use client";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

const ExtendedNav = ({ toggleNav, setToggleNav }) => {
  return (
    <div
      className={`${
        !toggleNav ? "translate-x-full" : "translate-x-0"
      } fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-95 h-screen z-40 transition-all ease-linear duration-500 flex justify-center items-center`}
    >
      <MdOutlineClose
        className="text-3xl text-white cursor-pointer absolute top-5 right-4 lg:hidden"
        onClick={() => {
          setToggleNav(false);
        }}
      />
      <div className="flex flex-col gap-8 ">
        <Link
          href="/"
          className="list-none text-xl text-white  cursor-pointer lg:hidden block"
        >
          HOME
        </Link>
        <Link
          href="/pages/about"
          className="list-none text-xl text-white  cursor-pointer lg:hidden block"
        >
          ABOUT
        </Link>
        <Link
          href="/events"
          className="list-none text-xl text-white  cursor-pointer lg:hidden block"
        >
          EVENTS
        </Link>
      </div>
    </div>
  );
};

export default ExtendedNav;
