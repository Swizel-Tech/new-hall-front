// import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { slider2, slider4 } from "../assets";
import List from "../components/ui/list/List";
// import { menus } from "../components/data/constants";
// import { motion } from "framer-motion";
// import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
// import { GameChangers } from "../components/ui/display/Slider/GameChangers";
// import EventsCalendar from "../components/ui/display/Calendar/Calendar";

const AimsObjectives = () => {
  let navigate = useNavigate();
  // const [activeMenu, setActiveMenu] = useState("aims-and-objectives");
  // const [menuactive, setmenuactive] = useState(false);
  // const refbottom = useRef<HTMLDivElement>(null);

  // const images = [
  //   slider1,
  //   slider2,
  //   slider3,
  //   slider4,
  //   slider1,
  //   slider2,
  //   slider3,
  //   slider4,
  // ];

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
  //     imgSrc: slider2,
  //     date: "13 Sep",
  //     title: "Better Times Magazine - Issues 16",
  //   },
  //   {
  //     imgSrc: slider4,
  //     date: "13 Sep",
  //     title: "Better Times Magazine - Issues 16",
  //   },
  // ];

  const items = [
    {
      id: 1,
      description:
        "To impact knowledge through a broad and balanced curriculum.",
    },
    {
      id: 2,
      description:
        "To teach students to work hard, take pride in their work and pay attention to details.",
    },
    {
      id: 3,
      description:
        "To develop necessary skills to make practical use of knowledge gained.",
    },
    {
      id: 4,
      description:
        "To inculcate good manners, behavior, courtesy and sense of responsibility to partner as a member of a civilized society, knowing the difference between right and wrong.",
    },
    {
      id: 5,
      description:
        "To encourage the awareness of the moral, religious, social, political and environmental issues of the day.",
    },
    {
      id: 6,
      description:
        "To maximize potentials in all spheres of work – academics, culture and sports.",
    },
    {
      id: 7,
      description:
        "To inspire in each generation of pupils an appreciation of their cultural heritage.",
    },
    {
      id: 8,
      description:
        "To ensure our pupils leave us at the completion of their course not only equipped for their further education, but also for life.",
    },
  ];
  const handleClick = () => {
    navigate("/home");
  };

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
    <div className="mt-10 lg:mt-[10rem]">
      <div className="">
        <div className="h-[120px] flex justify-start items-center">
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Aims & Objectives
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
            Aims & Objectives
          </p>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col lg:flex-row justify-between items-start">
          {/* <div className="border-[1px] shadow-xl mb-5 lg:mb-0 border-[#F3F3F3] w-full flex flex-col justify-start items-start lg:w-[20%]">
            <button
              className="bg-[#FF7264] px-2 w-full flex justify-between items-center"
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
                    className={`h-[50px] w-full text-[16px] font-OpenSans font-normal text-left border-b-[1px] hover:text-[#FF7264] px-3 ${
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
          <div className="w-full gap-6 flex flex-col justify-between items-center">
            <div className="w-full  flex flex-col justify-start items-start gap-2">
              <img src={slider2} alt="aims_and_obj" className="w-[100%]" />
              <List items={items} />
            </div>
            <div className="w-full  flex flex-col sm:flex-row justify-between items-center">
              <div className="w-full mr-4">
                <img src={slider4} alt="facility1" className="w-[100%]" />
                <h2 className="font-Raleway my-3 text-[26px] font-normal text-left leading-[44px]">
                  Our Vision
                </h2>
                <p className="font-Lato text-[16px] font-normal leading-[25.6px] text-justify">
                  To make New Hall a centre of excellence, aiming to attain the
                  highest level in areas of academics, morals, arts and sports
                  within a truly inclusive environment.
                </p>
              </div>
              <div className="w-full">
                <img src={slider4} alt="facility1" className="w-[100%]" />
                <h2 className="font-Raleway my-3 text-[26px] font-normal text-left leading-[44px]">
                  Our Mission
                </h2>
                <p className="font-Lato text-[16px] font-normal leading-[25.6px] text-justify">
                  Providing a rich learning environment by empowering every
                  child to develop his⁄her full potential between Home and
                  School.
                </p>
              </div>
            </div>

            <div className="w-full mt-2 lg:mt-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="w-full mr-4">
                <img src={slider2} alt="facility1" className="w-[100%]" />
                <h2 className="font-Raleway my-3 text-[26px] font-normal text-left leading-[44px]">
                  Core Beliefs
                </h2>
                <p className="font-Lato text-[16px] font-normal leading-[25.6px] text-justify">
                  To make New Hall a centre of excellence, aiming to attain the
                  highest level in areas of academics, morals, arts and sports
                  within a truly inclusive environment.
                </p>
              </div>
              <div className="w-full">
                <img src={slider2} alt="facility1" className="w-[100%]" />
                <h2 className="font-Raleway my-3 text-[26px] font-normal text-left leading-[44px]">
                  Pupil Care
                </h2>
                <p className="font-Lato text-[16px] font-normal leading-[25.6px] text-justify">
                  Providing a rich learning environment by empowering every
                  child to develop his⁄her full potential between Home and
                  School.
                </p>
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

export default AimsObjectives;
