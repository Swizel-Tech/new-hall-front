// import { useNavigate } from "react-router-dom";
// import { FaAngleRight } from "react-icons/fa";
import { career } from "../assets";
import { useEffect, useRef, useState } from "react";
import List from "../components/ui/list/List";
import ApplicationForm from "../components/data/Applications";
import NonTeachingApplication from "../components/data/NonTeachingApplication";
import { AnimatePresence, motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

const Career = () => {
  // let navigate = useNavigate();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [Isteaching, setIsteaching] = useState(false);
  const [Isnonteaching, setIsnonteaching] = useState(false);

  const values = [
    {
      id: "1",
      description: "Bachelor degree in Education",
    },
    {
      id: "2",
      description: "Must love children",
    },
    {
      id: "3",
      description:
        "Various levels of experience in similar positions will be considered",
    },
    {
      id: "4",
      description:
        "Must be computer literate and must have excellent communication skills.",
    },
    {
      id: "5",
      description:
        "Post Graduate Diploma Education/Diploma in Montessori Education and a good knowledge of the British curriculum will be an advantage.",
    },
  ];

  useEffect(() => {
    if (Isteaching || Isnonteaching) {
      document.body.classList.add("no-scroll");

      const handleClickOutside = (event: MouseEvent) => {
        if (
          tooltipRef.current &&
          !tooltipRef.current.contains(event.target as Node)
        ) {
          setIsteaching(false);
          setIsnonteaching(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.classList.remove("no-scroll");
      };
    }
  }, [Isteaching, Isnonteaching]);

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

  // useEffect(() => {
  //   if (Isteaching || Isnonteaching) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  //   return () => {
  //     document.body.classList.remove("no-scroll");
  //   };
  // }, [Isteaching, Isnonteaching]);

  // const handleClick = () => {
  //   navigate("/home");
  // };

  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-OpenSans px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Career @ Newhall School
          </h2>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full flex justify-between items-start flex-col lg:flex-row gap-6">
            <img src={career} alt="Director" className="w-[40%]" />
            <div className="flex flex-col justify-between items-start w-[60%]">
              <h2 className="font-OpenSans mb-8 text-[36px] font-normal text-left leading-[44px]">
                Thank you for interest in New Hall
              </h2>
              <div>
                <h2 className="font-OpenSans text-[16px] font-normal text-left leading-[44px]">
                  Teaching position
                </h2>
                <h2 className="font-OpenSans mb-4 text-[16px] font-normal text-left leading-[44px]">
                  Minimum Qualification:
                </h2>
                <List items={values} />
                <p className="my-2 font-OpenSans text-[16px] font-normal text-left leading-[44px]">
                  To apply for a teaching/management position{" "}
                  <button
                    onClick={() => setIsteaching(true)}
                    className="text-[#1EB3FE]"
                  >
                    fill this application form
                  </button>
                </p>
                <p className="font-OpenSans text-[16px] font-normal text-left leading-[44px]">
                  If interested in a non-teaching position{" "}
                  <button
                    onClick={() => setIsnonteaching(true)}
                    className="text-[#1EB3FE]"
                  >
                    fill this application form
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        {Isteaching && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: Isteaching ? 1 : 0,
                y: Isteaching ? 0 : -20,
              }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed shadow-lg bottom-0 left-0 right-0 top-0 z-[9999] bg-[#000] bg-opacity-60 flex h-full min-h-screen w-full items-center justify-center overflow-y-auto"
            >
              <div
                ref={tooltipRef}
                className="relative mb-32 h-auto max-h-[640px] w-[50%] p-1 overflow-y-auto bg-[#fff] shadow-md [@media(max-width:1200px)]:w-[50%] [@media(max-width:700px)]:w-[90%]"
              >
                <div className="flex px-4 justify-end items-end py-4">
                  <button onClick={() => setIsteaching(false)}>
                    <GrClose />
                  </button>
                </div>
                <h2 className="font-OpenSans text-[#1EB3FE] text-center text-[26px] font-normal leading-[44px]">
                  To apply for a teaching/management position
                </h2>
                <p className="text-center italic font-OpenSans">
                  Please make sure to answer Everything
                </p>
                <ApplicationForm />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        {Isnonteaching && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: Isnonteaching ? 1 : 0,
                y: Isnonteaching ? 0 : -20,
              }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed shadow-lg bottom-0 left-0 right-0 top-0 z-[9999] bg-[#000] bg-opacity-60 flex h-full min-h-screen w-full items-center justify-center overflow-y-auto"
            >
              <div
                ref={tooltipRef}
                className="relative mb-32 h-auto max-h-[640px] w-[50%] p-1 overflow-y-auto bg-[#fff] shadow-md [@media(max-width:1200px)]:w-[50%] [@media(max-width:700px)]:w-[90%]"
              >
                <div className="flex px-4 justify-end items-end py-4">
                  <button onClick={() => setIsnonteaching(false)}>
                    <GrClose />
                  </button>
                </div>
                <h2 className="font-OpenSans text-[#1EB3FE] text-center text-[26px] font-normal leading-[44px]">
                  If interested in a non-teaching position
                </h2>
                <p className="text-center italic font-OpenSans">
                  Please make sure to answer Everything
                </p>
                <NonTeachingApplication />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Career;
