import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center mx-[5vw]  my-40 ">
      {/* main div */}
      <div className="flex flex-col select-none">
        <h1 className="flex  font-bebas items-baseline ">
          <span className="text-[14vw] bg-gradient-to-b  from-white to-gray-800 inline-block text-transparent bg-clip-text drop-shadow-xl leading-[24.5vh]">
            AD
          </span>
          <Image
            src="/logo.png"
            width={200}
            height={0}
            className="w-[13vw] h-[30vh]"
          />
          <span className="text-[14vw] bg-gradient-to-b  from-white to-gray-800 inline-block text-transparent bg-clip-text drop-shadow-xl leading-[24.5vh]">
            ASTRA
          </span>
        </h1>
        <div className="text-2xl flex flex-col">
          <h2>STUDENT CLUB</h2>
          <span className="font-thin">DEPARTMENT OF CSE AIML & IOT</span>
          <span className="font-thin">S.I.G.C.E</span>
        </div>
      </div>

      {/* extra text */}
      <div>
        <Image width={250} height={0} src="/dotted-line.png" className="select-none"/>
      </div>
    </section>
  );
};

export default HeroSection;
