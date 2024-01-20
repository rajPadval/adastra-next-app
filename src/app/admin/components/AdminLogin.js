"use client"

import React, { useState } from "react";
// import "../App.css";
import { useNavigate } from "react-router-dom";
const AdminLogin = ({ isAdminAuth, encryptData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const adminLogin = () => {
    const cemail = process.env.REACT_APP_ADMIN_EMAIL;
    const cpassword = process.env.REACT_APP_ADMIN_PASSWORD;
    if (email === cemail && password === cpassword) {
      isAdminAuth(true);
      const encryptedStatus = encryptData(true);
      localStorage.setItem("isAdminAuth", encryptedStatus);
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center text-center h-[100vh] my-auto bg-purple-700">
        <form
          method="post"
          className="flex w-[100vw] md:w-[40vw] flex-col  gap-5 justify-center items-center my-auto rounded-lg  "
          data-aos="zoom-out-up"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Admin Email"
            className="py-2 px-3 md:px-5 rounded-md  outline-none mt-8 text-2xl placeholder:text-lg text-center "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Admin Password"
            className="py-2 px-3 md:px-5 rounded-md outline-none text-2xl placeholder:text-lg text-center  
          "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border border-purple-500 text-purple-500 font-bold hover:bg-purple-500 rounded-md shadow-md hover:text-black newfont text-2xl px-5 py-1  
      my-6 transition-all"
            onClick={adminLogin}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
