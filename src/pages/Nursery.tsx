import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { slider1, slider2, slider4 } from "../assets";
import Slider from "react-slick";
import { useEffect, useState } from "react";
// import { useRef } from "react";
// import { GameChangers } from "../components/ui/display/Slider/GameChangers";
// import { NewsSlider } from "../components/ui/display/Slider/NewsSlider";
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
//     imgSrc: slider4,
//     date: "13 Sep",
//     title: "Better Times Magazine - Issues 16",
//   },
// ];

const Nursery = () => {
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
    <div className="mt-10 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Nursery
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
            Nursery
          </p>
        </div>
        <div className="px-4 my-6 lg:pb-[3rem] lg:px-[8%]">
          <div className="w-full gap-6">
            <h2 className="font-OpenSans mb-4 font-semibold italic text-[24px] leading-[61px] w-full text-[#000]">
              Nursery One
            </h2>
            <p className="font-Lato text-[16px] mb-4 font-semibold leading-[25.6px] text-justify">
              Children of this age range like to know what comes next and learn
              really quickly to follow routines, gradually adapting to the
              ‘social rules’ that go with them. They begin to show
              characteristics such as leadership and sensitivity.
            </p>
            <div className="w-full">
              <img src={slider4} alt="nursery" className="w-[80%]" />
            </div>
            <p className="font-Lato text-[16px] my-4 font-normal leading-[25.6px] text-justify">
              They tell us what they are making and inform us of their progress.
              We talk to them about their work using the correct language e.g.
              ‘Tell me about your picture’. Open questions also encourage their
              language development and strengthen the purpose of the activity.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              The planned programmes effectively promote the children’s
              personal, social and emotional development. The range of
              activities provided offers good opportunities for learning, and
              the staff work hard to foster the children’s self-confidence and
              their understanding of necessary rules and routines.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              The children respond well to the expectations of the staff, they
              show consideration for others and have the ability to share their
              thought and ideas with the adults. The children make independent
              choices within the activities, many show sustained levels of
              concentration in their play. They also help to clear the toys and
              do so efficiently by learning to use the language associated with
              direction and position, they know where the materials are kept and
              handle them with care.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              They have a large conservatory room where they spend quite a lot
              of their time with table top work, group time, ‘messy’ play etc.
              there is also a home corner which changes its theme every term
              e.g. home, shop, garage. A small area which is carpeted is used
              for Montessori learning, story time, music and movement, computer
              and television (with limited viewing).
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              In this class we provide every possibility for self help skills
              and independence. For example, during painting they learn to know
              that they need to have an apron, paper, paint pots and brushes to
              carry out their work. They help to clear up after they have
              finished. Group time is planned so as incorporate the early years
              curriculum. The children start to have name recognition and letter
              recognition. They learn pencil control and how to sit together for
              story time, which is interactive.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              By using a wide range of Montessori equipments in a play capacity,
              the children build their confident ready for when they use this
              equipment for ‘real’. Sorting by colours, size and shape help
              towards mathematical skills.
            </p>
          </div>
          <div className="w-full gap-6">
            <h2 className="font-OpenSans mb-5 font-semibold italic text-[24px] leading-[61px] w-full text-[#000]">
              Nursery Two
            </h2>
            <p className="font-Lato text-[16px] mb-4 font-semibold leading-[25.6px] text-justify">
              In this group, the children learn to further develop the skills
              that they have learnt in nursery 1 and they also learn skills that
              introduce them to the six basic areas of learning in the early
              years.
            </p>
            <Slider {...settings}>
              <div className="w-full">
                <img src={slider1} alt="nursery" className="w-[80%]" />
              </div>
              <div className="w-full">
                <img src={slider2} alt="nursery" className="w-[80%]" />
              </div>
            </Slider>
            <p className="font-Lato text-[16px] my-4 font-semibold italic leading-[25.6px] text-justify">
              These basic areas that provide important foundation for future
              learning are:
            </p>
            <ul className="list-disc my-4">
              <li className="font-Lato text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                <span className="font-semibold">Personal/Social</span> - covers
                skills such as dressing/ undressing without help, working alone
                or in groups and being confident in new situations
              </li>
              <li className="font-Lato text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                <span className="font-semibold">Language/Literacy</span> -
                covers speaking and listening as well as basic writing symbols
              </li>
              <li className="font-Lato text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                <span className="font-semibold"> Numeracy </span> covers
                counting, number recognition, mathematical language and
                expressions, shapes and positional language (front, behind etc)
              </li>
              <li className="font-Lato text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                <span className="font-semibold">
                  Knowledge and understanding of the world
                </span>
                - covers science, geography, history, design/technology and ICT
                at their level.
              </li>
              <li className="font-Lato text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                <span className="font-semibold">Creative Development</span>-
                covers music, art and craft.
              </li>
              <li className="font-Lato text-[16px] font-normal my-2 italic leading-[25.6px] text-justify">
                <span className="font-semibold"> Physical development</span> -
                covers games and gymnastics.
              </li>
            </ul>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              Ladybird learn–to–read scheme is used for reading. This scheme has
              a strong emphasis on developing a love for reading and also builds
              reading skills with the use of phonics. The goal of the
              mathematics program is to enable children to use mathematics
              through exploration, discovery, thinking and solving problems.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              Through observing our children we realize when they are ready to
              move on to further stages of learning. Regular observation ensures
              that we recognize achievement, assess our own work and identify
              individual needs.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              The curriculum for this class is designed to develop the essential
              reading skills, mathematical skills, problem solving, deductive
              reasoning and analytical thinking skills in readiness for the
              Elementary section.
            </p>
            <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
              While the essence of preparing the children for the Elementary
              section is important, we do not forget that the children learn
              more from play at this age. The staffs encourage this and make
              sure that the children feel safe, happy and secure in their
              environment, which makes for good all round development.
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

export default Nursery;
