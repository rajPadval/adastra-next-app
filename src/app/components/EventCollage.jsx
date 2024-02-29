import React from "react";
import Image from "next/image";
// import img1 from "/public/1.jpg";
// import img2 from "/public/2.jpg";
// import img3 from "/public/3.jpg";
// import img4 from "/public/4.jpg";
// import img5 from "/public/5.jpg";
// import img6 from "/public/6.jpg";
// import img7 from "/public/7.jpg";

const collageData = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dkygcoyhb/image/upload/v1707844239/Ad-Astra%20Web%20Assets/1-min_tmuapo.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dkygcoyhb/image/upload/v1707844244/Ad-Astra%20Web%20Assets/2-min_irtfca.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dkygcoyhb/image/upload/v1707844242/Ad-Astra%20Web%20Assets/3-min_suc8xt.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dkygcoyhb/image/upload/v1707844236/Ad-Astra%20Web%20Assets/4-min_aixjpz.jpg",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dkygcoyhb/image/upload/v1707844239/Ad-Astra%20Web%20Assets/5-min_rotayq.jpg",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dkygcoyhb/image/upload/v1707844242/Ad-Astra%20Web%20Assets/6-min_zqc9eb.jpg",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dkygcoyhb/image/upload/v1707844056/Ad-Astra%20Web%20Assets/7_1_whg5rx.jpg",
  },
];

const EventCollage = () => {
  return (
    <div className="grid grid-cols-3 auto-rows-[50px] lg:auto-rows-[100px]  p-3 gap-3 justify-center items-center  rounded-lg w-fit h-fit  backdrop-blur-sm  mx-auto "data-aos="zoom-in-up">
      {collageData.map((item, i) => {
        return (
          <div
            key={item.id}
            className={`w-[100px] h-[50px] lg:w-[150px] lg:h-[100px]  mx-auto rounded-lg overflow-clip  ${
              item.id === 4 || item.id === 7
                ? "col-span-2 w-[230px] lg:w-[320px] place-content-center "
                : ""
            }`}
          >
            <img src={item.src} alt="collage" />
          </div>
        );
      })}
    </div>
  );
};

export default EventCollage;
