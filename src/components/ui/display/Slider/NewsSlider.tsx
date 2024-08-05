import React, { useRef } from "react";
import { motion } from "framer-motion";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { LiaDotCircle } from "react-icons/lia";

interface NewsItem {
  imgSrc: string;
  date: string;
  title: string;
}

interface NewsSliderProps {
  newsItems: NewsItem[];
  title: string;
  viewNewsText: string;
  onViewNewsClick: () => void;
}

const btnVariants = {
  initial: { backgroundColor: "#3D83F6" },
  hover: { backgroundColor: "#202942" },
};
export const NewsSlider: React.FC<NewsSliderProps> = ({
  newsItems,
  title,
  viewNewsText,
  onViewNewsClick,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full p-0 relative flex justify-center items-center flex-col">
      <div className="w-full mt-10 mb-8 lg:mb-[10rem] border-b-[1px] border-[#b9b6b6] flex  lg:w-[90%] justify-between items-center p-0">
        <div className="flex justify-start items-center gap-4  w-[50%] lg:w-[80%]">
          <LiaDotCircle className="text-[50px]" />
          <h2 className="text-[42px] font-OpenSans text-left font-normal text-[#000] leading-[54.6px]">
            {title}
          </h2>
        </div>
        <motion.button
          className="text-[15px] w-[50%] lg:w-[10%] h-full border-b-[2px] text-center border-[#000] uppercase font-OpenSans font-normal text-[#000] leading-[117px]"
          whileHover={{
            borderColor: "#BC0E0E",
            color: "#BC0E0E",
          }}
          transition={{ duration: 0.5 }}
          onClick={onViewNewsClick}
        >
          {viewNewsText}
        </motion.button>
      </div>
      <div className="relative px-8 pb-8 lg:pb-[8rem] w-full py-6 bg-[#F8E6E6]">
        <div className="absolute w-[50px] right-8 top-1/4 z-10 transform -translate-y-1/2">
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
        </div>
        <div
          ref={sliderRef}
          className="flex justify-between items-center overflow-x-auto scroll-container gap-8 h-[400px]"
        >
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative shadow-2xl m-0 p-0 cursor-pointer h-full flex-shrink-0"
            >
              <img
                src={item.imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-[380px] h-full object-cover"
              />
              <div className="px-6 py-2 bg-[#fff] absolute bottom-[160px]">
                <h2 className="text-[#000] text-left font-normal text-[16px] font-OpenSans uppercase">
                  {item.date}
                </h2>
              </div>
              <div className="absolute p-6 h-[40%] bottom-0 w-full  bg-[#fff] z-10">
                <h2 className="text-[#000] text-left font-normal text-[16px] font-OpenSans uppercase">
                  {item.title}
                </h2>
                <button className="absolute bottom-0 right-0 bg-black text-white p-3">
                  <GoArrowRight className="text-[20px]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
