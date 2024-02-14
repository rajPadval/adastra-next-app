import Image from "next/image";
import React from "react";
import { IoMdMore } from "react-icons/io";

const MemberDetails = ({ name, designation, domain,img }) => {
  return (
    <div className="flex  p-3 rounded-md shadow-md gap-2 justify-between items-center    font-montserrat bg-white bg-opacity-5 backdrop-brightness-150 backdrop-blur-md lg:backdrop-blur-none">
      <Image
        src={img}
        alt="member"
        width={100}
        height={100}
        class="w-20 h-20 outline-none bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg"
      />
      <div>
        <h3 className="font-bebas text-md">
          Name : <span className="font-montserrat font-thin ml-2 text-sm">{name}</span>
        </h3>
        <p className="font-bebas text-md">
          Designation :{" "}
          <span className="font-montserrat font-thin ml-2 text-sm">{designation}</span>
        </p>
        <p className="font-bebas text-md">
          Domain :{" "}
          <span className="font-montserrat font-thin ml-2 text-sm">{domain}</span>
        </p>
      </div>
      <IoMdMore className="text-3xl " />
    </div>
  );
};

export default MemberDetails;
