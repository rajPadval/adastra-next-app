"use client";
import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import EventComp from "@/app/components/EventComp";

const Events = () => {
  const [events, setEvents] = useState([]);

  const getEvents = useCallback(async () => {
    const res = await axios.get("/api/event/get");
    const data = await res.data;
    setEvents(data.events);
  }, [events]);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-transparent h-full">
      <div className="pt-28 flex flex-col justify-center items-center ">
        <h2 className="font-bebas text-7xl  bg-gradient-to-b  from-white to-gray-800 inline-block text-transparent bg-clip-text drop-shadow-xl mx-[5vw]">
          EVENTS
        </h2>
        <p className="text-md lg:text-lg uppercase font-thin text-center mx-[5vw]">
           Events that bridge the gap between learning and doing.
        </p>
      </div>
      <div className="text-white flex flex-col gap-16 justify-center items-center  my-28">
        {events.map((event, i) => {
          return <EventComp key={i} {...event} />;
        })}
      </div>
    </section>
  );
};

export default Events;
