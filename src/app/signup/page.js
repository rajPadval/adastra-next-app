"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const [phone, setPhone] = useState(`+${91} `);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async (e) => {
    e.preventDefault();
    try {
      if (!(fName && email)) {
        toast.error("Please enter required fields");
      } else {
        if (fName && email) {
          if (fName.length < 3) {
            toast.error("Please enter valid name");
          } else {
            const newPhone = phone.replace("+91", "");
            const number = Number(newPhone);
            const phoneStr = newPhone.toString();
            const newPhoneStr = phoneStr.trim();
            if (
              isNaN(number) ||
              number.length < 10 ||
              number.length > 10 ||
              (newPhoneStr.charAt(0) != "6" &&
                newPhoneStr.charAt(0) != "7" &&
                newPhoneStr.charAt(0) != "8" &&
                newPhoneStr.charAt(0) != "9") == true
            ) {
              toast.error("Please enter a valid phone number");
            } else {
              if (!email.includes("@") || !email.includes(".")) {
                toast.error("Plese enter a valid email");
              } else {
                const res = await axios.post("/api/auth/signup", {
                  fName,
                  lName,
                  email,
                  phone,
                  password,
                });

                const data = await res.data;
                console.log(data)
                if (data.success) {
                  toast.success(data.message);
                } else {
                  toast.error(data.message);
                }
              }
            }
          }
        } else {
          toast.error("Some error occured");
        }
      }
      e.reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md ">
        <form
          className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4 bg-adastra-light-blue"
          onSubmit={signupUser}
        >
          <div className="text-gray-800 text-2xl flex justify-center  border-b-2 border-adastra-dark-blue py-2 mb-4">
            Signup
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              for="fname"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  text-adastra-dark-blue focus:shadow-outline"
              name="fname"
              type="text"
              required
              autofocus
              placeholder="First Name"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              for="lname"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  text-adastra-dark-blue focus:shadow-outline"
              name="lname"
              type="text"
              required
              autofocus
              placeholder="Last Name"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              for="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  text-adastra-dark-blue focus:shadow-outline"
              name="phone"
              type="tel"
              required
              autofocus
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
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
              Sign Up
            </button>
          </div>
          <div className="text-xs flex gap-2 mt-2">
            <span>Or</span>
            <Link
              href="/login"
              className="text-adastra-dark-blue hover:underline"
            >
              Login with existing account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
