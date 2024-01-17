import React from 'react'

const Home_Events = () => {
    return (
        <div className='m-12'>
            <div className='flex sm:justify-evenly flex-col sm:flex-row justify-center'>
                <div>
                    <div className='sm:w-[20rem] sm:h-[20rem] w-[15rem] h-[18rem] m-6 bg-adastra-light-blue rounded-lg rotate-[5deg] '>
                        <h1>hello</h1>
                    </div>
                </div>
                <div className='my-auto flex flex-col mx-[10px]'>
                    <h1 className='sm:text-[2rem] text-[1.5rem]'>Events</h1>
                    <div><span className='sm:text-[1.25rem] text-[0.75rem]'>GET UPDATED WITH ONGOING AND UPCOMNG EVENTS OF THE CLUB</span><br />
                        <button className='sm:w-[160px] sm:h-[60px] w-[8rem] h-[3rem] border-[2px] border-adastra-light-blue rounded-lg hover:bg-adastra-light-blue duration-500 sm:text-[1.25rem] text-[0.75rem] my-[2rem]'>Explore Blogs</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_Events