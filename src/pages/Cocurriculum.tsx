import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaAngleRight } from "react-icons/fa";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { LEG_5251, LEG_7901, ND4_9781, ND4_9820 } from "../assets";
import { motion } from "framer-motion";
import Slider from "react-slick";

type DropdownKey = "sport" | "nursery" | "college";
const autoplaySpeed = 3000;

const Cocurriculum = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dropdowns, setDropdowns] = useState<Record<DropdownKey, boolean>>({
    sport: false,
    nursery: false,
    college: false,
  });
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
  // let navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/home");
  // };

  const toggleDropdown = (key: DropdownKey) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const fadeInVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    arrows: false,
    adaptiveHeight: false,
    lazyLoad: "ondemand" as "ondemand",
  };
  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Co-curricular activities
          </h2>
        </div>
        {/* <div className="flex mb-6 px-4 py-4 border-b-[1.5px] border-[#F3F3F3] lg:px-[8%] justify-start gap-2 items-center">
          <button
            onClick={handleClick}
            className="text-[14px] font-normal font-Raleway"
          >
            Home
          </button>
          <FaAngleRight />
          <p className="text-[14px] font-normal font-Raleway text-[#FF7264]">
            Co-Curriculum
          </p>
        </div> */}
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%]">
          <motion.div
            className="w-full"
            // ref={refRight}
            // initial={{ x: "5%", opacity: 0 }}
            // animate={controlsRight}
          >
            <Slider {...settings}>
              <div className="relative m-0 p-0 w-[100%]">
                <img
                  src={LEG_5251}
                  alt="Slide 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative m-0 p-0">
                <img
                  src={LEG_7901}
                  alt="Slide 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative m-0 p-0">
                <img
                  src={ND4_9781}
                  alt="Slide 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative m-0 p-0">
                <img
                  src={ND4_9820}
                  alt="Slide 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </Slider>
          </motion.div>
          <div className="w-full">
            <div
              onClick={() => toggleDropdown("sport")}
              className="w-full h-auto"
            >
              <h2 className="font-OpenSans uppercase my-4 text-[24px] font-semibold text-left leading-[44px]">
                Sports
              </h2>
              <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                Sporting activities is a very important area of co-curriculum at
                New Hall for every class. Every child is introduced to one type
                of sporting activities that he/she enjoys and trained to be able
                to excel before completing his or her studies at Newhall. These
                activities include, football, basketball, swimming, Table
                tennis, Tennis etc Our school stadium, which is one of the best
                facilities comparable with high class schools in the world, is
                laced with astral stuff for running and artificial grass on the
                football pitch. This creates a lot of enthusiasm for all
                participation in various sporting activities. The school has
                well-developed and maintained swimming pools for use by all
                ages. Our multipurpose hall which houses our college assembly
                and other school events like Christmas and graduation is fully
                developed to take care of our indoor games such as basketball
                and badminton.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col lg:flex-row gap-4 justify-between items-start">
          <div className="w-full lg:w-[50%]">
            <div
              onClick={() => toggleDropdown("nursery")}
              className="cursor-pointer flex justify-between items-center border-[1px] border-[#ddd] w-full p-3 h-auto"
            >
              <p className="font-OpenSans text-[16px] font-semibold leading-[25.6px] text-left">
                Activities for Nursery
              </p>
              {dropdowns.nursery ? (
                <GoChevronUp fontSize={25} />
              ) : (
                <GoChevronDown fontSize={25} />
              )}
            </div>
            {dropdowns.nursery && (
              <motion.div
                className="border-b-[1px] shadow-lg border-l-[1px] border-r-[1px] border-[#ddd]  h-[200px] overflow-y-auto"
                variants={fadeInVariants}
                initial="initial"
                animate="animate"
              >
                <ul className="w-full px-4">
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Ballet
                  </li>
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Chess
                  </li>
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Taekwondo
                  </li>
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Art
                  </li>
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Craft
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
          <div className="w-full lg:w-[50%]">
            <div
              onClick={() => toggleDropdown("college")}
              className="cursor-pointer flex justify-between items-center border-[1px] border-[#ddd] w-full p-3 h-auto"
            >
              <p className="font-OpenSans text-[16px] font-semibold leading-[25.6px] text-left">
                Activities for Primary and College
              </p>
              {dropdowns.college ? (
                <GoChevronUp fontSize={25} />
              ) : (
                <GoChevronDown fontSize={25} />
              )}
            </div>
            {dropdowns.college && (
              <motion.div
                className="border-b-[1px] shadow-lg border-l-[1px] border-r-[1px] border-[#ddd]  h-[200px] overflow-y-auto"
                variants={fadeInVariants}
                initial="initial"
                animate="animate"
              >
                <ul className="w-full px-4">
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Taekwando
                  </li>
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Dance(Hip hop & Ballet)
                  </li>
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Chess
                  </li>
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Robotics
                  </li>
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Music
                  </li>
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Art
                  </li>
                  <li className="font-OpenSans text-[18px] py-[2px] font-normal leading-[25.6px] text-justify">
                    Home management
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocurriculum;
