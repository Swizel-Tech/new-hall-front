import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navData } from "./data";
import { Nav } from "./Navs";
import { FaHome, FaSearch } from "react-icons/fa";
// import { logo2 } from "../../../assets";
// import { motion } from "framer-motion";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTextColor = () => {
    if (location.pathname === "/home") {
      return "text-[#FFF]"; // Example: Red text for a specific route
    } else {
      return "text-[#000]";
    }
  };

  // const isHomeRoute = location.pathname === "/home";

  const handleClick = () => {
    navigate("/calendar");
  };

  const handlehomeNavigate = () => {
    navigate("/home");
  };

  return (
    <nav
      className={`w-full hidden px-8 lg:block lg:fixed top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#fff] text-[#000] h-auto shadow-lg pt-2"
          : "bg-transparent text-[#fff] h-auto pt-10"
      }`}
    >
      <div className="relative flex-col items-center w-full">
        <div className="flex w-full mb-3 justify-between items-center px-4">
          <div className="w-[40%] flex justify-start items-center">
            <button
              onClick={handleClick}
              className={`font-OpenSans text-[14px] font-semibold leading-normal text-blue-500 px-8 py-1`}
            >
              Calendar
            </button>
            <h2
              className={`font-OpenSans text-[14px] leading-normal font-semibold border-blue-500 px-4 py-1 text-blue-500 border-l-[1.5px]`}
            >
              Career @ Newhall
            </h2>
          </div>
          {/* {isHomeRoute && (
            <div className="w-[20%] flex justify-center items-center">
              <motion.img
                src={logo2}
                alt=""
                className="logo"
                animate={{
                  maxWidth: scrolled ? "80px" : "200px",
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          )} */}
          <div className="w-[40%] flex justify-end items-center">
            <h2
              className={`font-OpenSans text-[14px] font-semibold leading-normal px-4 py-1 text-blue-500`}
            >
              Webmail
            </h2>
          </div>
        </div>
        <div
          className={`w-full flex justify-between items-center ${
            scrolled ? "pt-0" : "pt-6"
          }`}
        >
          <button className="w-[2%]" onClick={handlehomeNavigate}>
            <FaHome
              className={` ${scrolled ? "text-[#000]" : `${getTextColor()}`}`}
            />
          </button>
          <div
            className={`w-[90%]  flex justify-between items-center ${
              scrolled ? "" : "border-b-[1px] border-[#fff]"
            }`}
          >
            {navData.map((data) => (
              <Nav key={data.text} {...data} scrolledState={scrolled} />
            ))}
          </div>
          <button className="w-[2%]">
            <FaSearch
              className={` ${scrolled ? "text-[#000]" : `${getTextColor()}`}`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
