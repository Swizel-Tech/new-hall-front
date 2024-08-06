import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDropup } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

export interface SideNavProps {
  text: string;
  href: string;
  scrolledState: boolean;
  dropdown: boolean;
  children: {
    href: string;
    text: string;
  }[];
}

export const Nav = (props: SideNavProps) => {
  const location = useLocation();
  const { href, text, scrolledState, dropdown, children } = props;
  const [clicked, setClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const getTextColor = () => {
    if (location.pathname === "/home") {
      return "text-[#FFF]";
    } else {
      return isDarkMode ? "text-[#fff]" : "text-[#000]";
    }
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <>
      {dropdown ? (
        <>
          <button
            className="group w-full lg:w-auto relative max-sm:hidden flex h-[70px] justify-center items-center gap-1"
            onMouseEnter={() => setClicked(true)}
            onMouseLeave={() => setClicked(false)}
          >
            <span
              className={`relative w-full text-left font-OpenSans text-[16px] font-normal uppercase  ${
                scrolledState ? "text-[#000]" : `${getTextColor()}`
              }`}
            >
              {text}
            </span>
            <FaPlus className="lg:hidden block" />
            {clicked && (
              <motion.span
                className="absolute bottom-0 h-[2px] bg-[#B4BDD5] w-full"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            )}
            {clicked && (
              <motion.div
                className="z-20 top-[70px] py-2 absolute flex flex-col justify-center items-center bg-transparent w-[380px]"
                initial={{ y: "10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "10%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <IoMdArrowDropup className="text-[#B4BDD5] m-0 text-[50px]" />
                <div className="bg-[#B4BDD5] w-full p-2 m-0 shadow-lg">
                  {children.map((child, index) => (
                    <NavLink key={index} to={child.href}>
                      <span
                        className={`font-OpenSans text-[16px] text-left py-2 hover:bg-[#618cf9] hover:text-[#fff] px-2 font-normal uppercase block ${
                          scrolledState ? "text-[#000]" : `${getTextColor()}`
                        }`}
                      >
                        {child.text}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </button>
          <div className="sm:hidden w-full">
            <button
              className="w-full flex justify-between items-center"
              onClick={() => setClicked(!clicked)}
            >
              <span
                className={`font-OpenSans text-[16px] text-[#000] text-left py-4 font-normal uppercase ${
                  scrolledState ? "text-[#000]" : `${getTextColor()}`
                }`}
              >
                {text}
              </span>
            </button>
            <AnimatePresence>
              {clicked && (
                <motion.div
                  className="z-20 py-2 w-full px-2"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeVariants}
                  transition={{ duration: 0.5 }}
                >
                  {children.map((child, index) => (
                    <NavLink key={index} to={child.href}>
                      <span
                        className={`font-OpenSans text-[#000] text-[16px] my-2 text-left py-2 px-[5px] font-normal uppercase block ${
                          scrolledState ? "text-[#000]" : `${getTextColor()}`
                        }`}
                      >
                        {child.text}
                      </span>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      ) : (
        <NavLink to={href} className="py-4 lg:py-0 w-full lg:w-auto">
          <span
            className={`font-OpenSans text-[16px] text-left font-normal uppercase ${
              scrolledState ? "text-[#000]" : `${getTextColor()}`
            }`}
          >
            {text}
          </span>
        </NavLink>
      )}
    </>
  );
};
