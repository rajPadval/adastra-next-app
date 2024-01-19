import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home_Blogs = () => {
  return (
    <div className='m-12'>
      <div className='flex sm:justify-evenly flex-col sm:flex-row justify-center'>
        <div className='sm:w-[20rem] sm:h-[20rem] w-[15rem] h-[18rem] m-6 bg-gradient-to-b from-adastra-purple to-adastra-dark-blue rounded-lg rotate-[5deg] sm:hidden p-4'>
          <Image src="/resources.jpg" width={230} height={200} className="" alt="Description" />
        </div>
        <div className='my-auto'>
          <h1 className='sm:text-[2rem] text-[1.5rem]'>Blog 1</h1>
          <span className='sm:text-[1.25rem] text-[0.75rem]'>FIND ROADMAPS, LEARNING SOURCES AND VARIOUS ARTICLES ON THINGS THAT INTERESTS!</span><br />
          <li className='list-none my-[2rem]'>
            <Link href="/" className='sm:w-[160px] sm:h-[60px] w-[8rem] h-[3rem] border-[2px] border-adastra-purple rounded-lg hover:bg-adastra-purple duration-500 sm:text-[1.25rem] text-[0.75rem] my-[2rem] sm:mt-[2.5rem] p-3'>
              Explore Blogs
            </Link>
          </li>
        </div>
        <div>
          <div className='sm:w-[17rem] sm:h-[20rem] w-[10rem] h-[13rem] bg-gradient-to-b from-adastra-purple to-transparent  rounded-lg rotate-[10deg] sm:block hidden p-4'>
            <Image src="/resources.jpg" width={230} height={200} className="" alt="Description" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Blogs;
