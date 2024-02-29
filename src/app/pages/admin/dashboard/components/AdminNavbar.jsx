"use client";
import React, { useCallback } from "react";
import { MdEventAvailable } from "react-icons/md";
import { BsJournalText } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "@/redux/slices/navSlice";
import { HiOutlineLogout } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.nav.tab);

  const router = useRouter();

  const handleLogout = useCallback(async () => {
    const res = await axios.get("/api/auth/logout");
    const data = await res.data;
    if (data.success) {
      toast.success(data.message);
      router.push("/pages/admin");
    } else {
      toast.error(data.message);
    }
  }, []);

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
      <div>
        <HiOutlineLogout
          onClick={handleLogout}
          className="text-3xl lg:text-4xl hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer hover:text-red-500 "
          title="Logout"
        />
      </div>
    </div>
  );
};

export default AdminNavbar;
