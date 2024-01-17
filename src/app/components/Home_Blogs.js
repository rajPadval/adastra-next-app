import React from 'react'

const Home_Blogs = () => {
    return (
        <div className='m-12'>
            <div className='flex sm:justify-evenly flex-col sm:flex-row justify-center'>
                <div className='sm:w-[20rem] sm:h-[20rem] w-[15rem] h-[18rem] m-6 bg-adastra-purple rounded-lg rotate-[5deg] sm:hidden'>
                    <h1>hello</h1>
                </div>
                <div className='my-auto'>
                    <h1 className='sm:text-[2rem] text-[1.5rem]'>Blog 1</h1>
                    <span className='sm:text-[1.25rem] text-[0.75rem]'>GET UPDATED WITH ONGOING AND UPCOMNG EVENTS OF THE CLUB</span><br />
                    <button className='sm:w-[160px] sm:h-[60px] w-[8rem] h-[3rem] border-[2px] border-adastra-purple rounded-lg hover:bg-adastra-purple duration-500 sm:text-[1.25rem] text-[0.75rem] my-[2rem]'>Explore Blogs</button>
                </div>
                <div>
                    <div className='sm:w-[20rem] sm:h-[20rem] w-[10rem] h-[13rem] bg-adastra-purple rounded-lg rotate-[10deg] sm:block hidden'>
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_Blogs