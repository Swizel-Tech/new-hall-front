import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { slider3 } from "../assets";
import { useEffect, useState } from "react";

const TuitionFees = () => {
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
  const handleClick = () => {
    navigate("/home");
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
            Tuition and Fees
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
            Tuition and Fees
          </p>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col sm:flex-row justify-between items-start">
          <div className="w-full gap-6 flex flex-col justify-between items-center">
            <div className="w-full  flex flex-col justify-start items-start gap-2">
              <img src={slider3} alt="aims_and_obj" className="w-[50%]" />
              <div className="w-full">
                <h2 className="font-Raleway text-[18px] font-semibold text-left leading-[44px]">
                  SCHOOL FEES
                </h2>
                <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
                  The School fees are usually stated at the beginning of the
                  admissions process for a specific year. It includes the
                  registration fee, the tuition fee, educational resources fee,
                  School uniform, bus, lunch and extra-curricular.
                </p>
                <h2 className="font-Raleway text-[18px] font-semibold text-left leading-[44px]">
                  REGISTRATION FEE
                </h2>
                <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
                  The registration fee is a one-time non-refundable payment and
                  is due before a child is accepted for enrollment.
                </p>
                <h2 className="font-Raleway text-[18px] font-semibold text-left leading-[44px]">
                  TUITION FEE
                </h2>
                <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
                  The School Head will inform parents of current tuition when a
                  child is enrolled. Tuition should be paid in advance and is
                  due before the first day of School for each term.
                  <span className="font-semibold">NO CASH PAYMENT PLEASE.</span>
                </p>
                <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
                  Payments should be made directly to the School’s account at
                  the designated bank, bank pay-in-slips will be provided for
                  this purpose. Copies of pay-in-slips with the child’s name
                  should be deposited with the School’s Accountant for receipts
                  to be issued.
                </p>
                <h2 className="font-Raleway text-[18px] font-semibold text-left leading-[44px]">
                  PLEASE NOTE :
                </h2>
                <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
                  The School does not refund fees once payment has been made for
                  any reason. There is no reduction in tuition for absence from
                  School as the cost of maintaining a child in School continues
                  even when child is absent.
                </p>
                <p className="font-Lato text-[16px] mb-4 font-normal leading-[25.6px] text-justify">
                  Please note that those who have not paid the due fees by
                  second week of the term after resumption will not be allowed
                  in School until such fees are paid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionFees;
