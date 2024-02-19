"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

const Blogpost = () => {
  const { id } = useParams();
  console.log("Id of the blog is : ", id);

  const [blogDetail, setBlogDetail] = useState({});

  const getBlogDetails = useCallback(async () => {
    const res = await axios.get(`/api/blog/get/${id}`);
    const data = await res.data;
    console.log(data.blog);
    setBlogDetail(data.blog);
  }, [blogDetail]);

  useEffect(() => {
    getBlogDetails();
  }, []);

  return (
    <section className="mx-auto  lg:w-[60vw] bg-white bg-opacity-5 backdrop-blur-md p-5 mb-24 mt-36 flex flex-col">
      <h2 className="font-bebas text-4xl text-center mt-10">
        {blogDetail.title}
      </h2>
      <Image
        src={blogDetail.thumbnail}
        alt={blogDetail.title}
        width={500}
        height={300}
        className=" object-center rounded-md mx-auto my-10"
      />
      <p dangerouslySetInnerHTML={{ __html: blogDetail.content }} className="font-montserrat"></p>
    </section>
  );
};

export default Blogpost;
