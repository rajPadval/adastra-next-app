import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const ConnectWithUs = () => {
  return (
    <footer className="mx-[5vw] flex flex-col gap-2 mb-8 " >
      <h3 className="text-xl font-light">CONNECT WITH US!</h3>
      <div className="flex gap-3 text-3xl">
        <FaLinkedin className="cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out" />
        <FaXTwitter className="cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out" />
        <FaInstagram className="cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out" />
        <FaWhatsapp className="cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out" />
      </div>
    </footer>
  );
};

export default ConnectWithUs;
