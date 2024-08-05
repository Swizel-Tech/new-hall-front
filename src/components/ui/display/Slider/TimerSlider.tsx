import React, { useRef } from "react";
import Slider from "react-slick";
import TimerOverlay from "../Slider/TimerOverlay ";
import { slider1, slider2, slider3, slider4 } from "../../../../assets";
import { motion } from "framer-motion";
import { FaInstagram, FaRegBell, FaTwitter, FaFacebook } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const TimerSlider: React.FC = () => {
  const autoplaySpeed = 3000;
  // const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

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
    // beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    lazyLoad: "ondemand" as "ondemand",
  };

  const boxVariants = {
    initial: { backgroundColor: "#FF014F" },
    hover: { backgroundColor: "#202942" },
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  // const slideHeight = "500px";

  return (
    <div className="relative w-full p-0 m-0">
      <div className="absolute flex flex-col justify-between items-center right-0 bottom-20 h-[280px] w-[80px] z-10">
        <button className="mb-7">
          <FaInstagram className="text-[#fff] text-[12px]" />
        </button>
        <button className="mb-7">
          <FaTwitter className="text-[#fff] text-[12px]" />
        </button>
        <button className="mb-14">
          <FaFacebook className="text-[#fff] text-[12px]" />
        </button>
        <button className="mb-7 p-0">
          <motion.div
            className="flex flex-col justify-between gap-10 items-center"
            initial={{ y: 0 }}
            whileHover={{ y: 15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="rotate-90  font-normal uppercase text-[#fff] text-[12px]">
              Explore
            </h2>
            <BsArrowDown className="text-[#fff] text-[18px]" />
          </motion.div>
        </button>
      </div>

      <Slider {...settings}>
        <div className="relative m-0 p-0 h-[800px]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
          <img
            src={slider1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative m-0 p-0 h-[800px]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
          <img
            src={slider2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative m-0 p-0 h-[800px]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
          <img
            src={slider3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative m-0 p-0 h-[800px]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
          <img
            src={slider4}
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
      <div className="absolute top-0 right-5">
        <TimerOverlay autoplaySpeed={autoplaySpeed} />
      </div>
      <div className="absolute flex bg-black mb-0 opacity-65 justify-center items-center bottom-0 w-full h-[60px]">
        <div className="w-[50%] flex justify-between items-center">
          <motion.button
            className="text-[14px] lg:block hidden text-[#fff] uppercase font-normal font-OpenSans text-center hover:text-[red]"
            initial={{ color: "#fff" }}
            whileHover={{ color: "red" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            News & Media
          </motion.button>
          <motion.button
            className="text-[14px] lg:block hidden text-[#fff] uppercase font-normal font-OpenSans text-center hover:text-[red]"
            initial={{ color: "#fff" }}
            whileHover={{ color: "red" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            Calendar
          </motion.button>
        </div>
      </div>
      <div className="left-0 flex flex-col justify-between items-center w-[60px] absolute bottom-0 h-[120px]">
        <motion.button
          className="text-[16px] w-full flex justify-center items-center h-[60px] text-[#fff] font-normal font-OpenSans text-center"
          initial="initial"
          whileHover="hover"
          variants={boxVariants}
          onClick={goToPrevSlide}
          transition={{ duration: 0.5 }}
          value="Send"
          type="submit"
        >
          <GoArrowRight className="text-[25px]" />
        </motion.button>
        <motion.button
          className="text-[16px] w-full flex justify-center items-center h-[60px] text-[#fff] font-normal font-OpenSans text-center"
          initial="initial"
          whileHover="hover"
          variants={boxVariants}
          onClick={goToNextSlide}
          transition={{ duration: 0.5 }}
          value="Send"
          type="submit"
        >
          <GoArrowLeft className="text-[25px]" />
        </motion.button>
      </div>
      <div className="">
        <button className="bg-[#FF014F] absolute bottom-0 right-2 w-[60px] h-[60px] font-normal flex justify-center items-center">
          <motion.div
            className="w-full h-full flex justify-center items-center"
            whileHover={{
              rotate: [0, -15, 15, -15, 15, 0], // Rotation values for shaking
              transition: {
                duration: 0.6, // Duration of the shaking effect
                repeat: 0, // Number of times the animation repeats
              },
            }}
          >
            <FaRegBell className="text-[20px] text-[#fff] font-normal font-OpenSans text-center" />
          </motion.div>
        </button>
      </div>
    </div>
  );
};

export default TimerSlider;
