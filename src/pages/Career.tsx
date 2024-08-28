import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { career, EducatorNewHallform } from "../assets";
import { useEffect, useState } from "react";
import List from "../components/ui/list/List";

const Career = () => {
  let navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Career @ Newhall School
          </h2>
        </div>
        <div className="flex mb-6 px-4 py-4 border-b-[1.5px] border-[#ddd] lg:px-[8%] justify-start gap-2 items-center">
          <button
            onClick={handleClick}
            className="text-[14px] font-normal font-Raleway"
          >
            Home
          </button>
          <FaAngleRight />
          <p className="text-[14px] font-normal font-Raleway text-blue-500">
            Career @ Newhall School
          </p>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full flex justify-between items-start flex-col lg:flex-row gap-6">
            <img src={career} alt="Director" className="w-[40%]" />
            <div className="flex flex-col justify-between items-start w-[60%]">
              <h2 className="font-Raleway mb-8 text-[36px] font-normal text-left leading-[44px]">
                Thank you for interest in New Hall
              </h2>
              <div className="font-OpenSans text-[20px] font-normal leading-[25.6px] text-justify">
                <h2 className="font-Raleway text-[18px] font-normal text-left leading-[44px]">
                  Teaching position
                </h2>
                <h2 className="font-Raleway mb-4 text-[18px] font-normal text-left leading-[44px]">
                  Minimum Qualification:
                </h2>
                <List items={values} />
                <p className="my-2">
                  To apply for a teaching/management position{" "}
                  <a
                    href={EducatorNewHallform}
                    download="EducatorForm.pdf"
                    className="text-[#1EB3FE]"
                  >
                    fill this application form
                  </a>{" "}
                </p>
                <p>
                  To apply for a teaching/management position{" "}
                  <a
                    href={EducatorNewHallform}
                    download="EducatorForm.pdf"
                    className="text-[#1EB3FE]"
                  >
                    fill this application form
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
