"use client"

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const Admin = () => {

  const isAdminAuth = useSelector((state) => state.admin.isAdminAuth);
  const Router = useRouter();
  if (isAdminAuth && localStorage.getItem("isAdminAuth")) {
    Router.push("/pages/AdminDashboard");
    return null;
  } else {
    Router.push("/admin/pages");
  }

  return (
    <>        
    </>
  )
};

export default Admin;
