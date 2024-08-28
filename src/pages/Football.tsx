import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import {
  player1,
  player2,
  player3,
  player4,
  player5,
  player6,
  player7,
  player8,
} from "../assets";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { motion } from "framer-motion";
import { BaseTable } from "../components/table/Table";

type DropdownKey =
  | "vision"
  | "mission"
  | "facility"
  | "team"
  | "programs"
  | "camps";
const autoplaySpeed = 3000;

const Football = () => {
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

  const [dropdowns, setDropdowns] = useState<Record<DropdownKey, boolean>>({
    vision: false,
    mission: false,
    facility: false,
    team: false,
    programs: false,
    camps: false,
  });
  const weekends = [
    {
      SN: 1,
      "AGE GROUPS": "Under 10;(5—10 Years old)",
      "TRAINING DAYS": "Saturdays only",
      "TRAINING TIME": "7:45am—9:45am, 4:00pm—6:00pm",
    },
    {
      SN: 2,
      "AGE GROUPS": "Under 13: (11– 13 Years old)",
      "TRAINING DAYS": "Saturdays only",
      "TRAINING TIME": "7:45am—9:45am, 4:00pm—6:00pm",
    },
    {
      SN: 3,
      "AGE GROUPS": "Under 16:(14—16 Years old)",
      "TRAINING DAYS": "Saturdays only",
      "TRAINING TIME": "7:45am—9:45am, 4:00pm—6:00pm",
    },
    {
      SN: 4,
      "AGE GROUPS": "Under 19:  (17—18 Years old)",
      "TRAINING DAYS": "Saturdays only",
      "TRAINING TIME": "7:00am—10:00am, 3:00pm—7:00pm",
    },
  ];
  const holidays = [
    {
      SN: 1,
      "AGE GROUPS": "Under 10;(5—10 Years old)",
      "TRAINING DAYS": "Mondays -Fridays",
      "TRAINING TIME": "7:45am—12:00pm",
    },
    {
      SN: 2,
      "AGE GROUPS": "Under 13: (11– 13 Years old)",
      "TRAINING DAYS": "Mondays -Fridays",
      "TRAINING TIME": "7:45am—12:00pm",
    },
    {
      SN: 3,
      "AGE GROUPS": "Under 16:(14—16 Years old)",
      "TRAINING DAYS": "Mondays -Fridays",
      "TRAINING TIME": "7:45am—12:00pm",
    },
    {
      SN: 4,
      "AGE GROUPS": "Under 19:  (17—18 Years old)",
      "TRAINING DAYS": "Mondays -Fridays",
      "TRAINING TIME": "7:00am—12:00am",
    },
  ];
  const handleClick = () => {
    navigate("/home");
  };

  const toggleDropdown = (key: DropdownKey) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const fadeInVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    arrows: false,
    adaptiveHeight: false,
    lazyLoad: "ondemand" as "ondemand",
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
            Academy
          </h2>
        </div>
        <div className="flex mb-6 px-4 py-4 border-b-[1.5px] border-[#F3F3F3] lg:px-[8%] justify-start gap-2 items-center">
          <button
            onClick={handleClick}
            className="text-[14px] font-normal font-Raleway"
          >
            Home
          </button>
          <FaAngleRight />
          <p className="text-[14px] font-normal font-Raleway text-blue-500">
            Academy
          </p>
        </div>
        <div className="px-4 my-6 lg:px-[8%] flex flex-col sm:flex-row justify-between items-start">
          <div className="w-full">
            <h2 className="font-Raleway mb-8 text-[36px] font-normal text-left leading-[44px]">
              New Hall Football Academy
            </h2>
            <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-3">
              <motion.div className="w-full lg:w-[50%]">
                <Slider {...settings}>
                  <div className="relative m-0 p-0 w-[100%]">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"></div>
                    <img
                      src={player1}
                      alt="Slide 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative m-0 p-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"></div>
                    <img
                      src={player2}
                      alt="Slide 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative m-0 p-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"></div>
                    <img
                      src={player3}
                      alt="Slide 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative m-0 p-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"></div>
                    <img
                      src={player4}
                      alt="Slide 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative m-0 p-0 w-[100%]">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"></div>
                    <img
                      src={player5}
                      alt="Slide 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative m-0 p-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"></div>
                    <img
                      src={player6}
                      alt="Slide 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative m-0 p-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"></div>
                    <img
                      src={player7}
                      alt="Slide 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative m-0 p-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"></div>
                    <img
                      src={player8}
                      alt="Slide 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Slider>
              </motion.div>
              <div className="w-full lg:w-[50%]">
                <p className="font-Lato text-[16px] mb-8 font-normal leading-[25.6px] text-justify">
                  New Hall Football Academy is a professional football
                  development academy, friendly designed to make positive
                  difference in the lives of young people, giving them the
                  perfect opportunities outside the classroom by taking part in
                  specifically designed football programs and other special
                  social and academic activities running weekly.
                </p>
                <p className="font-Lato text-[16px] mb-8 font-normal leading-[25.6px] text-justify">
                  We are a professional football development Academy which
                  combines the latest football and educational philosophies with
                  first-class facilities to make football fun. We develop our
                  players in a positive and supportive environment that focuses
                  on encouraging players within the parameters of an overall
                  academic ethos and sports philosophy.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
              <div className="w-full lg:w-[50%]">
                <div
                  onClick={() => toggleDropdown("vision")}
                  className="cursor-pointer flex justify-between items-center border-[1px] border-[#ddd] w-full p-3 h-auto"
                >
                  <p className="font-Lato text-[16px] font-semibold leading-[25.6px] text-left">
                    Our Vision
                  </p>
                  {dropdowns.vision ? (
                    <GoChevronUp fontSize={25} />
                  ) : (
                    <GoChevronDown fontSize={25} />
                  )}
                </div>
                {dropdowns.vision && (
                  <motion.div
                    className="border-b-[1px] shadow-lg border-l-[1px] border-r-[1px] border-[#ddd]  h-[200px] overflow-y-auto"
                    variants={fadeInVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      Our vision is to provide quality football skills and
                      proper development training for the youths with a
                      harmonized FA/British educational curriculum system
                      through recreational and residential programs to build the
                      next professional stars.
                    </p>
                  </motion.div>
                )}
              </div>
              <div className="w-full lg:w-[50%]">
                <div
                  onClick={() => toggleDropdown("mission")}
                  className="cursor-pointer flex justify-between items-center border-[1px] border-[#ddd] w-full p-3 h-auto"
                >
                  <p className="font-Lato text-[16px] font-semibold leading-[25.6px] text-left">
                    Our Mission Statement
                  </p>
                  {dropdowns.mission ? (
                    <GoChevronUp fontSize={25} />
                  ) : (
                    <GoChevronDown fontSize={25} />
                  )}
                </div>
                {dropdowns.mission && (
                  <motion.div
                    className="border-b-[1px] shadow-lg border-l-[1px] border-r-[1px] border-[#ddd]  h-[200px] overflow-y-auto"
                    variants={fadeInVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      The missions of our football academy are:
                    </p>
                    <ul className="list-none px-4">
                      <li className="font-Lato text-[16px] font-semibold my-2 italic leading-[25.6px] text-justify">
                        To run an in-school, after-school, Open football Camping
                        & Weekends professional development training for our
                        feeder team trainees.
                      </li>
                      <li className="font-Lato text-[16px] font-semibold my-2 italic leading-[25.6px] text-justify">
                        To run a complete World class residential and
                        educational football academy.
                      </li>
                      <li className="font-Lato text-[16px] font-semibold my-2 italic leading-[25.6px] text-justify">
                        To provide elite players for the professional team.
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-2 items-start gap-2">
              <div className="w-full lg:w-[50%]">
                <div
                  onClick={() => toggleDropdown("facility")}
                  className="cursor-pointer flex justify-between items-center border-[1px] border-[#ddd] w-full p-3 h-auto"
                >
                  <p className="font-Lato text-[16px] font-semibold leading-[25.6px] text-left">
                    Facilities
                  </p>
                  {dropdowns.facility ? (
                    <GoChevronUp fontSize={25} />
                  ) : (
                    <GoChevronDown fontSize={25} />
                  )}
                </div>
                {dropdowns.facility && (
                  <motion.div
                    className="border-b-[1px] shadow-lg border-l-[1px] border-r-[1px] border-[#ddd]  h-[200px] overflow-y-auto"
                    variants={fadeInVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      Our football academy facilities are impressive and similar
                      or better than some of the Academies of English Premier
                      League clubs. The Academy has 1 turf field, restaurant,
                      gymnasium, Equipment Store and weight room, physical
                      therapy room, medical room, instructional rooms with smart
                      boards and tactical boards, classrooms, computer room,
                      laundry, two locker rooms, offices, swimming pools,
                      general sports court and dorms for 50 players.
                    </p>
                  </motion.div>
                )}
              </div>
              <div className="w-full lg:w-[50%]">
                <div
                  onClick={() => toggleDropdown("team")}
                  className="cursor-pointer flex justify-between items-center border-[1px] border-[#ddd] w-full p-3 h-auto"
                >
                  <p className="font-Lato text-[16px] font-semibold leading-[25.6px] text-left">
                    Teams
                  </p>
                  {dropdowns.team ? (
                    <GoChevronUp fontSize={25} />
                  ) : (
                    <GoChevronDown fontSize={25} />
                  )}
                </div>
                {dropdowns.team && (
                  <motion.div
                    className="border-b-[1px] shadow-lg border-l-[1px] border-r-[1px] border-[#ddd] h-[200px] overflow-y-auto"
                    variants={fadeInVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      Our Football Academy has five teams; U5 - The Cub Team,
                      U10 - Star Flyers, U12 - Super Strikers, U14 - Goal
                      Getters, and U17 - Premier Squad.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      Some of our Elite players go to school in the mornings and
                      train in the afternoon five days a week. Our U17 – Premier
                      Squad Team signs professional contracts and train twice a
                      day. Practices are typically two hours long on weekdays,
                      but more on weekends.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      All age groups play one game a week on Saturday and
                      Sunday. Our U10, U13, U14 and U15 teams have 25-30 players
                      each.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      About 10-12 players from each team come from out of town
                      and these players live at the Academy on a well-structured
                      plan. They are on a residential –academic focused football
                      academy plan; hence they study in the morning (8:00am –
                      12:00pm) at New Hall International School, Lekki; while
                      being at the Academy for afternoon/evening training
                      (1:00pm -6pm).
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      For others with choice of half-day schools outside Chevy
                      View Estate, a bus shall take them to various schools of
                      their choice and then pick them after half-day school and
                      brings them back to the Academy for afternoon/evening
                      training.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      The local players who live at home within Chevy View
                      Estate make their own way to the Academy in the afternoon
                      after school training.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      The highly talented U17 and older teams have about 11-21
                      players. These players are on professional contracts and
                      train twice a day during the week.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      New Hall Football Academy has a salary structure for
                      Academy elite players that are highly talented and who
                      have appeared for the pro teams or the National Teams.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      The Academy is very careful about how their young talented
                      players are ready to handle the fame and fortune that
                      comes with being a professional soccer player in Nigeria
                      or elsewhere in the World. Hence, Players are groomed for
                      things such as being paid more money, press conferences,
                      dealing with the pressure of playing with seasoned
                      professionals, etc.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      Approximately 30-40% of talented players can be released
                      and replaced during the season or at the end of the
                      season. The Academy has a scouting network that is always
                      looking for new players and partners with top clubs in
                      Europe.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-2 items-start gap-2">
              <div className="w-full lg:w-[50%]">
                <div
                  onClick={() => toggleDropdown("programs")}
                  className="cursor-pointer flex justify-between items-center border-[1px] border-[#ddd] w-full p-3 h-auto"
                >
                  <p className="font-Lato text-[16px] font-semibold leading-[25.6px] text-left">
                    Special Programs
                  </p>
                  {dropdowns.programs ? (
                    <GoChevronUp fontSize={25} />
                  ) : (
                    <GoChevronDown fontSize={25} />
                  )}
                </div>
                {dropdowns.programs && (
                  <motion.div
                    className="border-b-[1px] shadow-lg p-2 border-l-[1px] border-r-[1px] border-[#ddd]  h-[200px] overflow-y-auto"
                    variants={fadeInVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <p className="font-Lato text-[16px] font-semibold leading-[25.6px] text-justify">
                      Weekends
                    </p>
                    <BaseTable data={weekends} />
                    <p className="font-Lato mt-4 text-[16px] font-semibold leading-[25.6px] text-justify">
                      Holidays
                    </p>
                    <BaseTable data={holidays} />
                  </motion.div>
                )}
              </div>
              <div className="w-full lg:w-[50%]">
                <div
                  onClick={() => toggleDropdown("camps")}
                  className="cursor-pointer flex justify-between items-center border-[1px] border-[#ddd] w-full p-3 h-auto"
                >
                  <p className="font-Lato text-[16px] font-semibold leading-[25.6px] text-left">
                    Summer Football Camps
                  </p>
                  {dropdowns.camps ? (
                    <GoChevronUp fontSize={25} />
                  ) : (
                    <GoChevronDown fontSize={25} />
                  )}
                </div>
                {dropdowns.camps && (
                  <motion.div
                    className="border-b-[1px] shadow-lg border-l-[1px] border-r-[1px] border-[#ddd] h-[200px] overflow-y-auto"
                    variants={fadeInVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      The New Hall Football Academy football camps are open to
                      boys and girls ages 5 – 18.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      The New Hall Football Academy offers football camps for
                      individual football players, football clubs, and high
                      school football teams in Lagos and its environs. Our
                      summer football camp players and teams typically come from
                      other states in Nigeria and other African countries. We
                      intend to host international teams from Trinidad, USA and
                      Canada soon.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      We have limited enrollment on a first received basis for
                      all day camps and residential camps.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      The football camps are directed by Henry Iwuanyanwu,
                      ex-International Produta, (UEFA A, ICB A license, NSCAA
                      Premier & Advanced National Diploma, FA Badge – England,
                      FA Badge – Scotland) and Sports Director at New Hall
                      International School and Academy Director/Head Coach, New
                      Hall Football Academy, Lekki.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      Yearly, special football personalities (Ex Internationals)
                      are invited to support the summer football camp with an
                      organized football clinic for young players.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-semibold italic leading-[25.6px] text-justify">
                      The New Hall Football Academy, Lekki offers several summer
                      football camp programs:
                    </p>
                    <ul className="list-none px-4">
                      <li className="font-Lato text-[16px] font-semibold my-2 italic leading-[25.6px] text-justify">
                        YOUTH SKILL DEVELOPMENT CAMPS for boys and girls ages 5
                        – 18.
                      </li>
                      <li className="font-Lato text-[16px] font-semibold my-2 italic leading-[25.6px] text-justify">
                        ELITE CAMP for travel, competitive, and premier level
                        players age 10 – 18
                      </li>
                      <li className="font-Lato text-[16px] font-semibold my-2 italic leading-[25.6px] text-justify">
                        TEAM CAMPS for youth club football teams and high school
                        football teams.
                      </li>
                      <li className="font-Lato text-[16px] font-semibold my-2 italic leading-[25.6px] text-justify">
                        SUMMER TRAINING PROGRAM – STP
                      </li>
                      <li className="font-Lato text-[16px] font-semibold my-2 italic leading-[25.6px] text-justify">
                        RESIDENTIAL WEEKEND TOURNAMENT CAMP for TEAMS and
                        INDIVIDUALS.
                      </li>
                    </ul>

                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      This 2018 Summer Football Camp starts on Monday, 9th July,
                      2018 till Friday, 17th August, 2018. The summer
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      kicks off daily with instructional class at 7:45am and
                      ends with many fun and training activities at 12:00noon.
                    </p>
                    <p className="font-Lato text-[16px] p-4 font-normal leading-[25.6px] text-justify">
                      For enquiries, Call 08164049940
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Football;
