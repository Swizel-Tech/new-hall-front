import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CBEN9771,
  david,
  FJA1,
  LEG,
  LEG_4153,
  entrance,
} from "../../../../assets";

export const Gallery = () => {
  const images = [CBEN9771, david, FJA1, LEG, LEG_4153, entrance];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const overlayVariants = {
    hidden: { x: "50%", opacity: 0 },
    visible: { x: 0, opacity: 0.8 },
    exit: { x: "50%", opacity: 0 },
  };

  return (
    <>
      <div className="flex justify-center mb-3 items-center gap-2">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image} alt="" className="w-full h-auto" />
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-[#000] text-white flex justify-center items-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={overlayVariants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <h2>Hello</h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2">
        {images.slice(3).map((image, index) => (
          <div
            key={index + 3}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index + 3)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image} alt="" className="w-full" />
            <AnimatePresence>
              {hoveredIndex === index + 3 && (
                <motion.div
                  className="absolute inset-0 bg-[#000] text-white flex justify-center items-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={overlayVariants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <h2>Hello</h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
};
