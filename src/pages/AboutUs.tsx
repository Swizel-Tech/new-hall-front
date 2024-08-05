// import { useRef } from "react";
// import { SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { Director, british, AISEN } from "../assets";
import Accordion from "../components/ui/display/accordion/Accordion";
// import { menus } from "../components/data/constants";
// import { motion } from "framer-motion";
// import { FaPlus, FaMinus } from "react-icons/fa6";
// import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
// import { slider1, slider2, slider3, slider4 } from "../assets";
// import { GameChangers } from "../components/ui/display/Slider/GameChangers";
// import EventsCalendar from "../components/ui/display/Calendar/Calendar";

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
//     imgSrc: slider1,
//     date: "13 Sep",
//     title: "Better Times Magazine - Issues 16",
//   },
// ];

const AboutUs = () => {
  // const refbottom = useRef<HTMLDivElement>(null);
  let navigate = useNavigate();
  // const [activeMenu, setActiveMenu] = useState("aboutus");
  // const [menuactive, setmenuactive] = useState(false);
  const accordionItems = [
    {
      title: "Vision",
      content:
        "To make New Hall a centre of excellence, aiming to attain the highest level in areas of academics, morals, arts and sports within a truly inclusive environment.",
    },
    {
      title: "Our Mission Statement",
      content:
        "Providing a rich learning environment by empowering every child to develop his⁄her full potential between Home and School.",
    },
  ];
  const handleClick = () => {
    navigate("/home");
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
  // const handleMenuClick = (menu: { href: SetStateAction<string> }) => {
  //   setActiveMenu(menu.href);
  //   navigate(`/${menu.href}`);
  // };
  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center bg-[#F3F3F3]`}
        >
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            About Us
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
            About Us
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
          <div className="w-full flex justify-between items-start flex-col lg:flex-row gap-6">
            <img src={Director} alt="Director" />
            <div className="flex flex-col justify-between items-start">
              <h2 className="font-Raleway mb-8 text-[36px] font-normal text-left leading-[44px]">
                Director’s Welcome
              </h2>
              <p className="font-Lato text-[16px] font-normal leading-[25.6px] text-justify">
                Welcome to New Hall International School Lekki, a new dawn in
                all-round child education with a first class customized
                curriculum to give an edge start to our children in life. New
                Hall International School is a co-educational, multicultural
                School situated in a quiet, leafy campus inside Chevy view
                estate, Lekki.
              </p>
              <p className="font-Lato mt-4 text-[16px] font-normal leading-[25.6px] text-justify">
                The primary focus of our Montessori program is to prepare an
                environment that supports the physical, cognitive, social and
                emotional development of each child. Our children are inspired
                and motivated by gifted and well trained teachers in an
                environment that is stimulating and exciting for every child to
                be happy and safe and which allows every child to discover his
                or her God’s given talents.
              </p>
              <div className="mt-4 lg:mt-[10%]">
                <span className="font-Lato text-[16px] font-bold mr-4 leading-[25.6px] text-justify">
                  Mr Biodun Agbaje
                </span>
                <span className="font-Lato text-[16px] font-normal leading-[25.6px] text-justify">
                  School Director
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col lg:flex-row justify-between items-start">
          <div className=" w-full flex flex-col justify-start items-start lg:w-[65%]">
            <h2 className="font-Raleway mb-8 text-[36px] font-normal text-left leading-[44px]">
              Introduction
            </h2>
            <p className="font-Lato mt-4 text-[16px] font-normal leading-[25.6px] text-justify">
              New Hall International School Lekki is an integral part of the
              community both educationally and socially. The School looks bright
              and welcoming. We have a beautiful learning environment for our
              children with world-class teaching and learning facilities. Our
              school offers a wide range of learning experiences from academics
              to morals and sports. Our curriculum is a unique blend of British
              and Nigeria based on our philosophy that children’s heritage and
              culture should be preserved even in attempts at internationalism.
              However, we run full Montessori in our Nursery school. Our school
              utilizes active learning, creative thinking, global awareness ,
              I.C.T. and other 21st century learning approaches in our
              classrooms. The school collaborates with parents and various
              stakeholders as well as international educational agencies to
              deliver the best learning outcomes for every child.
            </p>
          </div>
          <div className=" w-full flex flex-col justify-start items-start lg:w-[30%]">
            <h2 className="font-Raleway mb-8 text-[36px] font-normal text-left leading-[44px]">
              Mission & Vision
            </h2>
            <Accordion items={accordionItems} />
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
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col sm:flex-row justify-between items-start">
          <div className=" w-full flex flex-col justify-start items-start lg:w-[65%]">
            <h2 className="font-Raleway mb-8 text-[26px] lg:text-[36px] font-normal text-left leading-[44px]">
              Membership/Partnership
            </h2>
            <div className="flex justify-start overflow-x-auto items-center gap-4">
              <img src={british} alt="british" className=" p-3" />
              <img src={AISEN} alt="AISEN" className=" p-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
