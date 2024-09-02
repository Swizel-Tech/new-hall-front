import Events from "../components/ui/display/Calendar/Events";
import { Event } from "../types/globa";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { get_all_event } from "../utils/apiService";

const AcademicCalendar = () => {
  let navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

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

  const getallEvent = async () => {
    try {
      const allEvent = await get_all_event();
      console.log(allEvent.data);
      setEvents(allEvent.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallEvent();
  }, []);

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
        <Events events={events} eventsPerPage={2} />
      </div>
    </div>
  );
};

export default AcademicCalendar;
