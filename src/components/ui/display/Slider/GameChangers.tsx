import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

interface GameChanger {
  image: string;
  name: string;
}

interface SliderComponentProps {
  gamechanger: GameChanger[];
}

export const GameChangers: React.FC<SliderComponentProps> = ({
  gamechanger,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const controlsbottom = useAnimation();
  const { ref: refbottom, inView: inviewbottom } = useInView();

  const btnVariants = {
    initial: { backgroundColor: "#3D83F6" },
    hover: { backgroundColor: "#202942" },
  };

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

  return (
    <motion.div
      ref={refbottom}
      initial={{ y: "10%", opacity: 0 }}
      animate={controlsbottom}
      className="w-full px-4 overflow-x-auto overflow-y-hidden relative flex flex-col justify-center items-center bg-black h-[800px] py-8"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${gamechanger[0].image})` }}
      ></div>
      <div className="relative">
        <div className="absolute w-[50px] right-0 top-1/2 z-10 transform -translate-y-1/2">
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
        <div
          ref={sliderRef}
          className="flex justify-between items-center overflow-x-auto overflow-y-hidden scroll-container gap-4 h-[500px]"
        >
          {gamechanger.map((item, index) => (
            <motion.div
              key={index}
              className="relative m-0 p-0 cursor-pointer h-full flex-shrink-0 animate"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="w-[300px] h-full object-cover"
              />
              <div className="absolute h-[60px] flex justify-center items-center bottom-0 w-full bg-black z-10">
                <h2 className="text-[#3D83F6] font-semibold text-[16px] font-OpenSans uppercase">
                  {item.name}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-8 mt-10 z-10">
        <div className="flex justify-start items-center gap-3">
          <div className="w-[40px] h-[1px] bg-[#fff]"></div>
          <h2 className="uppercase font-OpenSans font-semibold text-[16px] text-[#fff]">
            Hear from
          </h2>
        </div>
        <h2 className="font-OpenSans mb-10 font-normal text-[18px] lg:text-[44px] leading-[61px] w-full text-[#fff]">
          Tomorrow’s leaders
        </h2>
      </div>
    </motion.div>
  );
};
