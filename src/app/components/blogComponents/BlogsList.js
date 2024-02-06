"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar'
import Image from 'next/image'
import Link from 'next/link';

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
      <div className='grid grid-cols-4'>

      <div class="container mx-auto p-8 mt-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden">
      <div class="relative">
        <Image src="/event.jpg" alt="Image Description" width={100} height={130} class="object-cover w-full h-48 rounded-md" />
        <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
      </div>
      <div class="mt-4">
        <h1 class="text-3xl font-bold text-white">Your Title</h1>
        <p class="text-lg text-gray-300">Your Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="mt-4 flex justify-between items-end">
        <p class="text-sm text-gray-400">Written by: <span class="font-semibold">Writer Name</span></p>
      </div>
    </div>

    <div class="container mx-auto p-8 mt-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden">
      <div class="relative">
        <Image src="/event.jpg" alt="Image Description" width={100} height={130} class="object-cover w-full h-48 rounded-md" />
        <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
      </div>
      <div class="mt-4">
        <h1 class="text-3xl font-bold text-white">Your Title</h1>
        <p class="text-lg text-gray-300">Your Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="mt-4 flex justify-between items-end">
        <p class="text-sm text-gray-400">Written by: <span class="font-semibold">Writer Name</span></p>
      </div>
    </div>
    <div class="container mx-auto p-8 mt-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden">
      <div class="relative">
        <Image src="/event.jpg" alt="Image Description" width={100} height={130} class="object-cover w-full h-48 rounded-md" />
        <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
      </div>
      <div class="mt-4">
        <h1 class="text-3xl font-bold text-white">Your Title</h1>
        <p class="text-lg text-gray-300">Your Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="mt-4 flex justify-between items-end">
        <p class="text-sm text-gray-400">Written by: <span class="font-semibold">Writer Name</span></p>
      </div>
    </div>
    <div class="container mx-auto p-8 mt-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden">
      <div class="relative">
        <Image src="/event.jpg" alt="Image Description" width={100} height={130} class="object-cover w-full h-48 rounded-md" />
        <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
      </div>
      <div class="mt-4">
        <h1 class="text-3xl font-bold text-white">Your Title</h1>
        <p class="text-lg text-gray-300">Your Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="mt-4 flex justify-between items-end">
        <p class="text-sm text-gray-400">Written by: <span class="font-semibold">Writer Name</span></p>
      </div>
    </div>
    <div class="container mx-auto p-8 mt-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden">
      <div class="relative">
        <Image src="/event.jpg" alt="Image Description" width={100} height={130} class="object-cover w-full h-48 rounded-md" />
        <div class="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
      </div>
      <div class="mt-4">
        <h1 class="text-3xl font-bold text-white">Your Title</h1>
        <p class="text-lg text-gray-300">Your Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="mt-4 flex justify-between items-end">
        <p class="text-sm text-gray-400">Written by: <span class="font-semibold">Writer Name</span></p>
      </div>
    </div>

      </div>
    )
}

export default BlogsList