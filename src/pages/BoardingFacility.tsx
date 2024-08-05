import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import {
  STADIUM,
  boarding1,
  boarding3,
  boarding2,
  boarding4,
  boarding5,
} from "../assets";
import Slider from "react-slick";

const BoardingFacility = () => {
  let navigate = useNavigate();
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
  return (
    <div className="mt-20 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center bg-[#F3F3F3]`}
        >
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            New Hall Boarding School
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
            New Hall Boarding School
          </p>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] gap-4 flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full flex lg:flex-row justify-between items-start flex-col gap-6">
            <div className="w-full lg:w-[50%]">
              <Slider {...settings}>
                <div className="w-full">
                  <img src={STADIUM} alt="nursery" className="w-[100%]" />
                </div>
                <div className="w-full">
                  <img src={boarding1} alt="nursery" className="w-[100%]" />
                </div>
                <div className="w-full">
                  <img src={boarding4} alt="nursery" className="w-[100%]" />
                </div>
                <div className="w-full">
                  <img src={boarding5} alt="nursery" className="w-[100%]" />
                </div>
                <div className="w-full">
                  <img src={boarding3} alt="nursery" className="w-[100%]" />
                </div>
                <div className="w-full">
                  <img src={boarding2} alt="nursery" className="w-[100%]" />
                </div>
              </Slider>
            </div>
            <div className="flex flex-col w-full lg:w-[50%] justify-between items-start">
              <h2 className="font-Raleway mb-6 text-[36px] font-normal text-left leading-[44px]">
                Our Boarding Facilities!
              </h2>
              <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
                Our boarding school is well secured and has many benefits. These
                include extra lessons for boarders from our specialized and
                dedicated boarding staff. Our boarders also have access to
                internet in their hostels to enable them research and do school
                projects.
              </p>
              <p className="font-Lato text-[16px] font-normal leading-[25.6px] text-justify">
                We have the best sporting facilities for all our boarders, and
                also internationally trained coaches to train our boarders in
                various sports of their interest.
              </p>
              <p className="font-Lato mt-4 text-[16px] font-normal leading-[25.6px] text-justify">
                However, our boarding school is only open to children registered
                in the school within the ages of 10 -17 years. The boarding
                school is structured to accommodate weekly boarders, monthly
                boarders and termly boarders.
              </p>
              <p className="font-Lato mt-4 text-[16px] font-normal leading-[25.6px] text-justify">
                The School Board encourages students in Year 12 to use the
                boarding school, this is to enable them concentrate on their
                studies and utilize the school facilities and libraries in
                preparation for their final examinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingFacility;
