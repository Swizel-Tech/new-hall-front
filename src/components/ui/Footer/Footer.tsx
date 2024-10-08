import { AISEN, british } from "../../../assets";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  let navigate = useNavigate();
  const handleAdmission = () => {
    navigate("/applying-to-new-hall");
  };
  const handleCalNavigate = () => {
    navigate("/calendar");
  };
  const handlecontact_us = () => {
    navigate("/contact_us");
  };
  return (
    <div className="w-full px-8 mt-14 h-auto relative flex gap-8 flex-col justify-center items-center bg-[#b9b6b6] pt-6">
      {/* <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${map})` }}
      ></div> */}
      <div className="absolute top-0 px-4 lg:px-[8%] py-5 bg-black opacity-50 w-full flex justify-center items-center">
        <div className="w-full lg:w-[50%] flex justify-between items-center">
          <motion.button
            className="text-[12px] text-[#fff] font-normal font-OpenSans uppercase text-center hover:text-[#3D83F6]"
            initial={{ color: "#fff" }}
            whileHover={{ color: "#3D83F6" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            onClick={handleAdmission}
          >
            Admission
          </motion.button>
          <motion.button
            className="text-[12px] text-[#fff] font-normal font-OpenSans uppercase text-center hover:text-[#3D83F6]"
            initial={{ color: "#fff" }}
            whileHover={{ color: "#3D83F6" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            onClick={handleCalNavigate}
          >
            Calendar
          </motion.button>
          <motion.button
            className="text-[12px] text-[#fff] font-normal font-OpenSans uppercase text-center hover:text-[#3D83F6]"
            initial={{ color: "#fff" }}
            whileHover={{ color: "#3D83F6" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            onClick={handlecontact_us}
          >
            Contact
          </motion.button>
        </div>
      </div>
      {/* <div className="w-full lg:w-[50%] flex justify-center items-center mt-20">
        <img src={logo} alt="Logo" />
      </div> */}
      <div className="flex flex-col mt-20 lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[40%]">
          <h2 className="text-[12px] lg:text-[16px] text-[#000] font-normal font-OpenSans uppercase text-center">
            12 Adegbenle Street, Chevy View Estate, Off Chevron Drive, Off Udeco
            Medical Road, Lekki, Lagos, Nigeria.
          </h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row  justify-between items-center lg:w-[20%]">
          <FaPhone className="text-[20px] lg:text-[30px] text-[#000]" />
          <h2 className="text-[12px] lg:text-[16px] text-[#000] font-normal font-OpenSans uppercase text-center">
            014530845, 014530846, 014530847, 08033395673
          </h2>
        </div>
        <div className="w-full z-10 flex flex-col lg:flex-row justify-between items-center lg:w-[20%]">
          <MdEmail className="text-[20px] lg:text-[30px] text-[#000]" />
          <a
            href="mailto:info@newhallschool.com.ng"
            className="text-[12px] lg:text-[16px] text-[#000] font-normal font-OpenSans uppercase text-center no-underline"
          >
            info@newhallschool.com.ng
          </a>
        </div>
      </div>
      <div className="flex z-10 justify-start items-center w-full">
        <a
          className=""
          href="https://ng.linkedin.com/company/newhall-international-school"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-[20px] lg:text-[30px] text-[#000]" />
        </a>
        <a
          className=""
          href="https://www.facebook.com/newhallschoollekki/"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareFacebook className="text-[20px] lg:text-[30px] text-[#000]" />
        </a>
        <a
          className=""
          href="https://www.instagram.com/newhallschoollekki/"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareInstagram className="text-[20px] lg:text-[30px] text-[#000]" />
        </a>
        <a
          className=""
          href="https://twitter.com/newhallng"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareXTwitter className="text-[20px] lg:text-[30px] text-[#000]" />
        </a>
      </div>
      <div className="z-10 mb-20 w-full flex flex-col sm:flex-row justify-between items-start">
        <div className=" w-full flex flex-col justify-start items-start">
          <h2 className="font-OpenSans text-[#000] mb-8 text-[26px] lg:text-[36px] font-normal text-left leading-[44px]">
            Membership/Partnership
          </h2>
          <div className="flex justify-start overflow-x-auto items-center gap-4">
            <img src={british} alt="british" className=" w-[300px] p-3" />
            <img src={AISEN} alt="AISEN" className="w-[400px] p-3" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 px-6 py-5 bg-black opacity-70 w-full">
        <div className="w-full lg:w-[50%] flex justify-between items-center">
          <h2 className="text-[12px] text-[#fff] font-normal font-OpenSans uppercase text-center">
            Copyright © 2024 | New Hall International School, Lekki. All Rights
            Reserved
          </h2>
        </div>
      </div>
    </div>
  );
};
