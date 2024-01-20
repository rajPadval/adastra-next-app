"use client"

import React, { useEffect, useState } from "react";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import { Routes, Route } from "react-router-dom";

const Admin = () => {

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(localStorage.getItem("isAdminAuth"));
  }
  , []);
  return (
    <>
    <Routes>
    <Route element={auth ? <AdminDashboard /> : <AdminLogin />} path={auth ? "dashboard" : "login"}/>
    </Routes>
        
    </>
  )
};

export default Admin;
