import { useRef } from "react";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import MapComponent from "../components/ui/Map/MapComponent";
import { FiMapPin } from "react-icons/fi";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  createdBy: string;
  description: string;
  category: string;
  images: string[];
}

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  let navigate = useNavigate();
  let { id } = useParams<{ id: string }>();
  const [newsData, setNewsData] = useState<NewsArticle | null>(null);
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

  useEffect(() => {
    // Mock fetch the article data based on the ID
    const fetchedNewsData: NewsArticle = {
      id: 1,
      title: "School Science Fair",
      date: "2024-07-21",
      createdBy: "Rafael",
      category: "Event",
      description:
        "Education is the process of facilitating learning. Knowledge, skills, values, beliefs, and habits of a group of people are transferred to other people, through storytelling, discussion, teaching, training, or research. Education frequently takes place under the guidance of educators, but learners may also educate themselves in a process called autodidactic learning. Any experience that has a formative effect on the",
      images: [
        "https://newhallschool.com.ng/wp-content/uploads/2023/12/david-700x480.jpeg",
        "https://newhallschool.com.ng/wp-content/uploads/2023/12/david-700x480.jpeg",
      ],
    };

    setNewsData(fetchedNewsData);
    // if (id && Number(id) === fetchedNewsData.id) {
    // }
  }, [id]);

  const handleClick = () => {
    navigate("/home");
  };

  if (!newsData) {
    return <div>Loading...</div>;
  }

  const boxVariants = {
    initial: { backgroundColor: "#3B82F6" },
    hover: { backgroundColor: "#202942" },
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mt-20 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Contact Us
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
            ContactUs
          </p>
        </div>

        <MapComponent />
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full mt-4 lg:w-[40%]">
            <div className=" text-[16px] flex  w-full flex-col gap-2 justify-between items-start">
              <h2 className="text-[26px] font-semibold font-OpenSans ">
                Contact Info
              </h2>
              <div className="flex justify-center mb-2 items-start gap-2">
                <FiMapPin className="text-[50px] text-blue-500 m-0 p-0" />
                <div className="m-0 p-0">
                  <h2 className="text-[18px] mb-3 italic font-semibold font-OpenSans ">
                    Our Address
                  </h2>
                  <p className="text-[14px]  font-normal font-OpenSans ">
                    12 Adegbenle Street, Chevy View Estate, Off Chevron Drive,
                    Off Udeco Medical Road, Lekki, Lagos, Nigeria.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mb-2 items-start gap-2">
                <FaSquarePhone className="text-[25px] text-blue-500 m-0 p-0" />
                <div className="m-0 p-0">
                  <h2 className="text-[18px] mb-3 italic font-semibold font-OpenSans ">
                    Phone
                  </h2>
                  <p className="text-[14px] font-normal font-OpenSans ">
                    014530845, 014530846, 014530847, 08033395673
                  </p>
                </div>
              </div>
              <div className="flex justify-center mb-2 items-start gap-2">
                <MdEmail className="text-[20px] text-blue-500 m-0 p-0" />
                <div className="m-0 p-0">
                  <h2 className="text-[18px] mb-3 italic font-semibold font-OpenSans ">
                    Email
                  </h2>
                  <a
                    href="mailto:info@newhallschool.com.ng"
                    className="text-[16px] font-normal font-OpenSans text-blue-500 no-underline"
                  >
                    info@newhallschool.com.ng
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-[26px] font-semibold font-OpenSans ">
                For Further Enquiries
              </h2>
              <p className="text-[14px] my-4 font-normal font-OpenSans ">
                <span className="font-bold">School Director : </span>
                Mr. Abiodun Agbaje - 08033395673
              </p>
              <p className="text-[14px] font-normal font-OpenSans ">
                <span className="font-bold">Primary Principal : </span>
                Mrs. Chinedu Nkwontah - 07067847977
              </p>
              <p className="text-[14px]  my-4 font-normal font-OpenSans ">
                <span className="font-bold">Vice Principal College : </span>
                Mrs. Toyin Bot - 01- 2911370
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <div className={`w-full p-4 border-[1px] border-[#ddd] shadow-lg`}>
              <h2 className="font-Raleway text-[26px] font-semibold text-center my-3 leading-[44px]">
                Send Us a Message
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <motion.input
                  initial={{ border: "none" }}
                  whileFocus={{
                    border: "2px solid #00C0FF",
                    borderRadius: "10px",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: "12px",
                    outline: "none",
                  }}
                  className="w-full border-[1px] bg-[#ddd] p-4 my-4"
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                />
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <motion.input
                    initial={{ border: "none" }}
                    whileFocus={{
                      border: "2px solid #00C0FF",
                      borderRadius: "10px",
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      padding: "12px",
                      outline: "none",
                    }}
                    className="w-full p-4 my-4 bg-[#ddd]"
                    type="email"
                    name="user_email"
                    placeholder="Email"
                  />
                  <motion.input
                    initial={{ border: "none" }}
                    whileFocus={{
                      border: "2px solid #00C0FF",
                      borderRadius: "10px",
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      padding: "12px",
                      outline: "none",
                    }}
                    className="w-full bg-[#ddd] p-4 my-4"
                    type="text"
                    name="user_phone"
                    placeholder="Phone"
                  />
                </div>
                <motion.textarea
                  initial={{ border: "none" }}
                  whileFocus={{
                    border: "2px solid #00C0FF",
                    borderRadius: "10px",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: "12px",
                    outline: "none",
                    width: "100%",
                  }}
                  className="w-full bg-[#ddd] p-4 my-4"
                  placeholder="Message..."
                  name="message"
                  cols={30}
                  rows={6}
                ></motion.textarea>
                <motion.button
                  className="text-[17px] font-semibold font-Manrop leading-[25.5px] text-white px-8 py-2 mt-4 lg:mt-[2rem]"
                  initial="initial"
                  whileHover="hover"
                  variants={boxVariants}
                  transition={{ duration: 0.5 }}
                  value="Send"
                  type="submit"
                >
                  Submit
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
