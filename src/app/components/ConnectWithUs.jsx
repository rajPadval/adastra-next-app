import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const ConnectWithUs = () => {
  return (
    <footer className="mx-[5vw] flex flex-col gap-2 mb-8 ">
      <h3 className="text-xl font-light">CONNECT WITH US!</h3>
      <div className="flex gap-3 text-3xl">
        <a
          href="https://www.linkedin.com/company/adastraofficial/"
          target="_blank"
        >
          <FaLinkedin className="cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out" />
        </a>
        <a
          href="https://twitter.com/_ad_astra_x?t=8HZrqMU9ahvroxm-T4NNJg&s=08"
          target="_blank"
        >
          <FaXTwitter className="cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out" />
        </a>
        <a
          href="https://instagram.com/_ad_astra_official?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <FaInstagram className="cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=+918380009626&text=Hello&type=phone_number&app_absent=0"
          target="_blank"
        >
          <FaWhatsapp className="cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out" />
        </a>
      </div>
    </footer>
  );
};

export default ConnectWithUs;
