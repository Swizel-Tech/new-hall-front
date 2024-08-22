import React, { useEffect, useState } from "react";
import { Event } from "../../../../types/globa";
import { format, parseISO } from "date-fns";
import { FaFilePdf, FaRegCalendarPlus } from "react-icons/fa6";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { get_pdf, download_calendar } from "../../../../utils/apiService";
import { saveAs } from "file-saver";

interface CalendarProps {
  events: Event[];
  eventsPerPage?: number;
}

const Events: React.FC<CalendarProps> = ({ events, eventsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const groupedEvents = groupEventsByMonth(events);
  const months = Object.keys(groupedEvents);

  const filteredEvents = selectedMonth
    ? groupedEvents[selectedMonth] || []
    : events;

  const indexOfLastMonth = currentPage * eventsPerPage;
  const indexOfFirstMonth = indexOfLastMonth - eventsPerPage;
  const currentMonths = selectedMonth
    ? [selectedMonth]
    : months.slice(indexOfFirstMonth, indexOfLastMonth);

  const totalPages = Math.ceil(months.length / eventsPerPage);

  const handlePageChange = (direction: "prev" | "next") => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    const calendar_pdf = async () => {
      try {
        const res = await get_pdf("Calendar.pdf");
        if (res.message === "File exists") {
          setPdfUrl(res.fileName);
        }
      } catch (error) {
        console.log(error);
      }
    };
    calendar_pdf();
  }, []);

  useEffect(() => {
    console.log(events);
  }, []);

  const addToCalendar = (event: Event) => {
    const startDate = format(parseISO(event.startDate), "yyyyMMdd'T'HHmmss'Z'");
    const endDate = format(
      new Date(parseISO(event.startDate).getTime() + 60 * 60 * 1000),
      "yyyyMMdd'T'HHmmss'Z'"
    );
    const title = encodeURIComponent(event.title);
    const description = event.description
      ? encodeURIComponent(event.description)
      : "";

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${description}`;

    window.open(googleCalendarUrl, "_blank");
  };

  const downloadpdf = async () => {
    try {
      const fileName = "Calendar.pdf";
      const blob = await download_calendar(fileName);
      saveAs(blob, fileName);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-[20px] px-4 w-full lg:px-[8%] ">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="w-full lg:w-[30%] flex flex-col justify-between items-center mb-4">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="p-2 border bg-[#ddd] text-[#000] outline-none w-full rounded"
          >
            <option value="">View by Month</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full lg:w-[60%]">
          {currentMonths.map((month) => (
            <div key={month} className="w-full flex justify-end items-center">
              <div className="w-full">
                <div className="bg-blue-500 p-2 ">
                  <h2 className="text-[#fff] lg:text-[18px] text-center text-[18px] w-full font-normal font-OpenSans ">
                    {month}
                  </h2>
                </div>
                <ul className="list-none w-full my-[12px]">
                  {(selectedMonth ? filteredEvents : groupedEvents[month]).map(
                    (event) => (
                      <li
                        key={event._id}
                        className="py-[20px] w-full flex justify-start items-center border-b-4 border-[#ddd]"
                      >
                        <div className="w-[20%] lg:w-[10%] mr-4 p-2 bg-[#898989]">
                          <p className="text-[14px] text-[#fff] font-semibold font-OpenSans">
                            {format(parseISO(event.startDate), "MMM do, yyyy")}
                          </p>
                        </div>
                        <div className="w-[70%] lg:w-[90%] flex justify-between items-center">
                          <div className="w-full">
                            <h3 className="text-[17px] font-OpenSans font-normal">
                              {event.title}
                            </h3>
                            {event.description && (
                              <p className="font-OpenSans text-[12px] font-normal leading-[25.6px] text-justify">
                                {event.description}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center">
                            <Tooltip
                              id={`tooltip-${event._id}`}
                              className="border-[1px] border-gray-700 text-white rounded"
                            />
                            <button
                              onClick={() => addToCalendar(event)}
                              className="rounded mr-2"
                              data-tooltip-content="Add to Calendar"
                              data-tooltip-place="left"
                              data-tooltip-id={`tooltip-${event._id}`}
                            >
                              <FaRegCalendarPlus
                                fontSize={30}
                                className="text-blue-500"
                              />
                            </button>
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
          <div className="flex justify-end items-end px-3 ">
            {pdfUrl ? (
              <>
                <FaFilePdf fontSize={70} className="text-red-600" />
                <button
                  className="font-semibold text-blue-500 text-left w-full text-[16px] font-DMSans ml-3"
                  onClick={downloadpdf}
                >
                  Download Calendar
                </button>
              </>
            ) : (
              <b className="font-bold text-left w-full text-[20px] font-DMSans my-4">
                No file Uploaded
              </b>
            )}
          </div>
        </div>
      </div>

      {!selectedMonth && (
        <div className="flex justify-end items-center w-full mt-4">
          <div className="w-full flex justify-between items-center">
            <button
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
              className="disabled:opacity-50"
            >
              <GrFormPrevious className="text-[30px] text-blue-500" />
            </button>
            <button
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
              className="disabled:opacity-50"
            >
              <GrFormNext className="text-[30px] text-blue-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const groupEventsByMonth = (events: Event[]) => {
  return events.reduce((acc, event) => {
    const eventDate = parseISO(event.startDate);
    const month = format(eventDate, "MMM yyyy");

    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(event);

    return acc;
  }, {} as Record<string, Event[]>);
};

export default Events;
