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
    src: "/1.JPG",
  },
  {
    id: 2,
    src: "/2.JPG",
  },
  {
    id: 3,
    src: "/3.jpg",
  },
  {
    id: 4,
    src: "/4.jpg",
  },
  {
    id: 5,
    src: "/5.JPG",
  },
  {
    id: 6,
    src: "/6.JPG",
  },
  {
    id: 7,
    src: "/7.JPG",
  },
];

const EventCollage = () => {
  return (
    <div className="grid grid-cols-3 auto-rows-[50px] lg:auto-rows-[100px]  p-3 gap-3 justify-center items-center  rounded-lg w-fit h-fit  backdrop-blur-sm  mx-auto ">
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
            <img src={item.src} alt="collage"  />
          </div>
        );
      })}
    </div>
  );
};

export default EventCollage;
