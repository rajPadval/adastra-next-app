"use client"
import React, { useState, useEffect } from 'react';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://adastra-backend.vercel.app/api/geteventpost');
        console.log("success");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {events.map(event => (
        <div key={event._id} className='flex flex-col justify-center items-center sm:justify-evenly sm:flex-row'>
          <div className='w-[60%] h-[18rem] sm:w-[40%] sm:m-5 border-[2px] border-adastra-light-blue'></div>
          <div className='m-8 flex flex-col justify-center items-center'>
            <h1 className='text-[1.75rem] text-center'>{event.title}</h1>
            <span className='text-[0.85rem] sm:text-[1.25rem] text-center'>{event.desc}</span>
            <button onClick={()=>{location.href = event.url}} className='w-[100%] sm:w-[50%] h-[100%] border-[2px] border-adastra-light-blue rounded-lg p-[3px] m-3'>Know More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
