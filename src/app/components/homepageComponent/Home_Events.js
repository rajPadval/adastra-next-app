import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Home_Hero from './Home_Hero'

const Home_Events = () => {
    document.title = 'Events'
    return (
        <>
            <div className='mt-[150px] m-12 bg-adastra-dark-blue h-[60vh]'>
                <div className='flex sm:justify-evenly flex-col sm:flex-row justify-center'>
                    <div>
                        <div className='sm:w-[30rem] sm:h-[33rem] w-[15rem] h-[18rem] m-6 bg-gradient-to-b from-adastra-light-blue to-transparent rounded-lg rotate-[5deg] p-4'>
                            <Image src="/event.jpg" width={230} height={200} className="sm:w-[28rem] h-[16rem] sm:h-[33rem]" alt="Description" />
                        </div>
                    </div>
                    <div className='my-auto flex flex-col mx-[10px]'>
                        <h1 className='sm:text-[2rem] text-[1.5rem]'>Events</h1>
                        <div><span className='sm:text-[1.25rem] text-[0.75rem]'>GET UPDATED WITH ONGOING AND UPCOMNG EVENTS OF THE CLUB</span><br />
                            <li className='list-none my-[2rem]'><Link href="/" className='sm:w-[160px] sm:h-[60px] w-[8rem] h-[3rem] border-[2px] border-adastra-light-blue rounded-lg hover:bg-adastra-light-blue duration-500 sm:text-[1.25rem] text-[0.75rem] my-[2rem] sm:mt-[2.5rem] p-3'>Explore Events</Link></li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_Events