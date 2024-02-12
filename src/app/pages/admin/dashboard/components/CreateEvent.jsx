"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const CreateEvent = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvent();
  }, [events]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState("Seminar");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // function to get event
  const getEvent = async () => {
    const response = await fetch(
      "https://adastra-backend.vercel.app/api/geteventpost"
    );
    const data = await response.json();
    await setEvents(data);
  };

  const createEvent = async () => {
    const data = { title, desc, url, type, date, time };
    console.log(data);
    if (title.length < 3) {
      await toast.error("Please enter a valid title");
    } else {
      if (desc.length < 10) {
        await toast.error("Description should be more than 50 words");
      } else {
        if (!type) {
          await toast.error("Please reselect the type");
        } else {
          // const res = await fetch(
          //   "http://localhost:8000/api/createeventpost",
          const res = await fetch(
            "https://adastra-backend.vercel.app/api/createeventpost",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          await res.json();
          await toast.success("Blog created sucessfully");
          await setTitle("");
          await setDesc("");
          await setUrl("");
          await setType("");
          await setDate("");
          await setTime("");
        }
      }
    }
  };
  const discardEvent = () => {
    setTitle("");
    setDesc("");
    setUrl("");
    setType("");
    setDate("");
    setTime("");
  };

  const deleteEvent = async (eventId) => {
    // console.log(`http://localhost:8000/api/deleteevent/${eventId}`);
    const res = await fetch(
      `https://adastra-backend.vercel.app/api/deleteevent/${eventId}`,
      // `http://localhost:8000/api/deleteevent/${eventId}`,
      {
        method: "POST",
      }
    );
    await res.json();
    await toast.success("Event removed");
  };
  return (
    <>
      <div className="w-screen font-montserrat h-fit lg:h-screen flex justify-center items-center flex-col md:flex-row gap-5 ">
        <div className="w-[90vw] md:w-[60vw] m-5 flex p-3 justify-center gap-5 flex-col shadow-md backdrop-blur-lg rounded-lg bg-white bg-opacity-5">
          <h1 className=" text-xl md:text-3xl font-bebas">
            Let's launch a new Event!
          </h1>
          <div className="flex flex-col gap-3 items-start">
            <label className="font-thin text-lg  md:text-xl">Title :</label>
            <input
              type="text"
              name=""
              id=""
              className="border-2 py-2 px-3 w-full rounded-md outline-none hover:border-purple-400  text-gray-600 text-md "
              placeholder="Enter Event Title"
              value={title}
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col gap-3 items-start">
            <label className="font-thin text-lg  md:text-xl ">
              Description :
            </label>
            <textarea
              rows={4}
              type="text"
              name=""
              id=""
              className="border-2 py-2 px-3 w-full rounded-md outline-none hover:border-purple-400 text-gray-600 text-md "
              placeholder="Enter Event's Description"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>

          <div className="flex  gap-3 items-start">
            <label className="font-thin text-lg  md:text-xl">
              Event Date :
            </label>
            <input
              type="date"
              name=""
              id=""
              className="rounded-md text-gray-600 text-md px-3"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>

          <div className="flex  gap-3 items-start">
            <label className="font-thin text-lg  md:text-xl">
              Event Time :
            </label>
            <input
              type="time"
              name=""
              id=""
              className="rounded-md text-gray-600 text-md px-3"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col gap-3 items-start">
            <label className="font-thin text-lg md:text-xl">
              Event Type :{" "}
              <select
                name="category"
                id=""
                className="font-normal outline-none rounded-md      text-gray-600 text-md  px-3"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option>Seminar</option>
                <option>Webinar</option>
                <option>Art</option>
                <option>Gaming</option>
                <option>Indusrtial Visit</option>
              </select>
            </label>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <label className="font-thin text-lg  md:text-xl">Form Link :</label>
            <input
              type="url"
              name=""
              id=""
              className="border-2 py-2 px-3 w-full rounded-md outline-none hover:border-purple-400 text-gray-600 text-md "
              placeholder="Enter The Form Url To Collect Responses"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </div>
          <hr />
          <div className="flex gap-3">
            <button
              type="submit"
              className="font-thin py-2 px-5 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all rounded-md"
              onClick={createEvent}
            >
              Create
            </button>
            <button
              type="submit"
              className="font-thin py-2 px-5 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-all rounded-md"
              onClick={discardEvent}
            >
              Discard
            </button>
          </div>
        </div>

        {/* Created events listed here */}
        <div className=" w-[90vw] md:w-[20vw] h-fit lg:h-[90vh] p-3 flex flex-col  gap-3 mb-20 lg:mb-0 lg:bg-white lg:bg-opacity-5 lg:backdrop-blur-lg rounded-lg shadow-md">
          {events.map((event, i) => {
            return (
              <div
                className="flex justify-between items-center  shadow-md  p-3 hover:scale-105 transition-all backdrop-blur-lg rounded-lg bg-white bg-opacity-5"
                key={i}
              >
                {" "}
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">
                    {event.title.substring(0, 20)}
                  </h3>
                  <div>
                    <span>{event.date}, </span>
                    <span>{event.time}</span>
                  </div>
                </div>
                <MdDelete
                  className="text-xl cursor-pointer hover:text-red-500 transition-colors hover:rotate-6"
                  post-id={event._id}
                  onClick={(e) => {
                    let postId = e.currentTarget.getAttribute("post-id");
                    deleteEvent(postId);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
