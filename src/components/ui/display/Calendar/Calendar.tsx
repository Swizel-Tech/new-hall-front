import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Event {
  date: string;
  title: string;
}

interface EventsCalendarProps {
  events: Event[];
}

const EventsCalendar: React.FC<EventsCalendarProps> = ({ events }) => {
  let navigate = useNavigate();

  const handleCalennNavigate = () => {
    navigate("/calendar");
  };

  return (
    <div className="w-full p-0 relative bg-[#F8E6E6] flex justify-center items-center flex-col">
      <div className="w-full mt-10 mb-8 border-b-[1px] border-[#b9b6b6] flex lg:w-[90%] justify-between items-center p-0">
        <div className="flex flex-col justify-start items-start gap-3 w-[50%] lg:w-[80%]">
          <div className="flex justify-start items-center gap-3">
            <div className="w-[40px] h-[1px] bg-[#3D83F6]"></div>
            <h2 className="uppercase font-OpenSans font-semibold text-[16px] text-[#3D83F6]">
              Events
            </h2>
          </div>
          <h2 className="font-OpenSans font-normal text-[44px] leading-[61px] w-full text-[#000]">
            Calendar
          </h2>
        </div>
        <motion.button
          className="text-[12px] w-[50%] lg:w-[10%] h-full border-b-[2px] text-center border-[#000] uppercase font-OpenSans font-normal text-[#000] leading-[117px]"
          whileHover={{
            borderColor: "#BC0E0E",
            color: "#BC0E0E",
          }}
          transition={{ duration: 0.5 }}
          onClick={handleCalennNavigate}
        >
          View Full Calendar
        </motion.button>
      </div>
      <div className="relative px-8 pb-8 lg:pb-[8rem] w-full py-4">
        <div className="flex flex-col lg:flex-row justify-start w-full items-center overflow-x-auto scroll-container gap-8 h-full lg:h-[400px]">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg flex justify-center items-start gap-8 flex-col p-4 cursor-pointer h-[250px] w-full  lg:w-[380px]"
            >
              <h2 className="font-OpenSans font-normal text-[44px] leading-[61px] w-full text-[#000]">
                <span className="text-[65px] font-semibold">
                  {event.date.split(" ")[0]}
                </span>{" "}
                {event.date.split(" ")[1]} {event.date.split(" ")[2]}
              </h2>
              <p className="font-OpenSans font-normal text-[16px] w-full text-[#000]">
                {event.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;
