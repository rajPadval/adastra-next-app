import React from 'react'

const Home_Events = () => {
    return (
        <div>
            <div className='flex justify-evenly'>
                <div>
                    <div className='w-[20rem] h-[20rem] bg-adastra-light-blue rounded-lg rotate-[-10deg]'>
                        <h1>hello</h1>
                    </div>
                </div>
                <div className='my-auto'>
                    <h1 className='text-[2rem]'>Events</h1>
                    <span className='text-[1.25rem]'>GET UPDATED WITH ONGOING AND UPCOMNG EVENTS OF THE CLUB</span><br />
                    <button className='w-[160px] h-[60px] border-[2px] border-adastra-light-blue rounded-lg hover:bg-adastra-light-blue duration-500 text-[1.25rem] my-[2rem]'>Explore Blogs</button>
                </div>
            </div>
        </div>
    )
}

export default Home_Events