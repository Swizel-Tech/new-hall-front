import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { slider1, slider2, slider3 } from "../assets";
import Slider from "react-slick";
// import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
// import { GameChangers } from "../components/ui/display/Slider/GameChangers";
// import EventsCalendar from "../components/ui/display/Calendar/Calendar";
// import { useRef } from "react";

// const newsItems = [
//   {
//     imgSrc: slider1,
//     date: "13 Sep",
//     title: "Better Times Magazine - Issues 16",
//   },
//   {
//     imgSrc: slider2,
//     date: "13 Sep",
//     title: "Better Times Magazine - Issues 16",
//   },
//   {
//     imgSrc: slider3,
//     date: "13 Sep",
//     title: "Better Times Magazine - Issues 16",
//   },
//   {
//     imgSrc: slider4,
//     date: "13 Sep",
//     title: "Better Times Magazine - Issues 16",
//   },
//   {
//     imgSrc: slider2,
//     date: "13 Sep",
//     title: "Better Times Magazine - Issues 16",
//   },
//   {
//     imgSrc: slider4,
//     date: "13 Sep",
//     title: "Better Times Magazine - Issues 16",
//   },
// ];

const PreSchool = () => {
  let navigate = useNavigate();
  // const refbottom = useRef<HTMLDivElement>(null);

  // const [activeMenu, setActiveMenu] = useState("pre-school");
  const handleClick = () => {
    navigate("/home");
  };

  // const handleMenuClick = (menu: { href: SetStateAction<string> }) => {
  //   setActiveMenu(menu.href);
  //   navigate(`/${menu.href}`);
  // };

  var settings = {
    dots: false,
    speed: 2500,
    fade: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // const scrollLeft = () => {
  //   if (refbottom.current) {
  //     refbottom.current.scrollBy({
  //       left: -refbottom.current.clientWidth,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  // const events = [
  //   { date: "22 Aug 2024", title: "A-level Result Day" },
  //   { date: "15 Aug 2024", title: "GCSE Result Day" },
  //   // Add more events here if needed
  // ];
  // const scrollRight = () => {
  //   if (refbottom.current) {
  //     refbottom.current.scrollBy({
  //       left: refbottom.current.clientWidth,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  // const images = [slider1, slider2, slider3, slider4];

  // const handleViewNewsClick = () => {
  //   // Handle view news feed button click
  //   console.log("View News Feed button clicked");
  // };
  return (
    <div className="mt-10 lg:mt-[12rem] ">
      <div className="">
        <div className="h-[120px] flex justify-start items-center bg-[#F3F3F3]">
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Pre-School
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
            Pre-School
          </p>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col sm:flex-row justify-between items-start">
          {/* <div className="border-[1px] mb-5 lg:mb-0 border-[#F3F3F3] w-full flex flex-col justify-start items-start lg:w-[20%]">
            {programs.map((program) => (
              <button
                key={program.href}
                onClick={() => handleMenuClick(program)}
                className={`h-[50px] text-[16px] font-Lato font-normal w-full text-left border-b-[1px] px-3 hover:border-l-[3px] hover:border-b-[0px] hover:border-[#FF7264] ${
                  activeMenu === program.href
                    ? "bg-[#fff] text-[#282E3F] border-l-[3px] border-b-[0px] border-[#FF7264]"
                    : theme === "light"
                    ? "bg-[#282E3F] text-[#fff]"
                    : "bg-[#fff] text-[#282E3F]"
                }`}
              >
                {program.text}
              </button>
            ))}
          </div> */}
          <div className="w-full">
            <Slider {...settings}>
              <div className="w-full">
                <img src={slider1} alt="facility1" className="w-[80%]" />
              </div>
              {/* <div className="w-full">
                <img src={DSC_6500} alt="facility1" className="w-[80%]" />
              </div> */}
              <div className="w-full">
                <img src={slider2} alt="facility1" className="w-[80%]" />
              </div>
              <div className="w-full">
                <img src={slider3} alt="facility1" className="w-[80%]" />
              </div>
            </Slider>
            <p className="font-OpenSans text-[16px] my-4 font-normal leading-[25.6px] text-justify">
              Montessori curriculum is used at this early stage to help students
              learn independency, practical and cultural skills.
            </p>
            <p className="font-OpenSans text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              Foundations are laid for future learning by providing experiences
              that build children’s knowledge and understanding of the world
              around them. Looking at books, listening to tapes and inviting
              people to visit provides language development necessary to
              complement and enrich the children’s learning.Creative activities
              are available daily and are varied throughout the week. The
              children will experiment using paints, play dough, sand, water,
              crayons, chalk and glue.
            </p>
            <p className="font-OpenSans text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              Counting rhymes is an enjoyable way of learning how to count, such
              activities like sharing toys, sorting toys and colour matching are
              pleasant ways of making learning fun. To promote self reliance and
              self confidence skills we encourage the children to help tidy up
              the toys they have played with. We give the children small tasks
              within their capacities and use praise to recognize and reward
              what they have done.
            </p>
            <p className="font-OpenSans text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              Throughout the year, there are well-planned opportunities for the
              children to learn about materials, living things and the changing
              seasons. Carefully chosen themes provide a useful focus for
              learning about the environment. The children’s interest in living
              things is fostered by growing seeds, and learning about various
              animals and birds on their visits out of School.
            </p>
            <p className="font-OpenSans text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              There are good strategies to monitor and evaluate the children’s
              play and to record their achievements and needs.
            </p>
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

export default PreSchool;
