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
    <div className="text-white flex flex-col gap-16 justify-center items-center  my-28">
      {events.map((event, i) => {
        return <EventComp key={i} {...event} />;
      })}
    </div>
  );
};

export default Events;
