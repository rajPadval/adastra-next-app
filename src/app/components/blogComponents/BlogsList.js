"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar'
import Image from 'next/image'

const BlogsList = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://adastra-backend.vercel.app/api/getblogpost');
          console.log("success");
          const data = await response.json();
          setBlogs(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div className='m-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
            {blogs.map(blog => (
                <div className='flex flex-col items-center  m-5'>
                    <div>
                        <Image className='m-10 z-0' src="/event.jpg" width={200} height={100} />
                    </div>
                    <div className='w-[18rem] h-[20rem] border-[2px] border-adastra-purple m-8 p-3 bg-gradient-to-t from-adastra-purple to-[#ffffff00] absolute z-[1]'>
                        <div className='w-[100%] absolute left-[1rem] mt-[10rem]'>
                            <h1 className='text-[1.5rem] w-[16rem] h-[6.5rem] overflow-y-hidden'>{blog.title}</h1>
                            <h2 className='text-[0.85rem] absolute mt-[0.45rem] left-[10rem] w-[7rem]'>- {blog.creator}</h2>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default BlogsList