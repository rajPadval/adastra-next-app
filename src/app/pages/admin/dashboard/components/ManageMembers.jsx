import React from "react";
import MemberDetails from "./MemberDetails";
import membersData from "../../../../membersData";
const ManageMembers = () => {
  return (
    <section className="w-screen h-screen py-10 flex justify-center items-center">
      <div className="w-[80vw] lg:w-[60vw] lg:h-[90vh]   lg:backdrop-blur-lg rounded-lg lg:bg-white lg:bg-opacity-5 ">
        <form className="grid grid-cols-1 gap-2 lg:grid-cols-2 p-2 font-montserrat my-16">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Member's Name"
            className="rounded-md text-gray-600 outline-none focus:border-purple-500 text-md px-3 py-2"
          />
          <input
            type="text"
            name="designation"
            id="designation"
            placeholder="Member's Designation"
            className="rounded-md text-gray-600 outline-none focus:border-purple-500 text-md px-3 py-2"
          />
          <input
            type="text"
            name="domain"
            id="domain"
            placeholder="Member's Domain"
            className="rounded-md text-gray-600 outline-none focus:border-purple-500 text-md px-3 py-2"
          />
          <div className="flex ">
            <input
              type="file"
              name="img"
              id="img"
              placeholder="Member's Profile Image"
              className="rounded-md text-gray-600 outline-none focus:border-purple-500 text-md px-3 py-2"
            />
            <button className="bg-white bg-opacity-60 hover:bg-opacity-100 text-black px-3 py-1  w-full">
              Add Member
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-10 h-[50vh] overflow-y-scroll lg:p-2">
          {membersData.map((member, id) => {
            return <MemberDetails key={id} {...member} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ManageMembers;
