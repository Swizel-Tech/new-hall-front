import { logo, map } from "../../../assets";
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
    <div className="w-full px-8 h-auto relative flex gap-8 flex-col justify-center items-center bg-black pt-6">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${map})` }}
      ></div>
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
            Adminssion
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
      <div className="w-full lg:w-[50%] flex justify-center items-center mt-20">
        <img src={logo} alt="Logo" />
      </div>
      <div className="w-full lg:w-[40%]">
        <h2 className="text-[12px] lg:text-[16px] text-[#fff] font-normal font-OpenSans uppercase text-center">
          12 Adegbenle Street, Chevy View Estate, Off Chevron Drive, Off Udeco
          Medical Road, Lekki, Lagos, Nigeria.
        </h2>
      </div>
      <div className="w-full flex flex-col sm:flex-row  justify-between items-center lg:w-[20%]">
        <FaPhone fontSize={30} className="text-[#fff]" />
        <h2 className="text-[12px] lg:text-[16px] text-[#fff] font-normal font-OpenSans uppercase text-center">
          014530845, 014530846, 014530847, 08033395673
        </h2>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center lg:w-[20%]">
        <MdEmail fontSize={30} className="text-[#fff]" />
        <h2 className="text-[12px] lg:text-[16px] text-[#fff] font-normal font-OpenSans uppercase text-center">
          info@newhallschool.com.ng
        </h2>
      </div>
      <div className="flex mb-20 justify-between items-center w-[50%] lg:w-[10%]">
        <button>
          <FaLinkedin fontSize={30} className="text-[#fff]" />
        </button>
        <button>
          <FaSquareFacebook fontSize={30} className="text-[#fff]" />
        </button>
        <button>
          <FaSquareInstagram fontSize={30} className="text-[#fff]" />
        </button>
        <button>
          <FaSquareXTwitter fontSize={30} className="text-[#fff]" />
        </button>
      </div>
      <div className="absolute bottom-0 px-4 lg:px-[8%] py-5 bg-black opacity-70 w-full">
        <div className="w-full lg:w-[50%] flex justify-between items-center">
          <h2 className="text-[12px] text-[#fff] font-normal font-OpenSans uppercase text-center">
            Copyright © 2018 | New Hall International School, Lekki. All Rights
            Reserved
          </h2>
        </div>
      </div>
    </div>
  );
};
