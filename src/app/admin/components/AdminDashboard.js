"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminNavbar from "./AdminNavbar";
// import Members from "./Members";
import CreateBlogs from "./CreateBlogs";
import CreateEvents from "./CreateEvents";
import Messages from "./Messages";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { setSideToggle } from "@/redux/slices/navSlice";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const Router = useRouter();

  const sideToggle = useSelector((state) => state.nav.sideToggle);
  const tab = useSelector((state) => state.nav.tab);

  return (
    <div className="flex w-screen h-[100vh] overflow-x-hidden scroll-smooth">
      <AdminNavbar />
      <div className="border-lg w-fit flex flex-col">
        <div className={` p-3`}>
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={() => dispatch(setSideToggle(!sideToggle))}
          />
        </div>

        {/* content of main dashboard */}
        {/* <div>{tab == "Members" ? <Members /> : <CreateBlogs />}</div> */}
        <div>
          {tab == "Events" ? (
            <CreateEvents />
          ) : tab == "Blogs" ? (
            <CreateBlogs />
          ) : tab == "Messages" ? (
            <Messages />
          ) : (
            <CreateBlogs />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
