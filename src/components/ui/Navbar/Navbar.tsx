import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navData } from "./data";
import { Nav } from "./Navs";
import { FaHome, FaSearch } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode using the 'prefers-color-scheme' media query
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

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
      return "text-[#FFF]";
    } else {
      return isDarkMode ? "text-[#fff]" : "text-[#000]";
    }
  };

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
          ? "bg-[#fff] text-[#000] h-auto shadow-lg pt-6"
          : `bg-transparent h-auto pt-16 ${getTextColor()}`
      }`}
    >
      <div className="relative flex-col items-center w-full">
        <div className="flex w-full mb-3 justify-between items-center px-4">
          <div className="w-[40%] flex justify-start items-center">
            <button
              onClick={handleClick}
              className={`font-OpenSans text-[14px] font-semibold leading-normal px-8 py-1 ${
                scrolled ? "text-[#000]" : `${getTextColor()}`
              }`}
            >
              Calendar
            </button>
            <h2
              className={`font-OpenSans text-[14px] leading-normal font-semibold border-[#000] px-4 py-1  border-l-[1.5px] ${
                scrolled
                  ? "text-[#000] border-[#000]"
                  : `${getTextColor()} border-[#fff]`
              }`}
            >
              Career @ Newhall
            </h2>
          </div>

          <div className="w-[40%] flex justify-end items-center">
            <h2
              className={`font-OpenSans text-[14px] font-semibold leading-normal px-4 py-1 ${
                scrolled ? "text-[#000]" : `${getTextColor()}`
              }`}
            >
              Webmail
            </h2>
          </div>
        </div>
        <div
          className={`w-full flex justify-between items-center ${
            scrolled ? "pt-0" : "pt-4"
          }`}
        >
          <button className="w-[2%]" onClick={handlehomeNavigate}>
            <FaHome
              className={` ${scrolled ? "text-[#000]" : `${getTextColor()}`}`}
            />
          </button>
          <div
            className={`w-[90%] flex justify-between items-center ${
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
