import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navData } from "./data";
import { Nav } from "./Navs";
import { FaHome, FaSearch } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <nav
      className={`w-full hidden px-8 lg:block lg:fixed top-0 z-20 transition-all duration-500 ${
        scrolled
          ? "bg-[#fff] text-[#000] h-auto shadow-lg pt-2"
          : "bg-transparent text-[#fff] h-auto pt-10"
      }`}
    >
      <div className="relative flex-col items-center w-full">
        <div className="flex w-full mb-3 justify-between items-center px-4">
          <div className="flex justify-start items-center">
            <h2
              className={`font-OpenSans text-[14px] font-semibold leading-normal text-[#000] px-8 py-1 ${getTextColor()}`}
            >
              Calendar
            </h2>
            <h2
              className={`font-OpenSans text-[14px] leading-normal font-semibold px-4 py-1 border-l-[1.5px] ${
                scrolled ? "border-[#000] text-[#000]" : "border-[#fff]"
              } ${getTextColor()}`}
            >
              Career @ Newhall
            </h2>
          </div>
          <div className="flex justify-start items-center">
            <h2
              className={`font-OpenSans text-[14px] font-semibold leading-normal px-4 py-1 text-[#000] ${getTextColor()}`}
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
          <div className="w-[2%]">
            <FaHome className={`${getTextColor()}`} />
          </div>
          <div
            className={`w-[90%]  flex justify-between items-center ${
              scrolled ? "" : "border-b-[1px] border-[#fff]"
            }`}
          >
            {navData.map((data) => (
              <Nav key={data.text} {...data} scrolledState={scrolled} />
            ))}
          </div>
          <div className="w-[2%]">
            <FaSearch className={`${getTextColor()}`} />
          </div>
        </div>
      </div>
    </nav>
  );
};
