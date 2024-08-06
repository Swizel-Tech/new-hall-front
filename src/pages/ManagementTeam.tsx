// import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import {
  managment,
  // slider1,
  // slider2,
  // slider3,
  // slider4,
  teacher1,
  teacher2,
  teacher3,
} from "../assets";
import { useEffect, useState } from "react";
// import { menus } from "../components/data/constants";
// import { motion } from "framer-motion";
// import { GameChangers } from "../components/ui/display/Slider/GameChangers";
// import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
// import EventsCalendar from "../components/ui/display/Calendar/Calendar";

const ManagementTeam = () => {
  let navigate = useNavigate();
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
  // const [activeMenu, setActiveMenu] = useState("management-team");
  // const [menuactive, setmenuactive] = useState(false);
  // const refbottom = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    navigate("/home");
  };

  // const images = [slider1, slider2, slider3, slider4];

  // const newsItems = [
  //   {
  //     imgSrc: slider1,
  //     date: "13 Sep",
  //     title: "Better Times Magazine - Issues 16",
  //   },
  //   {
  //     imgSrc: slider2,
  //     date: "13 Sep",
  //     title: "Better Times Magazine - Issues 16",
  //   },
  //   {
  //     imgSrc: slider3,
  //     date: "13 Sep",
  //     title: "Better Times Magazine - Issues 16",
  //   },
  //   {
  //     imgSrc: slider4,
  //     date: "13 Sep",
  //     title: "Better Times Magazine - Issues 16",
  //   },
  //   {
  //     imgSrc: slider1,
  //     date: "13 Sep",
  //     title: "Better Times Magazine - Issues 16",
  //   },
  //   {
  //     imgSrc: slider3,
  //     date: "13 Sep",
  //     title: "Better Times Magazine - Issues 16",
  //   },
  // ];

  // const handleMenuClick = (menu: { href: SetStateAction<string> }) => {
  //   setActiveMenu(menu.href);
  //   navigate(`/${menu.href}`);
  // };

  // const scrollLeft = () => {
  //   if (refbottom.current) {
  //     refbottom.current.scrollBy({
  //       left: -refbottom.current.clientWidth,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  // const events = [
  //   { date: "22 Aug 2024", title: "A-level Result Day" },
  //   { date: "15 Aug 2024", title: "GCSE Result Day" },
  //   // Add more events here if needed
  // ];
  // const scrollRight = () => {
  //   if (refbottom.current) {
  //     refbottom.current.scrollBy({
  //       left: refbottom.current.clientWidth,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const handleViewNewsClick = () => {
  //   // Handle view news feed button click
  //   console.log("View News Feed button clicked");
  // };

  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Management Team
          </h2>
        </div>
        <div className="flex mb-6 px-4 py-4 border-b-[1.5px] border-[#ddd] lg:px-[8%] justify-start gap-2 items-center">
          <button
            onClick={handleClick}
            className="text-[14px] font-normal font-Raleway"
          >
            Home
          </button>
          <FaAngleRight />
          <p className="text-[14px] font-normal font-Raleway text-blue-500">
            Management Team
          </p>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col lg:flex-row justify-between items-start">
          {/* <div className="border-[1px] shadow-xl mb-5 lg:mb-0 border-[#F3F3F3] w-full flex flex-col justify-start items-start lg:w-[20%]">
            <button
              className="bg-blue-500 px-2 w-full flex justify-between items-center"
              onClick={() => setmenuactive(!menuactive)}
            >
              <h2
                className={`text-[16px] font-OpenSans font-normal w-full text-left p-3 text-[#fff]`}
              >
                About us
              </h2>
              {menuactive ? (
                <FaMinus className={`text-[#fff]`} />
              ) : (
                <FaPlus className={`text-[#fff]`} />
              )}
            </button>
            {menuactive && (
              <motion.div
                className="w-full"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {menus.map((menu) => (
                  <button
                    key={menu.href}
                    onClick={() => handleMenuClick(menu)}
                    className={`h-[50px] w-full text-[16px] font-OpenSans font-normal text-left border-b-[1px] hover:text-blue-500 px-3 ${
                      activeMenu === menu.href
                        ? "bg-[#000] text-[#fff]"
                        : "bg-[#fff] text-[#282E3F]"
                    }`}
                  >
                    {menu.text}
                  </button>
                ))}
              </motion.div>
            )}
          </div> */}
          <div className="w-full gap-6">
            <div className="w-full mb-6">
              <img src={managment} alt="facility1" className="w-[100%]" />
            </div>
            <p className="font-Lato text-[16px] mb-8 font-normal leading-[25.6px] text-justify">
              The School is managed by a Governing Board through the school
              Director who gives purposeful leadership to the management team.
              The school management is led by the Head of School who is assisted
              by three other principals who head each of the three schools –
              Nursery, Primary and College. Other principal officers include
              divisional Head of Administration, Human Resource Executives, Head
              of Academics and Head of Examinations.
            </p>

            <h2 className="font-Raleway mb-3 text-[36px] font-normal text-left leading-[44px]">
              Staff
            </h2>
            <div>
              <h2 className="font-Raleway mb-3 text-[18px] font-semibold text-left leading-[44px]">
                First Grade Teachers
              </h2>
              <p className="font-Lato text-[16px] mb-8 font-normal leading-[25.6px] text-justify">
                The homelike quality of our school contributes to a relaxed,
                focused experience for the child. Our indoor classroom
                activities are placed on open shelves for selection as interest
                and readiness inspires the child. Our outdoor environment offers
                a beautiful developed playground with manipulatives, tricycles,
                pets, and gardens.
              </p>

              <div className="flex flex-col sm:flex-row  justify-between items-center gap-3">
                <div className="border-[1.5px] pb-2 border-[#DDD]">
                  <img src={teacher1} alt="teacher1" />
                  <h2 className="font-Raleway text-[18px] font-normal leading-[22px] text-left px-2 mt-2 hover:text-blue-500 cursor-pointer">
                    Deborah David
                  </h2>
                  <p className="font-Lato text-[16px] px-2 my-2 text-blue-500 font-semibold leading-[25px] text-left">
                    Teacher of the first grade
                  </p>
                  <p className="font-Lato text-[16px] px-2 my-2 font-normal leading-[25.6px] text-left">
                    I will be spending some time getting everything together but
                    would appreciate any suggestions along.
                  </p>
                </div>
                <div className="border-[1.5px] pb-2 border-[#DDD]">
                  <img src={teacher2} alt="teacher1" />
                  <h2 className="font-Raleway text-[18px] font-normal leading-[22px] text-left px-2 mt-2 hover:text-blue-500 cursor-pointer">
                    Carol A. Swainson
                  </h2>
                  <p className="font-Lato text-[16px] px-2 my-2 text-blue-500 font-semibold leading-[25px] text-left">
                    Teacher of the first grade
                  </p>
                  <p className="font-Lato text-[16px] px-2 my-2 font-normal leading-[25.6px] text-left">
                    I will be spending some time getting everything together but
                    would appreciate any suggestions along.
                  </p>
                </div>
                <div className="border-[1.5px] pb-2 border-[#DDD]">
                  <img src={teacher3} alt="teacher1" />
                  <h2 className="font-Raleway text-[18px] font-normal leading-[22px] text-left px-2 mt-2 hover:text-blue-500 cursor-pointer">
                    Chris Cook
                  </h2>
                  <p className="font-Lato text-[16px] px-2 my-2 text-blue-500 font-semibold leading-[25px] text-left">
                    Teacher of the first grade
                  </p>
                  <p className="font-Lato text-[16px] px-2 my-2 font-normal leading-[25.6px] text-left">
                    I will be spending some time getting everything together but
                    would appreciate any suggestions along.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="font-Raleway mb-3 text-[18px] font-semibold text-left leading-[44px]">
                Pre School Teachers
              </h2>
              <p className="font-Lato text-[16px] mb-8 font-normal leading-[25.6px] text-justify">
                The homelike quality of our school contributes to a relaxed,
                focused experience for the child. Our indoor classroom
                activities are placed on open shelves for selection as interest
                and readiness inspires the child. Our outdoor environment offers
                a beautiful developed playground with manipulatives, tricycles,
                pets, and gardens.
              </p>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                <div className="border-[1.5px] pb-2 border-[#DDD]">
                  <img src={teacher1} alt="teacher1" />
                  <h2 className="font-Raleway text-[18px] font-normal leading-[22px] text-left px-2 mt-2 hover:text-blue-500 cursor-pointer">
                    Deborah David
                  </h2>
                  <p className="font-Lato text-[16px] px-2 my-2 text-blue-500 font-semibold leading-[25px] text-left">
                    Teacher of the first grade
                  </p>
                  <p className="font-Lato text-[16px] px-2 my-2 font-normal leading-[25.6px] text-left">
                    I will be spending some time getting everything together but
                    would appreciate any suggestions along.
                  </p>
                </div>
                <div className="border-[1.5px] pb-2 border-[#DDD]">
                  <img src={teacher2} alt="teacher1" />
                  <h2 className="font-Raleway text-[18px] font-normal leading-[22px] text-left px-2 mt-2 hover:text-blue-500 cursor-pointer">
                    Carol A. Swainson
                  </h2>
                  <p className="font-Lato text-[16px] px-2 my-2 text-blue-500 font-semibold leading-[25px] text-left">
                    Teacher of the first grade
                  </p>
                  <p className="font-Lato text-[16px] px-2 my-2 font-normal leading-[25.6px] text-left">
                    I will be spending some time getting everything together but
                    would appreciate any suggestions along.
                  </p>
                </div>
                <div className="border-[1.5px] pb-2 border-[#DDD]">
                  <img src={teacher3} alt="teacher1" />
                  <h2 className="font-Raleway text-[18px] font-normal leading-[22px] text-left px-2 mt-2 hover:text-blue-500 cursor-pointer">
                    Chris Cook
                  </h2>
                  <p className="font-Lato text-[16px] px-2 my-2 text-blue-500 font-semibold leading-[25px] text-left">
                    Teacher of the first grade
                  </p>
                  <p className="font-Lato text-[16px] px-2 my-2 font-normal leading-[25.6px] text-left">
                    I will be spending some time getting everything together but
                    would appreciate any suggestions along.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <NewsSlider
            newsItems={newsItems}
            title="News"
            viewNewsText="View News Feed"
            onViewNewsClick={handleViewNewsClick}
          />
        </div>
        <div>
          <GameChangers
            images={images}
            scrollLeft={scrollLeft}
            scrollRight={scrollRight}
          />
        </div>
        <div>
          <EventsCalendar events={events} />
        </div> */}
      </div>
    </div>
  );
};

export default ManagementTeam;
