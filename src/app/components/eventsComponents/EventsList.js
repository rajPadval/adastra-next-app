import React from 'react'
import Navbar from '../Navbar'

const EventsList = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center sm:justify-evenly sm:flex-row'>
            <div className='w-[60%] h-[18rem] sm:w-[40%] sm:m-5 border-[2px] border-adastra-light-blue'></div>
            <div className='m-8 flex flex-col justify-center items-center'>
                <h1 className='text-[1.75rem] text-center'>Event 1 Title</h1>
                <span className='text-[0.85rem] text-center'>Event 1 Description This Is Demone Event Description For Developement Purpose</span>
                <button className='w-[100%] sm:w-[50%] h-[100%] border-[2px] border-adastra-light-blue rounded-lg p-[3px] m-3'>Know More</button>
            </div>
        </div>
    </div>
  )
}

export default EventsList