import React from "react";
import { MdDateRange, MdAccessTime } from "react-icons/md";

const EventComp = ({ title, desc, type, date, time, url }) => {
  return (
    <div className="flex flex-col md:flex-row border md:w-[65vw] w-[85vw] bg-white bg-opacity-10  backdrop-blur-md  rounded-2xl">
      <div className="w-[60vw] md:mx-20 mx-12 flex flex-col justify-center items-center my-8 font-montserrat">
        <h2 className="md:text-4xl text-xl font-bold text-start mb-4 font-bebas">
          {title}
        </h2>
        <p className="md:text-xl text-md text-start font-thin">{desc}</p>
        <span className="md:text-xl text-md text-start mt-3 font-thin">
          Type : <span>{type}</span>
        </span>
      </div>

      <div className="md:w-[30vw] md:mb-0 overflow-hidden py-3 md:py-0 rounded-b-2xl md:rounded-none md:rounded-r-2xl flex flex-col justify-center items-center backdrop-blur-3xl hover:-skew-y-6 hover:rounded-none transition-all font-montserrat">
        <div className="w-[150px] mb-2 flex gap-2 justify-start text-start items-center ">
          <MdDateRange className="text-xl font-bold" />
          <span className="w-fit">: {date}</span>
        </div>
        <div className="w-[150px] mb-2 flex gap-2 justify-start text-start items-start">
          <MdAccessTime className="text-xl font-bold" />
          <span>: {time}</span>
        </div>

        <a
          href={url}
          target="_blank"
          className=" py-2 px-3 border border-white font-bold hover:bg-white  hover:text-black transition-all w-fit rounded-md"
        >
          Get in <span className="ml-2">{">"}</span>
        </a>
      </div>
    </div>
  );
};

export default EventComp;
