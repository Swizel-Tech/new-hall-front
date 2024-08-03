// src/components/ScrollToTopButton.js
import { useState, useEffect } from "react";
import { TfiArrowUp } from "react-icons/tfi";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-[2rem] right-[2rem] cursor-pointer z-40">
      {visible && (
        <motion.div
          onClick={scrollToTop}
          className="bg-[#858282] rounded-full p-[0.8rem] text-[#fff] flex justify-center items-center shadow-2xl hover:bg-[#555]"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <TfiArrowUp size={25} />
        </motion.div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
