"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {

  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post("/api/auth/login", {
        email, password
      });
      const data = await res.data;
      if (data.success) {
        toast.success(data.message)
        setEmail("")
        setPassword("")
        router.push("/")
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md ">
        <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4 bg-adastra-light-blue" onSubmit={loginUser}>
          <div className="text-gray-800 text-2xl flex justify-center  border-b-2 border-adastra-dark-blue py-2 mb-4">
            Login
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  text-adastra-dark-blue focus:shadow-outline"
              name="email"
              v-model="form.email"
              type="email"
              required
              autofocus
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none 
              text-adastra-dark-blue focus:shadow-outline"
              v-model="form.password"
              type="password"
              placeholder="Password"
              name="password"
              required
              autocomplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 rounded text-white inline-block shadow-lg bg-adastra-dark-blue focus:bg-blue-700"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="text-xs flex gap-2 mt-2">
            <span>Or</span>
            <Link
              href="/pages/signup"
              className="text-adastra-dark-blue hover:underline"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
