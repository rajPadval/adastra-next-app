import Image from "next/image";
import React from "react";

const AboutComp = () => {
  return (
    <div className="flex justify-between items-center mx-[5vw] my-36 gap-3 ">
      <div className="flex flex-col gap-2 justify-center items-center w-[60vw]">
        <h3 className="text-4xl">What is Ad Astra?</h3>
        <p className="text-lg uppercase font-thin text-center">
          This club is a community of passionate enthusiasts, coders, and
          programmers who share a common goal of fostering knowledge and
          empowering the community. We strive to lead events and provide
          opportunities.
        </p>
        <button className="px-5 py-2 bg-white text-black bg-opacity-25">
          ABOUT US
        </button>
      </div>
      {/* <div>
        <Image width={500} height={0} src="/inaugration.jpg" className=""/>
      </div> */}

      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border  p-5 bg-white bg-opacity-25">
        <div className="">
          <Image
            className="h-[200px] object-cover transition-transform duration-500 group-hover:scale-125 rounded-lg"
            src="/inaugration.jpg"
            alt="our inaugration"
            width={400}
            height={0}
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70  group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="newfont text-3xl font-bold ">Our Inaugration</h1>
          <p className="mb-3 text-lg italic text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            The memories we captured on our first day.
          </p>
          <a
            href="/"
            target={"_blank"}
            className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white font-bold shadow shadow-black/60"
          >
            SEE MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
