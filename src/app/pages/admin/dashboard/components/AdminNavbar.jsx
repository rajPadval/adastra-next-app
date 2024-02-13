"use client";
import React from "react";
import { MdEventAvailable } from "react-icons/md";
import { BsJournalText } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "@/redux/slices/navSlice";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.nav.tab);

  return (
    <div className="w-[75vw] lg:w-fit mx-auto h-fit lg:h-full flex  lg:flex-col gap-8 justify-center items-center fixed lg:top-0 left-0 right-0 lg:right-full  bottom-5  backdrop-blur-2xl  rounded-lg px-5 py-2 border lg:border-none border-r-zinc-600 bg-white bg-opacity-5 z-30">
      <div className="flex flex-col justify-between items-center ">
        <MdEventAvailable
          className={`text-3xl lg:text-5xl hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer ${
            tab === "CreateEvent" && "text-purple-500"
          }`}
          title="Events"
          onClick={() => dispatch(setTab("CreateEvent"))}
        />
      </div>
      <div className="flex flex-col justify-between items-center ">
        <BsJournalText
          className={`text-3xl lg:text-4xl hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer ${
            tab === "CreateBlog" && "text-purple-500"
          } `}
          title="Blogs"
          onClick={() => dispatch(setTab("CreateBlog"))}
        />
      </div>
      <div className="flex flex-col justify-between items-center ">
        <FaUsersCog
          className={` text-4xl lg:text-5xl hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer  ${
            tab === "ManageMembers" && "text-purple-500"
          }`}
          title="Members"
          onClick={() => dispatch(setTab("ManageMembers"))}
        />
      </div>
    </div>
  );
};

export default AdminNavbar;
