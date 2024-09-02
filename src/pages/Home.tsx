import { useEffect, useRef, useState } from "react";
import TimerSlider from "../components/ui/display/Slider/TimerSlider";
import {
  Folawiyo,
  GREGORY,
  ISHOLA,
  LADENEGAN,
  OBAIGBENA,
  OJEBA,
  UANZEKIN,
  slider1,
  slider2,
  slider3,
  slider4,
  homeslider1,
  homeslider2,
  homeslider3,
  homeslider4,
  dronshot,
} from "../assets";
import Slider from "react-slick";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
import { GameChangers } from "../components/ui/display/Slider/GameChangers";
import EventsCalendar from "../components/ui/display/Calendar/Calendar";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";

const autoplaySpeed = 3000;
const newsItems = [
  {
    imgSrc: slider1,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
  {
    imgSrc: slider2,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
  {
    imgSrc: slider3,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
  {
    imgSrc: slider4,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
  {
    imgSrc: slider3,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
  {
    imgSrc: slider4,
    date: "13 Sep",
    title: "Better Times Magazine - Issues 16",
  },
];

type GameChanger = {
  image: string;
  name: string;
};

const Home = () => {
  let navigate = useNavigate();
  const controlsLeft = useAnimation();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isvideoPlay, setIsvideoPlay] = useState(true);

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
  // const sliderRef = useRef<HTMLDivElement>(null);

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
    initial: { y: 0, backgroundColor: "#3D83F6" },
    hover: { y: -10, backgroundColor: "#5c93ec" },
  };

  const events = [
    { date: "22 Aug 2024", title: "A-level Result Day" },
    { date: "15 Aug 2024", title: "GCSE Result Day" },
    // Add more events here if needed
  ];

  const gamechanger: GameChanger[] = [
    { image: Folawiyo, name: "Folawiyo, Teniola Bolanle" },
    { image: GREGORY, name: "GREGORY ASHLEY OLERE" },
    { image: ISHOLA, name: "ISHOLA FATIAH AGBEKE" },
    { image: LADENEGAN, name: "LADENEGAN OLUWADARA RACHAEL" },
    { image: OBAIGBENA, name: "OBAIGBENA CHIMAIJEM" },
    { image: OJEBA, name: "OJEBA RAFFERTY" },
    { image: UANZEKIN, name: "UANZEKIN OHIREME BOLUWATIFE" },
  ];

  const handleViewNewsClick = () => {
    navigate("/news");
  };

  // const sliderRef = useRef<HTMLDivElement>(null);

  // const scrollLeft = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.scrollBy({ left: -380, behavior: "smooth" });
  //   }
  // };
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

  useEffect(() => {
    if (isvideoPlay) {
      // Disable scrolling
      document.body.classList.add("no-scroll");
    } else {
      // Re-enable scrolling
      document.body.classList.remove("no-scroll");
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isvideoPlay]);

  const handleNavigate = () => {
    navigate("/aboutus");
  };

  const handleVideoEnd = () => {
    setIsvideoPlay(false);
  };

  return (
    <div className="relative">
      <TimerSlider />
      <div
        className="flex flex-col lg:flex-row  justify-between items-center relative w-full"
        id="story"
      >
        <div
          className={`w-full lg:w-[60%] px-4 lg:px-[6rem] py-4 lg:py-[4rem] relative ${
            isDarkMode ? "bg-transparent" : "bg-[#ddd]"
          }`}
        >
          <motion.div
            ref={refLeft}
            initial={{ x: "-5%", opacity: 0 }}
            animate={controlsLeft}
          >
            <div className="flex justify-start items-center gap-3">
              <div className="w-[40px] h-[1px] bg-[#3D83F6]"></div>
              <h2 className="uppercase font-OpenSans font-semibold text-[16px] text-[#3D83F6]">
                Introduction
              </h2>
            </div>
            <h2
              className={`font-OpenSans  mt-10 font-normal text-[44px] leading-[61px] w-full lg:w-[40%] ${
                isDarkMode ? "text-[#fff]" : "text-[#3B3B3B]"
              }`}
            >
              Welcome to
            </h2>
            <h2 className="font-OpenSans mb-10 font-normal text-[44px] leading-[61px] w-full lg:w-[60%] text-[#3D83F6]">
              New Hall International Schools
            </h2>
            <p
              className={`font-OpenSans font-normal w-full lg:w-[80%] text-[18px] text-left ${
                isDarkMode ? "text-[#fff]" : "text-[#3B3B3B]"
              }`}
            >
              New Hall International runs academic programmes in Pre-Nursery,
              Nursery, Primary and Secondary education as approved by Lagos
              State Ministry of Education and in line with International Schools
              Standards. Emphasis is on National and British curricula. Using
              their professional expertise, the school management and teaching
              staff deliver a robust scheme of work in various subjects based on
              both curricula. The results are strong and very vast learners who
              thrive above and ahead of their contemporaries and can hold their
              own both home and abroad.
            </p>
            <motion.button
              className="text-[14px] w-[50%] lg:w-[15%] mt-7 flex uppercase justify-center items-center h-[50px] text-[#fff] font-normal font-OpenSans text-center hover:text-[#fff]"
              initial="initial"
              whileHover="hover"
              variants={boxVariants}
              // onClick={goToNextSlide}
              transition={{ duration: 0.5 }}
              value="Send"
              type="submit"
              onClick={handleNavigate}
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className={`w-full lg:w-[40%] lg:absolute left-[54%] bg-[#F8E6E6] lg:bg-transparent ${
            isDarkMode ? "bg-transparent" : "bg-[#fff]"
          }`}
          // ref={refRight}
          // initial={{ x: "5%", opacity: 0 }}
          // animate={controlsRight}
        >
          <Slider {...settings}>
            <div className="relative m-0 p-0 w-[100%]">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={homeslider1}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative m-0 p-0">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={homeslider2}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative m-0 p-0">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={homeslider3}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative m-0 p-0">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={homeslider4}
                alt="Slide 4"
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
        </motion.div>
      </div>
      <div>
        <GameChangers gamechanger={gamechanger} />
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
          style={{ backgroundImage: `url(${slider4})` }}
        ></div>
        <div className="lg:absolute lg:top-0 lg:left-8 mt-10 z-10">
          <div className="flex justify-start items-center gap-3">
            <div className="w-[40px] h-[1px] bg-[#fff]"></div>
            <h2 className="uppercase font-OpenSans font-semibold text-[16px] text-[#fff]">
              Achievements
            </h2>
          </div>
          <h2 className="font-OpenSans mb-10 font-normal text-[44px] leading-[61px] w-full text-[#fff]">
            Celebrating Success
          </h2>
        </div>
        <div className="w-full h-full lg:h-[300px]">
          <Slider {...settings}>
            <div className="m-0 h-full p-0">
              <h2 className="font-OpenSans font-semibold text-[18px] lg:text-[22px] mt-4 text-[#fff]">
                AISEN Spelling Bee Competition (Junior Category State Level)
                March 2024 - 1st Position
              </h2>
              <h2 className="font-OpenSans font-semibold text-[18px] lg:text-[22px] mt-4 text-[#fff]">
                AISEN Mathematics Competition 2023/2024 September 2023 – 2nd
                Position
              </h2>
              <h2 className="font-OpenSans font-semibold text-[18px] lg:text-[22px] mt-4 text-[#fff]">
                Olympiad Mathematics Competition 2023 - 1 gold, 3 silver, 1
                bronze
              </h2>
            </div>
            <div className="m-0  h-full lg:h-[300px] p-0">
              <h2 className="font-OpenSans font-semibold text-[18px] lg:text-[22px] mt-4 text-[#fff]">
                AISEN Mathematics Competition 2022/2023 session - 15th October,
                2022 – 2nd Position
              </h2>
              <h2 className="font-OpenSans font-semibold text-[18px] lg:text-[22px] mt-4 text-[#fff]">
                National Spelling Bee Competition (Junior Category State Level)
                June 2022- 1st Position
              </h2>
              <h2 className="font-OpenSans font-semibold text-[18px] lg:text-[22px] mt-4 text-[#fff]">
                AISEN Spelling Bee Competition Key Stage 1 – 12th March, 2022 –
                1st Position
              </h2>
            </div>
            <div className="m-0  h-full lg:h-[300px] p-0">
              <h2 className="font-OpenSans font-semibold text-[18px] lg:text-[22px] mt-4 text-[#fff]">
                AISEN Spelling Bee Competition Key Stage 2 – 12th March, 2022 –
                1st position
              </h2>
              <h2 className="font-OpenSans font-semibold text-[18px] lg:text-[22px] mt-4 text-[#fff]">
                African Best in class School of the Year Award 2022 - April,
                2022
              </h2>
            </div>
          </Slider>
        </div>
      </motion.div>
      <div>
        <EventsCalendar events={events} />
      </div>
      {isvideoPlay && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isvideoPlay ? 1 : 0,
              y: isvideoPlay ? 0 : -20,
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed shadow-lg bottom-0 left-0 right-0 top-0 z-[9999] bg-[#000] bg-opacity-60 flex h-full min-h-screen w-full items-center justify-center overflow-y-auto"
          >
            <div
              ref={tooltipRef}
              className="relative mb-32 h-auto max-h-[540px] w-[50%] p-1 overflow-y-auto bg-[#fff] shadow-md [@media(max-width:1200px)]:w-[50%] [@media(max-width:700px)]:w-[90%]"
            >
              <button
                className="absolute top-2 z-[99999] text-[#000] right-2"
                onClick={() => setIsvideoPlay(false)}
              >
                <MdCancel fontSize={20} />
              </button>
              <video
                width="100%"
                height="100%"
                controls
                autoPlay
                muted
                onEnded={handleVideoEnd}
              >
                <source src={dronshot} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Home;
