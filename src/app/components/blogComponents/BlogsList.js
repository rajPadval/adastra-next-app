import React from 'react'
import Navbar from '../Navbar'
import Image from 'next/image'

const BlogsList = () => {
    return (
        <div>
                <Navbar />
            <div className='grid grid-cols-2'>
                <div className='flex flex-col items-center  m-5'>
                    <div>
                        <Image className='m-10 z-0' src="/event.jpg" width={200} height={100} />
                    </div>
                    <div className='w-[18rem] h-[20rem] border-[2px] border-adastra-purple m-8 p-3 bg-gradient-to-t from-adastra-purple to-[#ffffff00] absolute z-[1]'>
                        <div className='w-[100%] absolute left-[1rem] mt-[10rem]'>
                            <h1 className='text-[1.5rem] w-[16rem] h-[6.5rem]'>This is Title Of the Blog</h1>
                            <h2 className='text-[0.85rem] absolute mt-[0.45rem] left-[10rem] w-[7rem]'>- Author</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsList