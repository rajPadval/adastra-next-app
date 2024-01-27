"use client";
import React from "react";
import AdminDashboard from "../../components/AdminDashboard";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const page = () => {
  return (
    <div>
      <AdminDashboard />
    </div>
  );
};

export default page;
