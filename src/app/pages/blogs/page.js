"use client";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import BlogComp from "@/app/components/BlogComp";
import { SyncLoader } from "react-spinners";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = useCallback(async () => {
    const res = await axios.get("/api/blog/get");
    const data = await res.data;
    console.log(data.blogs);
    setBlogs(data.blogs);
  }, [blogs]);

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-transparent h-full">
      <div className="pt-28 flex flex-col justify-center items-center ">
        <h2 className="font-bebas text-7xl  bg-gradient-to-b  from-white to-gray-800 inline-block text-transparent bg-clip-text drop-shadow-xl mx-[5vw]">
          BLOGS
        </h2>
        <p className="text-md lg:text-lg uppercase font-thin text-center mx-[5vw]">
          Blogs that make to stick to the real world updates.
        </p>
      </div>

      {blogs[0]?.title.length === 0 || blogs[0]?.title.length === undefined ? (
        <div className="w-[100vw] h-[50vh] flex justify-center items-center">
          <SyncLoader color="#ffffff" />
        </div>
      ) : (
        <div className="text-white grid  lg:grid-cols-3 gap-16 justify-center items-center my-28  mx-auto lg:w-[60vw]">
          {blogs.map((blog, i) => {
            return <BlogComp key={blog._id} {...blog} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Blogs;
