import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa";
import {
  college,
  college2,
  college3,
  college4,
  college5,
  college6,
  college7,
} from "../assets";
import { AnimatePresence, motion } from "framer-motion";
import { BaseTable } from "../components/table/Table";
import Slider from "react-slick";

const College = () => {
  let navigate = useNavigate();
  const [menuactive, setmenuactive] = useState(false);
  const [isJssSubject, setisJssSubject] = useState(false);
  const [isSssSubject, setisSssSubject] = useState(false);
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

  const handleClick = () => {
    navigate("/home");
  };
  const items = [
    {
      SN: 1,
      Description: "MATHEMATICS",
    },
    {
      SN: 2,
      Description: "BUSINESS STUDIES",
    },
    {
      SN: 3,
      Description: "CIVICS EDUCATION",
    },
    {
      SN: 4,
      Description: "CREATIVE AND CULTURAL ARTS (MUSIC)",
    },
    {
      SN: 5,
      Description: "PREVOCATIONAL EDUCATION",
    },
    {
      SN: 6,
      Description: "PHE",
    },
    {
      SN: 7,
      Description: "IGBO",
    },
  ];
  const secondItem = [
    {
      SN: 8,
      Description: "RELIGIOUS AND VOCATIONAL EDUCATION",
    },
    {
      SN: 9,
      Description: "ENGLISH LANGUAGE",
    },
    {
      SN: 10,
      Description: "BASIC TECHNOLOGY",
    },
    {
      SN: 11,
      Description: "SCIENCE",
    },
    {
      SN: 12,
      Description: "FRENCH",
    },
    {
      SN: 13,
      Description: "YORUBA",
    },
  ];

  const sssitems = [
    {
      SN: 1,
      Description: "MATHEMATICS",
    },
    {
      SN: 2,
      Description: " DATA PROCESSING/ICT",
    },
    {
      SN: 3,
      Description: "LITERATURE IN ENGLISH",
    },
    {
      SN: 4,
      Description: "  FRENCH",
    },
    {
      SN: 5,
      Description: "FURTHER MATHS",
    },
    {
      SN: 6,
      Description: "ARTS",
    },
    {
      SN: 7,
      Description: "Government",
    },
  ];
  const ssssecondItem = [
    {
      SN: 8,
      Description: "Commerce/Business Studies",
    },
    {
      SN: 9,
      Description: "ENGLISH LANGUAGE",
    },
    {
      SN: 10,
      Description: "ECONOMICS",
    },
    {
      SN: 11,
      Description: "Government/Sociology",
    },
    {
      SN: 12,
      Description: "Christian Religious Studies/ Islamic Religious Studies",
    },
    {
      SN: 13,
      Description: "PHYSICS",
    },
    {
      SN: 14,
      Description: "GEOGRAPHY",
    },
    {
      SN: 15,
      Description: "CIVIC EDUCATION",
    },
  ];

  const sssthirdItem = [
    {
      SN: 17,
      Description: "CHEMISTRY",
    },
    {
      SN: 18,
      Description: "FOOD AND NUTRITION",
    },
    {
      SN: 19,
      Description: "YORUBA",
    },
    {
      SN: 20,
      Description: "BIOLOGY ",
    },
    {
      SN: 21,
      Description: "Financial Accounting",
    },
    {
      SN: 22,
      Description: "IGBO ",
    },
    {
      SN: 23,
      Description: "TECHNICAL DRAWING ",
    },
    {
      SN: 24,
      Description: "PHE",
    },
  ];

  const slideInVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };

  const handleSetJSS = () => {
    if (isSssSubject === true) {
      setisSssSubject(false);
      setisJssSubject(!isJssSubject);
    } else {
      setisJssSubject(!isJssSubject);
    }
  };
  const handleSetSSS = () => {
    if (isJssSubject === true) {
      setisJssSubject(false);
      setisSssSubject(!isSssSubject);
    } else {
      setisSssSubject(!isSssSubject);
    }
  };

  const getClassNames = () => {
    if (isJssSubject && isSssSubject === false) {
      return "bg-transparent text-[#fff]";
    }
    return "";
  };
  const getSSSClassNames = () => {
    if (isSssSubject && isJssSubject === false) {
      return "bg-transparent text-[#fff]";
    }
    return "";
  };

  var settings = {
    dots: false,
    speed: 1500,
    fade: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-OpenSans px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Welcome to NewHall College
          </h2>
        </div>
        <div className="flex mb-6 px-4 py-4 border-b-[1.5px] border-[#ddd] lg:px-[8%] justify-start gap-2 items-center">
          <button
            onClick={handleClick}
            className="text-[14px] font-normal font-OpenSans"
          >
            Home
          </button>
          <FaAngleRight />
          <p className="text-[14px] font-normal font-OpenSans text-blue-500">
            College
          </p>
        </div>
        <div className="px-4 my-6 lg:px-[8%] gap-4 flex flex-col lg:flex-row justify-between items-start">
          <div className="border-[1px] shadow-xl mb-5 lg:mb-0 border-[#F3F3F3] w-full flex flex-col justify-start items-start lg:w-[25%]">
            <button
              className="bg-blue-500 px-2 w-full flex justify-between items-center"
              onClick={() => setmenuactive(!menuactive)}
            >
              <h2
                className={`text-[16px] font-OpenSans font-normal w-full text-left p-3 text-[#fff]`}
              >
                College
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
                <button
                  onClick={handleSetJSS}
                  className={`h-[50px] w-full text-[16px] font-OpenSans font-normal text-left border-b-[1px] hover:text-blue-500 px-3 ${getClassNames()}`}
                >
                  Subjects Offered - JSS/Year 7-9
                </button>
                <button
                  onClick={handleSetSSS}
                  className={`h-[50px] w-full text-[16px] font-OpenSans font-normal text-left border-b-[1px] hover:text-blue-500 px-3 ${getSSSClassNames()}`}
                >
                  Subjects Offered - SSS/Year 10-12
                </button>
              </motion.div>
            )}
          </div>
          <div className="w-full lg:w-[75%]">
            <div className="w-full lg:w-[50%]">
              <Slider {...settings}>
                <div className="relative m-0 p-0 w-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10"></div>
                  <img
                    src={college}
                    alt="Slide 1"
                    className="w-full object-cover"
                  />
                </div>
                <div className="relative m-0 p-0 w-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10"></div>
                  <img
                    src={college2}
                    alt="Slide 2"
                    className="w-full object-cover"
                  />
                </div>
                <div className="relative m-0 p-0 w-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10"></div>
                  <img
                    src={college3}
                    alt="Slide 3"
                    className="w-full object-cover"
                  />
                </div>
                <div className="relative m-0 p-0 w-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10"></div>
                  <img
                    src={college4}
                    alt="Slide 1"
                    className="w-full object-cover"
                  />
                </div>
                <div className="relative m-0 p-0 w-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10"></div>
                  <img
                    src={college5}
                    alt="Slide 2"
                    className="w-full object-cover"
                  />
                </div>
                <div className="relative m-0 p-0 w-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10"></div>
                  <img
                    src={college6}
                    alt="Slide 3"
                    className="w-full object-cover"
                  />
                </div>
                <div className="relative m-0 p-0 w-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10"></div>
                  <img
                    src={college7}
                    alt="Slide 3"
                    className="w-full object-cover"
                  />
                </div>
              </Slider>
            </div>
            <div className="w-full my-6">
              <p className="font-OpenSans text-[16px] font-semibold leading-[25.6px] text-justify">
                At Newhall, we raise role models and we provide a range of
                opportunities that will enable our students develop their
                talents and interests. We lay emphasis on sound discipline and
                we believe in the total training of the child which affects
                spirit, soul and body.
              </p>
              <p className="font-OpenSans mt-4 text-[16px] font-semibold leading-[25.6px] text-justify">
                In our Year 9 which is JSS3, our students write two exams;
                Checkpoint (British Examination) and BECE (Nigerian Examination)
                In our Year 12 which is SSS3, our students write two exams;
                IGCSE (British Examination) and WAEC (Nigerian Examination)
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 my-6 lg:px-[8%] w-full">
          <AnimatePresence>
            {isJssSubject && (
              <motion.div
                className="w-full"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideInVariants}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h2 className="font-OpenSans py-4 text-[16px] italic font-semibold text-left leading-[44px]">
                  Subjects Offered at the Jss level
                </h2>
                <div className="flex w-full sm:flex-row flex-col justify-between items-start">
                  <BaseTable data={items} />
                  <BaseTable data={secondItem} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isSssSubject && (
              <motion.div
                className="w-full"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideInVariants}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <h2 className="font-OpenSans py-4 text-[16px] italic font-semibold text-left leading-[44px]">
                  Subjects Offered at the SSS level
                </h2>
                <div className="flex w-full sm:flex-row flex-col justify-between items-start">
                  <BaseTable data={sssitems} />
                  <BaseTable data={ssssecondItem} />
                  <BaseTable data={sssthirdItem} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default College;
