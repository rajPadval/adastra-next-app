"use client"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsAdminAuth } from "@/redux/slices/adminSlice";
import { useRouter } from 'next/navigation';

const AdminLogin = ({ encryptData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAdminAuth = useSelector((state) => state.admin.isAdminAuth);
  const Router = useRouter();

  const adminLogin = () => {
    const cemail = process.env.REACT_APP_ADMIN_EMAIL;
    const cpassword = process.env.REACT_APP_ADMIN_PASSWORD;

    if (email === cemail && password === cpassword) {
      dispatch(setIsAdminAuth(true));
      const encryptedStatus = encryptData(true);
      localStorage.setItem("isAdminAuth", encryptedStatus);
    } else {
      Router.push("/pages/dashboard");
    }
  };

  if (isAdminAuth && localStorage.getItem("isAdminAuth")) {
    Router.push("/pages/dashboard");
    return null;
  }
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
