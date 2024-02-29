import EventCollage from "@/app/components/EventCollage";
import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-black to-transparent h-full">
      <div className="py-28 flex flex-col justify-center items-center ">
        <h2
          className="font-bebas text-7xl  bg-gradient-to-b  from-white to-gray-800 inline-block text-transparent bg-clip-text drop-shadow-xl mx-[5vw]"
          data-aos="zoom-in-up"
        >
          ABOUT US
        </h2>
        <p
          className="text-md lg:text-lg uppercase font-thin text-center mx-[5vw]"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          Ad Astra is a community of passionate enthusiasts, coders, and
          programmers who share a common goal of fostering knowledge and
          empowering the community. We strive to lead events and provide
          opportunities.
        </p>
      </div>

      {/* Event collage will be displayed here */}
      <div className=" bg-gradient-to-r from-transparent via-black to-transparent ">
        <EventCollage />
      </div>

      {/* More data of about page */}
      <div
        className="mx-[5vw] mb-10 mt-24"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h3 className="text-xl lg:text-2xl text-start lg:text-center">
          MORE THAN JUST A CLUB, WE ARE A FAMILY
        </h3>
        <p className="text-md lg:text-lg uppercase font-thin text-start lg:text-center ">
          A bunch of students formed this club to enrich the engineering journey
          while also providing platforms, knowledge and resources to our
          audience. We organize events, promote them, share them and learn from
          them. It’s that simple. Our team consists of technically sound
          engineers, creative graphic designers, content writers, and marketing
          gurus, among many others. Each one of which contributes towards a fun
          cause and simultaneously builds themselves.
        </p>
      </div>

      {/*  To showcase members and events */}
      <div
        className="flex py-8 px-10 bg-black bg-opacity-30 w-fit gap-10 mx-auto"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="flex flex-col p-5 text-3xl font-bebas rounded-full border-2 w-fit justify-center items-center">
          <span>24</span>
          <span>Events</span>
        </div>
        <div className="flex flex-col p-5 text-3xl font-bebas rounded-full border-2 w-fit justify-center items-center">
          <span>27</span>
          <span className="text-2xl">Members</span>
        </div>
      </div>

      {/* more paragraph */}
      <p
        className="text-md lg:text-lg uppercase font-thin text-start lg:text-center mx-[5vw] mt-10 mb-24"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        If you are considering joining us, do not hesitate any longer. Anyone
        interested in expanding their network, joining a great team, and having
        a better experience while learning should come here! All we ask is that
        you be driven, willing to learn, and interested in teamwork!
      </p>
    </section>
  );
};

export default About;
