"use client"
import React, {useState} from 'react';
import Navbar from '../Navbar'
import { useSearchParams } from 'next/navigation';
import GET from '@/app/api/blog/get/route'

const urlQuery = () => {
  const params = useSearchParams()
  const search = params.get('id')
  return GET(search);
};
const BlogView = () => {

  const [Blog, setBlog] = useState();
  setBlog(urlQuery());

  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div className="w-[70vw] h-[100vh] bg-black flex flex-col justify-center items-center text-center">
          <div className='sm:my-[40%] sm:mt-[35rem] mt-[20rem] sm:m-4 m-10'>
            <div className='rounded-[100%] w-[25rem] h-[25rem] bg-adastra-light-blue blur-[7rem] opacity-[35%] absolute top-[15rem] z-0'></div>
            <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r sm:text-6xl from-purple-400 to-pink-600'>Title of The Blogs</h1>
            <div className='flex justify-evenly text-center m-8'>
              <span className='text-[0.85rem] font-bold'>Catagory</span>
              <span className='text-[0.95rem] font-bold'>- Raj Padval</span>
            </div>
          </div>
          <div>
            <p className='m-4 sm:m-10 sm:text-xl text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum incidunt placeat odio officiis dolor est voluptate provident voluptatibus error ab illo consequuntur quas et aperiam repellendus explicabo ullam minus fuga, distinctio iusto maxime quae saepe. Maxime vero et doloremque autem assumenda pariatur impedit est quos incidunt quas sunt aperiam possimus delectus eveniet neque, sit tempora odio quibusdam ab omnis mollitia quod. Dolores harum quaerat illo eos, eius omnis distinctio reiciendis rem, ut et dignissimos neque nobis saepe commodi eveniet.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogView