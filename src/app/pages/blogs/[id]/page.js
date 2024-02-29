"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { RingLoader } from "react-spinners";
import Link from "next/link";
import { SyncLoader } from "react-spinners";

const Blogpost = () => {
  const { id } = useParams();
  console.log("Id of the blog is : ", id);

  const [blogDetail, setBlogDetail] = useState([]);

  useEffect(() => {
    getBlogDetails();
  }, []);

  const getBlogDetails = async () => {
    const res = await axios.get(`/api/blog/get/${id}`);
    const data = await res.data;
    console.log("Blog details are : ", data.blog);
    setBlogDetail(data.blog);
  };

  const getDate = (date) => new Date(date).toLocaleDateString();

  return (
    <>
      {" "}
      {blogDetail?.content?.length === 0 ||
      blogDetail?.content?.length === null ||
      blogDetail?.content?.length === undefined ? (
        <section className="mx-auto  lg:w-[60vw] mb-24 mt-36 flex justify-center items-center h-[60vh]">
          <SyncLoader color="#ffffff" />
        </section>
      ) : (
        <section className="mx-auto  lg:w-[60vw] bg-white lg:bg-black lg:bg-opacity-15 bg-opacity-5 backdrop-blur-md p-5 mb-24 mt-36 flex flex-col">
          {" "}
          <h2 className="font-bebas text-4xl text-center mt-10">
            {blogDetail?.title}
          </h2>
          <Image
            src={blogDetail?.thumbnail}
            alt={blogDetail?.title}
            width={500}
            height={300}
            priority={true}
            className=" object-center rounded-md mx-auto my-10"
          />
          <p
            dangerouslySetInnerHTML={{ __html: blogDetail?.content }}
            className="font-montserrat"
          ></p>
          <span className="mt-10">
            Published on: {getDate(blogDetail?.createdAt)} by{" "}
            <Link
              href={`${blogDetail?.linkedin}`}
              target="_blank"
              className="font-semibold"
              title={`Visit ${blogDetail?.creator}'s profile`}
            >
              {blogDetail?.creator}
            </Link>
          </span>
        </section>
      )}
    </>
  );
};

export default Blogpost;
