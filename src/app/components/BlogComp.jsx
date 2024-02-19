import Image from "next/image";
import React from "react";
import Link from "next/link";

const BlogComp = ({ title, thumbnail, _id }) => {
  return (
    <div className="p-3 backdrop-blur-md bg-white bg-opacity-10 w-fit rounded-lg flex flex-col gap-2 justify-center items-center">
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={300}
        className="w-[300px] h-[250px] object-center rounded-md "
      />
      <h3 className="font-bebas text-2xl text-center">{title}</h3>
      <Link
        href={`/pages/blogs/${_id}`}
        className="bg-white bg-opacity-60 w-full text-lg font-montserrat rounded-md py-1 text-black hover:bg-opacity-100 transition-all duration-300 ease-in-out text-center"
      >
        Let's Read
      </Link>
    </div>
  );
};

export default BlogComp;
