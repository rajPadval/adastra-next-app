import Image from "next/image";
import React from "react";

const MoreAbout = () => {
  return (
    <div className="mx-[5vw] flex flex-col lg:flex-row justify-center items-center gap-24  lg:gap-5 my-36">
      <Image width={500} height={0} alt="our events" src="/event.png" data-aos="fade-up"
     data-aos-duration="3000"/>
      <p className="text-md lg:text-lg uppercase font-thin text-left" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        We host social events and community service projects. We believe that
        building a strong community is essential to fostering innovation and
        creativity.If you are interested in coding, programming, or simply want
        to learn more about the tech industry, we encourage you to join / follow
        / contact our club!
      </p>
    </div>
  );
};

export default MoreAbout;
