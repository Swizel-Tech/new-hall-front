import { primary1, primary2, primary3 } from "../assets";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BaseTable } from "../components/table/Table";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
// import { GameChangers } from "../components/ui/display/Slider/GameChangers";
// import EventsCalendar from "../components/ui/display/Calendar/Calendar";

const Primary = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLowerPrimary, setIsLowerPrimary] = useState(false);
  const [isUpperPrimary, setIsUpperPrimary] = useState(false);

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
  // const refbottom = useRef<HTMLDivElement>(null);

  const items = [
    {
      SN: 1,
      Description: "MATHEMATICS/Quantitative Reasoning",
    },
    {
      SN: 2,
      Description: "English/Verbal Reasoning",
    },
    {
      SN: 3,
      Description: "Science",
    },
    {
      SN: 4,
      Description: "I.C.T",
    },
    {
      SN: 5,
      Description: "Art and Design",
    },
    {
      SN: 6,
      Description:
        "General Studies (Citizenship, History, Vocational Education)",
    },
    {
      SN: 7,
      Description: "Religious Education",
    },
    {
      SN: 8,
      Description:
        "Religious Education Language (French, Yoruba, Mandarin, Igbo)",
    },
    {
      SN: 9,
      Description: "Music",
    },
    {
      SN: 10,
      Description: "Physical and Health Education",
    },
  ];
  const slideInVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
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
  // const images = [slider1, slider2, slider3, slider4];

  // const handleViewNewsClick = () => {
  //   // Handle view news feed button click
  //   console.log("View News Feed button clicked");
  // };

  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div className="w-full">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-OpenSans px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Primary
          </h2>
        </div>
        <div className="px-4 my-6 lg:pb-[3rem] lg:px-[8%]">
          <div className="w-full mb-6">
            <p className="font-OpenSans border-b-[1px] border-[#ddd] pb-4 text-[16px] font-normal leading-[25.6px] text-justify">
              Each Year Group is known for its peculiarities such as multiple
              intelligence, literacy/verbal skills, numeracy skills, spatial
              skills, musical skills, oratorical skills.
            </p>
            <p className="font-OpenSans text-[16px] font-normal pt-4 leading-[25.6px] text-justify">
              At Graduation from Year 6, the set is distinguished, celebrated
              for excellence and published in the School Year Book. They carry
              out major group project as a parting gift, either to the community
              or the school.
            </p>
          </div>

          <div className="my-6 gap-4 flex flex-col lg:flex-row justify-between items-start">
            {/* <div className="border-[1px] shadow-xl mb-5 lg:mb-0 border-[#F3F3F3] w-full flex flex-col justify-start items-start lg:w-[25%]">
              <button
                className="bg-blue-500 px-2 w-full flex justify-between items-center"
                onClick={() => setmenuactive(!menuactive)}
              >
                <h2
                  className={`text-[16px] font-OpenSans font-normal w-full text-left p-3 text-[#fff]`}
                >
                  Subjects
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
                    Subjects Offered in Primary
                  </button>
                </motion.div>
              )}
            </div> */}
            <div className="w-full">
              <div className="w-full">
                <Slider {...settings}>
                  <div className="relative m-0 p-0 w-full">
                    <img
                      src={primary1}
                      alt="Slide 1"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative m-0 p-0 w-full">
                    <img
                      src={primary2}
                      alt="Slide 2"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="relative m-0 p-0 w-full">
                    <img
                      src={primary3}
                      alt="Slide 3"
                      className="w-full object-cover"
                    />
                  </div>
                </Slider>
              </div>
              {/* Lower primary */}
              <div className="w-full">
                <button
                  className={`font-OpenSans my-[2%] px-4 font-normal text-[24px] leading-[61px] flex justify-between items-center w-full ${
                    isDarkMode
                      ? "text-[#fff] border-[1px] border-[#ddd]"
                      : "text-[#000] border-[1px] border-[#000]"
                  }`}
                  onClick={() => setIsLowerPrimary(!isLowerPrimary)}
                >
                  <p>Lower Primary</p>
                  {isLowerPrimary ? (
                    <IoIosArrowUp className={`text-[#fff]`} />
                  ) : (
                    <IoIosArrowDown className={`text-[#fff]`} />
                  )}
                </button>
                {isLowerPrimary && (
                  <motion.div
                    className="w-full"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="font-OpenSans mt-4 text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
                      The British and the Nigerian National Curriculum for
                      Primary Schools is used for these classes. However here at
                      New Hall, additional emergent global issues and
                      information are used to enhance the curriculum. Children
                      are given a lot of opportunities to learn, think and
                      reason. Each child is viewed as a unique person with
                      individual pattern and timing of growth.
                    </p>
                    <p className="font-OpenSans text-[16px] my-4 font-semibold italic leading-[25.6px] text-justify">
                      During the early years of elementary education we seek:
                    </p>
                    <ul className="list-disc px-4 my-4">
                      <li className="font-OpenSans text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                        To ensure pupils receive optimum tuition in order to
                        maximize attainment and enhance their general
                        development
                      </li>
                      <li className="font-OpenSans text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                        To offer the right challenges within a well supervised
                        and caring environment to enhance self-esteem and
                        confidence.
                      </li>
                      <li className="font-OpenSans text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                        To emphasize the importance of developing the core
                        skills in literacy and numeracy
                      </li>
                      <li className="font-OpenSans text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                        To advise, guide and train the child to develop
                        appropriate behavioural skill at individual and group
                        levels
                      </li>
                      <li className="font-OpenSans text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                        To provide a stimulating and enjoyable learning
                        environment in which happiness and application flourish
                        side by side
                      </li>
                    </ul>
                    <p className="font-OpenSans text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
                      To offer further specialist tuition, if needed, to pupils
                      experiencing difficulties in satisfactory performance
                      levels
                    </p>
                  </motion.div>
                )}
              </div>
              {/* upper primary */}
              <div className="w-full">
                <button
                  className={`font-OpenSans my-[2%] px-4 font-normal text-[24px] leading-[61px] flex justify-between items-center w-full ${
                    isDarkMode
                      ? "text-[#fff] border-[1px] border-[#ddd]"
                      : "text-[#000] border-[1px] border-[#000]"
                  }`}
                  onClick={() => setIsUpperPrimary(!isUpperPrimary)}
                >
                  <p>Upper Primary</p>
                  {isUpperPrimary ? (
                    <IoIosArrowUp className={`text-[#fff]`} />
                  ) : (
                    <IoIosArrowDown className={`text-[#fff]`} />
                  )}
                </button>

                {isUpperPrimary && (
                  <motion.div
                    className="w-full"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="font-OpenSans text-[16px] mb-6 font-normal leading-[25.6px] text-justify">
                      Without losing sight of the initial objectives, this stage
                      extends the challenges offered and the demands to be
                      faced. The curriculum becomes more specialized with the
                      addition of new knowledge and skill training. Therefore,
                      the emphasis on core skills continues, but increasingly
                      these skills are used to seek and find information and
                      solve problems. The use of new technologies in science and
                      development of practical skills through art and craft
                      initiate the children into the modern world.
                    </p>
                    <p className="font-OpenSans text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
                      The level of demand in terms of self-discipline and
                      personal organization are raised and responsibilities are
                      increased at both individual and group levels.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          <div className="my-4 w-full">
            <motion.div
              className="w-full"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideInVariants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h2 className="font-OpenSans py-4 text-[16px] font-semibold text-left leading-[44px]">
                Subjects Offered in Primary
              </h2>
              <div className="flex w-full sm:flex-row flex-col justify-between items-start">
                <BaseTable data={items} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primary;
