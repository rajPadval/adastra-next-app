"use client"
import React from "react";
import CreateEvent from "./components/CreateEvent";
import CreateBlog from "./components/CreateBlog";
import { useSelector } from "react-redux";
import ManageMembers from "./components/ManageMembers";

const Dashboard = () => {
  const page = useSelector((state) => state.nav.tab);
  return (
    <div>
      {(() => {
        switch (page) {
          case "CreateEvent":
            return <CreateEvent />;
          case "CreateBlog":
            return <CreateBlog />;
          case "ManageMembers":
            return <ManageMembers />;
          default:
            return <ManageMembers />;
        }
      })()}
    </div>
  );
};

export default Dashboard;
