import { useEffect, useRef, useState } from "react";
import TimerSlider from "../components/ui/display/Slider/TimerSlider";
import {
  ND4_9495,
  ND4_9507,
  ND4_9515,
  ND4_9537,
  ND4_500_5151,
  ND4_500_5174,
  ND4_500_5246,
  ND4_500_5247,
  ND4_500_5282,
  ND4_500_5286,
} from "../assets";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CircularProgressBar } from "../components/ui/display/accordion/CircularProgressBar";
import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
import { GameChangers } from "../components/ui/display/Slider/GameChangers";
import EventsCalendar from "../components/ui/display/Calendar/Calendar";

const autoplaySpeed = 3000;
const newsItems = [
  {
    imgSrc: ND4_500_5151,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
  {
    imgSrc: ND4_500_5174,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
  {
    imgSrc: ND4_500_5246,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
  {
    imgSrc: ND4_500_5247,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
  {
    imgSrc: ND4_500_5282,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
  {
    imgSrc: ND4_500_5286,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
];

const Home = () => {
  const controlsLeft = useAnimation();
  const [percentage] = useState(70);
  const [teachers] = useState(90);
  const refbottomn = useRef<HTMLDivElement>(null);

  const { ref: refLeft, inView: inViewLeft } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1.5 },
      });
    } else {
      controlsLeft.start({ x: "-15%", opacity: 0 });
    }
  }, [controlsLeft, inViewLeft]);

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

  const boxVariants = {
    initial: { y: 0, backgroundColor: "#F8E6E6" },
    hover: { y: -10, backgroundColor: "#BC0E0E" },
  };

  const scrollrrLeft = () => {
    if (refbottomn.current) {
      refbottomn.current.scrollBy({
        left: -refbottomn.current.clientWidth,
        behavior: "smooth",
      });
    }
  };
  const events = [
    { date: "22 Aug 2024", title: "A-level Result Day" },
    { date: "15 Aug 2024", title: "GCSE Result Day" },
    // Add more events here if needed
  ];
  const scrollrrRight = () => {
    if (refbottomn.current) {
      refbottomn.current.scrollBy({
        left: refbottomn.current.clientWidth,
        behavior: "smooth",
      });
    }
  };
  const images = [ND4_9515, ND4_9537, ND4_9495, ND4_9507, ND4_9515, ND4_9537];

  const handleViewNewsClick = () => {
    // Handle view news feed button click
    console.log("View News Feed button clicked");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const images = document.querySelectorAll<HTMLElement>(".image-slide");
      images.forEach((image) => {
        image.classList.remove("animate");
        void image.offsetWidth; // Trigger reflow
        image.classList.add("animate");
      });
    }, 10000); // Time must be equal to animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <TimerSlider />
      <div className="flex flex-col lg:flex-row  justify-between items-center relative w-full">
        <div className="w-full lg:w-[60%] px-4 lg:px-[6rem] py-4 lg:py-[4rem] relative bg-[#F8E6E6]">
          <motion.div
            ref={refLeft}
            initial={{ x: "-5%", opacity: 0 }}
            animate={controlsLeft}
          >
            <div className="flex justify-start items-center gap-3">
              <div className="w-[40px] h-[1px] bg-[#BC0E0E]"></div>
              <h2 className="uppercase font-OpenSans font-semibold text-[16px] text-[#BC0E0E]">
                Introduction
              </h2>
            </div>
            <h2 className="font-OpenSans  mt-10 font-normal text-[44px] leading-[61px] w-full lg:w-[40%] text-[#000]">
              Welcome to
            </h2>
            <h2 className="font-OpenSans mb-10 font-normal text-[44px] leading-[61px] w-full lg:w-[60%] text-[#BC0E0E]">
              New Hall International Schools
            </h2>
            <p className="font-OpenSans font-normal w-full lg:w-[80%] text-[18px] text-left text-[#3B3B3B]">
              New Hall International runs academic programmes in Pre -Nursery,
              Nursery, Primary and Secondary education as approved by Lagos
              State Ministry of Education and in line with International Schools
              Standards. Emphasis is on National and British curricula. Using
              their professional expertise, the school management and teaching
              staff delivers a robust scheme of work in various subjects based
              on both curricula. The results are strong and very vast learners
              who thrive above and ahead of their contemporaries, can hold their
              own both home and abroad.
            </p>
            <motion.button
              className="text-[14px] w-[50%] lg:w-[15%] mt-7 flex uppercase justify-center items-center h-[50px] text-[#BC0E0E] font-normal font-OpenSans text-center hover:text-[#fff]"
              initial="initial"
              whileHover="hover"
              variants={boxVariants}
              // onClick={goToNextSlide}
              transition={{ duration: 0.5 }}
              value="Send"
              type="submit"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className="w-full lg:w-[40%] lg:absolute left-[54%] bg-[#F8E6E6] lg:bg-transparent"
          // ref={refRight}
          // initial={{ x: "5%", opacity: 0 }}
          // animate={controlsRight}
        >
          <Slider {...settings}>
            <div className="relative m-0 p-0 w-[100%]">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={ND4_9495}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative m-0 p-0">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={ND4_9507}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative m-0 p-0">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={ND4_9515}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative m-0 p-0">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={ND4_9537}
                alt="Slide 4"
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
        </motion.div>
      </div>
      <div>
        <GameChangers
          images={images}
          scrollLeft={scrollrrLeft}
          scrollRight={scrollrrRight}
        />
      </div>
      <div>
        <NewsSlider
          newsItems={newsItems}
          title="News"
          viewNewsText="View News Feed"
          onViewNewsClick={handleViewNewsClick}
        />
      </div>
      {/*  */}
      <motion.div
        // ref={refbottom}
        // initial={{ y: "100%", opacity: 0 }}
        // animate={controlsbottom}
        className="w-full px-4 overflow-x-auto relative flex flex-col justify-center items-center bg-black h-[600px] py-8"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${ND4_500_5282})` }}
        ></div>
        <div className="absolute top-0 left-8 mt-10 z-10">
          <div className="flex justify-start items-center gap-3">
            <div className="w-[40px] h-[1px] bg-[#fff]"></div>
            <h2 className="uppercase font-OpenSans font-semibold text-[16px] text-[#fff]">
              Statistics
            </h2>
          </div>
          <h2 className="font-OpenSans mb-10 font-normal text-[44px] leading-[61px] w-full text-[#fff]">
            Celebrating Success
          </h2>
        </div>
        <div className="relative w-full lg:w-[80%]">
          {/* <div className="absolute w-[50px] right-0 top-1/2 z-10 transform -translate-y-1/2">
            <motion.button
              className="text-[16px] w-full flex justify-center items-center h-[60px] text-[#fff] font-normal font-OpenSans text-center"
              initial="initial"
              whileHover="hover"
              variants={btnVariants}
              onClick={scrollLeft}
              transition={{ duration: 0.5 }}
              value="Send"
              type="submit"
            >
              <GoArrowRight className="text-[20px]" />
            </motion.button>
            <motion.button
              className="text-[16px] w-full flex justify-center items-center h-[60px] text-[#fff] font-normal font-OpenSans text-center"
              initial="initial"
              whileHover="hover"
              variants={btnVariants}
              onClick={scrollRight}
              transition={{ duration: 0.5 }}
              value="Send"
              type="submit"
            >
              <GoArrowLeft className="text-[20px]" />
            </motion.button>
          </div> */}
          <div
            // ref={sliderRef}
            className="flex justify-evenly items-center overflow-x-auto w-full scroll-container h-full"
          >
            <div className="m-0 p-0 cursor-pointer h-full flex flex-col justify-center items-center flex-shrink-0 animate">
              <CircularProgressBar
                percentage={teachers}
                text={`${teachers}%`}
              />
              <h2 className="font-OpenSans font-normal text-[18px] lg:text-[24px] text-[#fff]">
                Certified Teachers
              </h2>
            </div>
            <div className="m-0 p-0 cursor-pointer h-full flex-shrink-0 animate">
              <CircularProgressBar
                percentage={percentage}
                text={`${percentage}%`}
              />
              <h2 className="font-OpenSans font-normal text-[18px] lg:text-[24px] text-[#fff]">
                Students Enrolled
              </h2>
            </div>
            <div className="m-0 p-0 cursor-pointer h-full flex-shrink-0 animate">
              <CircularProgressBar
                percentage={percentage}
                text={`${percentage}%`}
              />
              <h2 className="font-OpenSans font-normal text-[18px] lg:text-[24px] text-[#fff]">
                Passing to Universities
              </h2>
            </div>
            <div className="m-0 p-0 cursor-pointer h-full flex-shrink-0 animate">
              <CircularProgressBar
                percentage={percentage}
                text={`${percentage}%`}
              />
              <h2 className="font-OpenSans font-normal text-[18px] lg:text-[24px] text-[#fff]">
                Satisfied Parents
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
      {/*  */}
      <div>
        <EventsCalendar events={events} />
      </div>
    </div>
  );
};

export default Home;
