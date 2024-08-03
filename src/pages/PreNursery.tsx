// import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { slider1, slider2, slider4 } from "../assets";
import Slider from "react-slick";
// import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
// import { GameChangers } from "../components/ui/display/Slider/GameChangers";
// import EventsCalendar from "../components/ui/display/Calendar/Calendar";

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
//     imgSrc: slider3,
//     date: "13 Sep",
//     title: "Better Times Magazine - Issues 16",
//   },
// ];

const PreNursery = () => {
  let navigate = useNavigate();
  // const refbottom = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    navigate("/home");
  };

  var settings = {
    dots: false,
    speed: 1500,
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
    <div className="mt-10 lg:mt-[10rem]">
      <div className="">
        <div className={`h-[120px] flex justify-start items-center`}>
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Pre-Nursery
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
          <p className="text-[14px] font-normal font-Raleway text-[#FF7264]">
            Pre-Nursery
          </p>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] w-full">
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
                <img src={slider4} alt="facility1" className="w-[80%]" />
              </div>
              <div className="w-full">
                <img src={slider1} alt="facility1" className="w-[80%]" />
              </div>
              <div className="w-full">
                <img src={slider2} alt="facility1" className="w-[80%]" />
              </div>
            </Slider>
            <p className="font-Lato text-[16px] my-4 font-normal leading-[25.6px] text-justify">
              Montessori curriculum is used at this early stage to help students
              learn independence, practical life and cultural skills.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              Classrooms in nursery have two sections. One section of the room
              is rugged for children to play, listen to stories and sing.
              Opportunities for dancing, singing and having fun aim to boost
              children’s confidence and help develop their personalities.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              The other section of the room is for ‘messy’ play and is where
              opportunities to be creative are provided through use of paints,
              glue, play dough, water, sand, crayons, chalks and art and craft
              works. Children are encouraged to experiment using hands and
              fingers.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              Children will begin to form friendships, learn to share toys and
              interact with their peer group at this stage. We encourage the
              children to participate in everyday activities such as helping to
              tidy up the toys they have played with.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              At this age they will begin to recognize objects, pictures and
              develop awareness for their likes and dislikes. Through word
              association, stories, songs and rhymes, we help to develop the
              children’s understanding of the world around them and encourage
              them to develop their language, knowledge and confidence.
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

export default PreNursery;
