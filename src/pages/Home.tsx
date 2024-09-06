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
  slider4,
  homeslider1,
  homeslider2,
  homeslider3,
  dronshot,
} from "../assets";
import Slider from "react-slick";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
import { GameChangers } from "../components/ui/display/Slider/GameChangers";
import EventsCalendar from "../components/ui/display/Calendar/Calendar";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaAward } from "react-icons/fa";
import { get_all_event, get_blogs } from "../utils/apiService";
import { format } from "date-fns";

const autoplaySpeed = 3000;

type GameChanger = {
  image: string;
  name: string;
};

interface NewsArticle {
  _id: string;
  imgSrc: string;
  date: string;
  title: string;
}

const Home = () => {
  let navigate = useNavigate();
  const controlsLeft = useAnimation();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isvideoPlay, setIsvideoPlay] = useState(true);
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  const [events, setEvents] = useState([
    {
      date: "",
      title: "",
    },
  ]);
  const controlsbottom = useAnimation();
  const sliderRef = useRef<Slider>(null);
  const { ref: refbottom, inView: inviewbottom } = useInView();

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

  const gamechanger: GameChanger[] = [
    { image: Folawiyo, name: "Folawiyo, Teniola Bolanle" },
    { image: GREGORY, name: "GREGORY ASHLEY OLERE" },
    { image: ISHOLA, name: "ISHOLA FATIAH AGBEKE" },
    { image: LADENEGAN, name: "LADENEGAN OLUWADARA RACHAEL" },
    { image: OBAIGBENA, name: "OBAIGBENA CHIMAIJEM" },
    { image: OJEBA, name: "OJEBA RAFFERTY" },
    { image: UANZEKIN, name: "UANZEKIN OHIREME BOLUWATIFE" },
  ];

  // const handleViewNewsClick = () => {
  //   navigate("/news");
  // };

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
        void image.offsetWidth;
        image.classList.add("animate");
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isvideoPlay) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
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

  useEffect(() => {
    if (inviewbottom) {
      controlsbottom.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controlsbottom.start({ y: "10%", opacity: 0 });
    }
  }, [controlsbottom, inviewbottom]);

  const btnVariants = {
    initial: { backgroundColor: "#3D83F6" },
    hover: { backgroundColor: "#202942" },
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Access slickPrev from Slider instance
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Access slickNext from Slider instance
    }
  };

  const getallEvent = async () => {
    try {
      const allEvent = await get_all_event();
      const sortedEvents = allEvent.data.sort(
        (
          a: { createdAt: string | number | Date },
          b: { createdAt: string | number | Date }
        ) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      const recentEvents = sortedEvents.slice(0, 2);
      const formattedEvents = recentEvents.map((event: any) => ({
        date: new Date(event.startDate).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        title: event.title,
      }));

      setEvents(formattedEvents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallEvent();
  }, []);

  const getAllNews = async () => {
    try {
      const blogs = await get_blogs();
      const mappedData = blogs.data.map((item: any) => ({
        _id: item._id,
        imgSrc:
          item.images && item.images.length > 0
            ? item.images[0]
            : "fallback-image-url",
        title: item.title,
        date: format(new Date(item.createdAt), "MMM do, yyyy"),
      }));

      setNewsData(mappedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNews();
    console.log("NWWWWWWW", newsData);
  }, []);

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
              <img
                src={homeslider1}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative m-0 p-0">
              <img
                src={homeslider2}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative m-0 p-0">
              <img
                src={homeslider3}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
          </Slider>
        </motion.div>
      </div>
      <div>
        <GameChangers gamechanger={gamechanger} />
      </div>
      {/* <div>
        <NewsSlider
          newsItems={newsData}
          title="News"
          viewNewsText="View News Feed"
          onViewNewsClick={handleViewNewsClick}
        />
      </div> */}
      {/*  */}
      <motion.div
        ref={refbottom}
        initial={{ y: "100%", opacity: 0 }}
        animate={controlsbottom}
        className="w-full pl-4 pr-0 overflow-x-auto overflow-y-hidden relative flex flex-col justify-center items-center bg-black h-[600px] lg:h-[300px] py-8"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${slider4})` }}
        ></div>
        <div className="lg:absolute lg:top-0 h-[200px] lg:left-8 mt-10 z-10">
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
        <div className="relative w-full h-[150px] lg:h-[30px]">
          <div className="absolute hidden lg:block w-[50px] right-0 top-1/2 z-10 transform -translate-y-1/2">
            <motion.button
              className="text-[16px] w-full flex justify-center items-center h-[60px] text-[#fff] font-normal font-OpenSans text-center"
              initial="initial"
              whileHover="hover"
              variants={btnVariants}
              onClick={scrollLeft}
              transition={{ duration: 0.5 }}
              type="button"
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
              type="button"
            >
              <GoArrowLeft className="text-[20px]" />
            </motion.button>
          </div>
          <Slider
            ref={sliderRef}
            {...settings}
            className="flex justify-between items-center overflow-x-auto scroll-container gap-8 h-[400px]"
          >
            <div className="m-0 h-full p-0">
              <div className="flex justify-start items-center gap-4">
                <FaAward className="text-[14px] hidden lg:block text-orange-400 lg:text-[20px] " />
                <h2 className="font-OpenSans font-semibold text-[16px] lg:text-[22px] text-[#fff]">
                  AISEN Spelling Bee Competition (Junior Category State Level)
                  March 2024 - 1st Position
                </h2>
              </div>
              <div className="flex justify-start items-center gap-4">
                <FaAward className="text-[14px]  hidden lg:block text-orange-400 lg:text-[20px] " />
                <h2 className="font-OpenSans font-semibold text-[16px] lg:text-[22px] text-[#fff]">
                  AISEN Mathematics Competition 2023/2024 September 2023 – 2nd
                  Position
                </h2>
              </div>
              <div className="flex justify-start items-center gap-4">
                <FaAward className="text-[14px] text-orange-400  hidden lg:block lg:text-[20px] " />
                <h2 className="font-OpenSans font-semibold text-[16px] lg:text-[22px] text-[#fff]">
                  Olympiad Mathematics Competition 2023 - 1 gold, 3 silver, 1
                  bronze
                </h2>
              </div>
            </div>
            <div className="m-0  h-full lg:h-[300px] p-0">
              <div className="flex justify-start items-center gap-4">
                <FaAward className="text-[14px] text-orange-400  hidden lg:block lg:text-[20px] " />
                <h2 className="font-OpenSans font-semibold text-[16px] lg:text-[22px] text-[#fff]">
                  AISEN Mathematics Competition 2022/2023 session - 15th
                  October, 2022 – 2nd Position
                </h2>
              </div>
              <div className="flex justify-start items-center gap-4">
                <FaAward className="text-[14px] text-orange-400  hidden lg:block lg:text-[20px] " />
                <h2 className="font-OpenSans font-semibold text-[16px] lg:text-[22px] text-[#fff]">
                  National Spelling Bee Competition (Junior Category State
                  Level) June 2022- 1st Position
                </h2>
              </div>
              <div className="flex justify-start items-center gap-4">
                <FaAward className="text-[14px] text-orange-400  hidden lg:block lg:text-[20px] " />
                <h2 className="font-OpenSans font-semibold text-[16px] lg:text-[22px] text-[#fff]">
                  AISEN Spelling Bee Competition Key Stage 1 – 12th March, 2022
                  – 1st Position
                </h2>
              </div>
            </div>
            <div className="m-0  h-full lg:h-[300px] p-0">
              <div className="flex justify-start items-center gap-4">
                <FaAward className="text-[14px] text-orange-400  hidden lg:block lg:text-[20px] " />
                <h2 className="font-OpenSans font-semibold text-[16px] lg:text-[22px] text-[#fff]">
                  AISEN Spelling Bee Competition Key Stage 2 – 12th March, 2022
                  – 1st position
                </h2>
              </div>
              <div className="flex justify-start items-center gap-4">
                <FaAward className="text-[14px] text-orange-400  hidden lg:block lg:text-[20px] " />
                <h2 className="font-OpenSans font-semibold text-[16px] lg:text-[22px] text-[#fff]">
                  African Best in class School of the Year Award 2022 - April,
                  2022
                </h2>
              </div>
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
