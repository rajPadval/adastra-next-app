"use client";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post("/api/auth/admin-login", {
        email,
        password,
      });
      const data = await res.data;
      if (data.success) {
        toast.success(data.message);
        router.push("/pages/admin/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  });

  return (
    <section className="w-full h-[86vh] flex justify-center items-center">
      <form
        className="flex flex-col gap-4 py-5 lg:py-8 px-10 lg:px-16 backdrop-blur-md rounded-2xl lg:rounded-3xl   font-montserrat border border-gray-500 -mb-12 lg:mt-24"
        onSubmit={handleLogin}
      >
        <h3 className="font-thin text-lg">Ad Astra Admin</h3>
        <h2 className="text-xl font-montserrat font-bold ">LOGIN</h2>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-xs font-thin">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="username@gmal.com"
            autoComplete="off"
            className="rounded-md px-3 py-2 text-xs lg:w-[20vw] text-gray-500 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-xs font-thin">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="********"
            className="rounded-md px-3 py-2 text-xs lg:w-[20vw] text-gray-500 outline-none"
          />
        </div>
        <span className="text-[0.5rem] font-thin cursor-pointer hover:underline">
          FORGOT PASSWORD?
        </span>
        <button className="bg-[#0F1B27] text-xs py-2 rounded-md font-thin outline-none">
          SIGN IN
        </button>
      </form>
    </section>
  );
};

export default Admin;
