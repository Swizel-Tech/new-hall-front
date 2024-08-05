// import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { slider1, slider2, slider3, slider4 } from "../assets";
import Slider from "react-slick";
// import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
// import { GameChangers } from "../components/ui/display/Slider/GameChangers";
// import EventsCalendar from "../components/ui/display/Calendar/Calendar";

const Primary = () => {
  let navigate = useNavigate();
  // const refbottom = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    navigate("/home");
  };

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
    <div className="mt-10 lg:mt-[12rem]">
      <div className="w-full">
        <div
          className={`h-[120px] flex justify-start items-center bg-[#F3F3F3]`}
        >
          <h2 className="font-OpenSans px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Elementary
          </h2>
        </div>
        <div className="flex mb-6 px-4 py-4 border-b-[1.5px] border-[#ddd] lg:px-[8%] justify-start gap-2 items-center">
          <button
            onClick={handleClick}
            className="text-[14px] font-normal font-OpenSans"
          >
            Home
          </button>
          <FaAngleRight />
          <p className="text-[14px] font-normal font-OpenSans text-blue-500">
            Elementary
          </p>
        </div>
        <div className="px-4 my-6 lg:pb-[3rem] lg:px-[8%]">
          <div className="w-full  gap-6">
            <h2 className="font-OpenSans mb-4 font-semibold italic text-[24px] leading-[61px] w-full text-[#000]">
              Lower Primary
            </h2>
            <Slider {...settings}>
              <div className="w-full">
                <img src={slider1} alt="nursery" className="w-[80%]" />
              </div>
              <div className="w-full">
                <img src={slider2} alt="nursery" className="w-[80%]" />
              </div>
              <div className="w-full">
                <img src={slider3} alt="nursery" className="w-[80%]" />
              </div>
              <div className="w-full">
                <img src={slider4} alt="nursery" className="w-[80%]" />
              </div>
            </Slider>
            <p className="font-OpenSans mt-4 text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              The British and the Nigerian National Curriculum for Primary
              Schools is used for these classes. However here at New Hall,
              additional emergent global issues and information are used to
              enhance the curriculum. Children are given a lot of opportunities
              to learn, think and reason. Each child is viewed as a unique
              person with individual pattern and timing of growth.
            </p>
            <p className="font-OpenSans text-[16px] my-4 font-semibold italic leading-[25.6px] text-justify">
              During the early years of elementary education we seek:
            </p>
            <ul className="list-disc px-4 my-4">
              <li className="font-OpenSans text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                To ensure pupils receive optimum tuition in order to maximize
                attainment and enhance their general development
              </li>
              <li className="font-OpenSans text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                To offer the right challenges within a well supervised and
                caring environment to enhance self-esteem and confidence.
              </li>
              <li className="font-OpenSans text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                To emphasize the importance of developing the core skills in
                literacy and numeracy
              </li>
              <li className="font-OpenSans text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                To advise, guide and train the child to develop appropriate
                behavioural skill at individual and group levels
              </li>
              <li className="font-OpenSans text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                To provide a stimulating and enjoyable learning environment in
                which happiness and application flourish side by side
              </li>
            </ul>
            <p className="font-OpenSans text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              To offer further specialist tuition, if needed, to pupils
              experiencing difficulties in satisfactory performance levels
            </p>
          </div>
          <div className="w-full">
            <h2 className="font-OpenSans mb-4 font-semibold italic text-[24px] leading-[61px] w-full text-[#000]">
              Upper Primary
            </h2>
            <div className="w-full mb-8">
              <img src={slider4} alt="nursery" className="w-[80%]" />
            </div>
            <p className="font-Lato text-[16px] mb-6 font-normal leading-[25.6px] text-justify">
              Without losing sight of the initial objectives, this stage extends
              the challenges offered and the demands to be faced. The curriculum
              becomes more specialized with the addition of new knowledge and
              skill training. Therefore, the emphasis on core skills continues,
              but increasingly these skills are used to seek and find
              information and solve problems. The use of new technologies in
              science and development of practical skills through art and craft
              initiate the children into the modern world.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              The level of demand in terms of self-discipline and personal
              organization are raised and responsibilities are increased at both
              individual and group levels.
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

export default Primary;
