// import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { managment } from "../assets";
import { useEffect, useState } from "react";
import { all_staff } from "../utils/apiService";

const ManagementTeam = () => {
  let navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [staffRecord, setStaffRecord] = useState([
    {
      picture: "",
      name: "",
      position: "",
      message: "",
    },
  ]);

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

  const getallStaff = async () => {
    try {
      const allStaff = await all_staff();
      const findUserArray = allStaff.data;
      if (Array.isArray(findUserArray)) {
        const formattedStaffRecords = findUserArray.map((staff) => ({
          picture: staff.picture,
          name: `${staff.firstName} ${staff.middleName} ${staff.lastName}`,
          position: staff.position,
          message: `ID: ${staff.idNo}, Email: ${staff.email}, Phone: ${staff.phone}`,
        }));

        setStaffRecord(formattedStaffRecords);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallStaff();
  }, []);

  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Management Team
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
            Management Team
          </p>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full gap-6">
            <div className="w-full mb-6">
              <img src={managment} alt="facility1" className="w-[100%]" />
            </div>
            <p className="font-Lato text-[16px] mb-8 font-normal leading-[25.6px] text-justify">
              The School is managed by a Governing Board through the school
              Director who gives purposeful leadership to the management team.
              The school management is led by the Head of School who is assisted
              by three other principals who head each of the three schools –
              Nursery, Primary and College. Other principal officers include
              divisional Head of Administration, Human Resource Executives, Head
              of Academics and Head of Examinations.
            </p>

            <h2 className="font-Raleway mb-3 text-[36px] font-normal text-left leading-[44px]">
              Staff
            </h2>
            <div className="mt-10">
              <p className="font-Lato text-[16px] mb-8 font-normal leading-[25.6px] text-justify">
                The homelike quality of our school contributes to a relaxed,
                focused experience for the child. Our indoor classroom
                activities are placed on open shelves for selection as interest
                and readiness inspires the child. Our outdoor environment offers
                a beautiful developed playground with manipulatives, tricycles,
                pets, and gardens.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffRecord.slice(0, 6).map((staff) => (
                  <div className="border-[1.5px] pb-2 rounded-lg border-[#DDD]">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL}/${
                        staff.picture
                      }`}
                      alt="teacher1"
                      className="rounded-lg"
                    />
                    <h2 className="font-Raleway text-[18px] font-normal leading-[22px] text-left px-2 mt-2 hover:text-blue-500 cursor-pointer">
                      {staff.name}
                    </h2>
                    <p className="font-Lato text-[16px] px-2 my-2 text-blue-500 font-semibold leading-[25px] text-left">
                      {staff.position}
                    </p>
                    <p className="font-Lato text-[16px] px-2 my-2 font-normal leading-[25.6px] text-left">
                      I will be spending some time getting everything together
                      but would appreciate any suggestions along.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <NewsSlider
            newsItems={newsItems}
            title="News"
            viewNewsText="View News Feed"
            onViewNewsClick={handleViewNewsClick}
          />
        </div>
        <div>
          <GameChangers
            images={images}
            scrollLeft={scrollLeft}
            scrollRight={scrollRight}
          />
        </div>
        <div>
          <EventsCalendar events={events} />
        </div> */}
      </div>
    </div>
  );
};

export default ManagementTeam;
