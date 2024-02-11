import React from "react";
import Image from "next/image";
import img1 from "/public/collage/1.jpg";
import img2 from "/public/collage/2.jpg";
import img3 from "/public/collage/3.jpg";
import img4 from "/public/collage/4.jpg";
import img5 from "/public/collage/5.jpg";
import img6 from "/public/collage/6.jpg";
import img7 from "/public/collage/7.jpg";

const collageData = [
  {
    id: 1,
    src: img1,
  },
  {
    id: 2,
    src: img2,
  },
  {
    id: 3,
    src: img3,
  },
  {
    id: 4,
    src: img4,
  },
  {
    id: 5,
    src: img5,
  },
  {
    id: 6,
    src: img6,
  },
  {
    id: 7,
    src: img7,
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
            <Image src={item.src} alt="collage" className={``} />
          </div>
        );
      })}
    </div>
  );
};

export default EventCollage;
