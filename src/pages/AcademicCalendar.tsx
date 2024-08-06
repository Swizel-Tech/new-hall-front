import Events from "../components/ui/display/Calendar/Events";
import { Event } from "../types/globa";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const events: Event[] = [
  {
    id: 1,
    title: "First Day of School",
    date: "2023-09-01",
    description: "Welcome back to school!",
  },
  {
    id: 2,
    title: "Parent-Teacher Conference",
    date: "2023-10-15",
    description: "Discussing student progress.",
  },
  {
    id: 3,
    title: "Winter Break",
    date: "2023-12-20",
    description: "School closed for winter break.",
  },
  {
    id: 4,
    title: "First Day of School",
    date: "2023-09-01",
    description: "Welcome back to school!",
  },
  {
    id: 5,
    title: "Parent-Teacher Conference",
    date: "2023-10-15",
    description: "Discussing student progress.",
  },
  {
    id: 6,
    title: "Winter Break",
    date: "2023-12-20",
    description: "School closed for winter break.",
  },
  {
    id: 7,
    title: "First Day of School",
    date: "2023-09-01",
    description: "Welcome back to school!",
  },
  {
    id: 8,
    title: "Parent-Teacher Conference",
    date: "2023-10-15",
    description: "Discussing student progress.",
  },
  {
    id: 9,
    title: "Winter Break",
    date: "2023-12-20",
    description: "School closed for winter break.",
  },
];

const AcademicCalendar = () => {
  let navigate = useNavigate();
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

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div
        className={`h-[120px] flex justify-start items-center ${
          isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
        }`}
      >
        <h2 className="font-OpenSans px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
          Academic Calendar
        </h2>
      </div>
      <div className="flex mb-6 px-4 py-4 border-b-[1.5px] border-[#F3F3F3] lg:px-[8%] justify-start gap-2 items-center">
        <button
          onClick={handleClick}
          className="text-[14px] font-normal font-OpenSans"
        >
          Home
        </button>
        <FaAngleRight />
        <p className="text-[14px] font-normal font-OpenSans text-blue-500">
          Academic Calendar
        </p>
      </div>
      <div className="w-full">
        {/* <h2 className="font-OpenSans px-4 lg:px-[8%] text-[26px] font-normal text-left leading-[44px]">
          THEME FOR THE SESSION: TRANSFORMATIONAL LEADERSHIP
        </h2> */}
        <Events events={events} eventsPerPage={2} />
      </div>
    </div>
  );
};

export default AcademicCalendar;
