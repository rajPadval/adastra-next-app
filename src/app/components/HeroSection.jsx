import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between lg:items-center mx-[5vw] my-56  lg:my-40 ">
      {/* main div */}
      <div className="flex flex-col select-none">
        <h1 className="flex  font-bebas items-baseline ">
          <span className="text-8xl lg:text-[14vw] bg-gradient-to-b  from-white to-gray-800 inline-block text-transparent bg-clip-text drop-shadow-xl leading-[24.5vh]">
            AD
          </span>
          <Image
            src="/logo.png"
            width={200}
            height={0}
            className="w-[20vw] lg:w-[13vw] lg:h-[30vh]"
          />
          <span className="text-8xl lg:text-[14vw] bg-gradient-to-b  from-white to-gray-800 inline-block text-transparent bg-clip-text drop-shadow-xl leading-[24.5vh]">
            ASTRA
          </span>
        </h1>
        <div className=" flex flex-col -mt-12 lg:mt-0">
          <h2 className="text-lg lg:text-3xl">STUDENT CLUB</h2>
          <span className="font-thin text-lg lg:text-3xl -my-2 lg:-my-0">
            DEPARTMENT OF CSE AIML & IOT
          </span>
          <span className="font-thin text-lg lg:text-3xl">S.I.G.C.E</span>
        </div>
      </div>

      {/* extra text */}
      <div className="hidden lg:block">
        <Image
          width={250}
          height={0}
          src="/dotted-line.png"
          className="select-none"
        />
      </div>
    </section>
  );
};

export default HeroSection;
