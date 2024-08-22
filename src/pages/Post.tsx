import { useRef } from "react";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleRight, FaUser, FaSearch } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { format, parseISO } from "date-fns";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareFacebook,
} from "react-icons/fa6";
import { avatar } from "../assets";
import { motion } from "framer-motion";
import { get_a_blog } from "../utils/apiService";

interface NewsArticle {
  _id: string;
  title: string;
  content: string;
  author: {
    _id: string;
    idNo: string;
    email: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    phone: string;
    department: string;
    position: string;
    picture: string;
  };
  category: string;
  images: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}
const Post = () => {
  const form = useRef<HTMLFormElement>(null);
  let navigate = useNavigate();
  const [newsData, setNewsData] = useState<NewsArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { blogId } = useParams();

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

  const get_Blog = async () => {
    try {
      const blog = await get_a_blog(blogId);
      console.log(blog.data);
      setNewsData(blog.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_Blog();
  }, []);

  const handleClick = () => {
    navigate("/home");
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (!newsData) {
    return <div>Loading...</div>;
  }

  const boxVariants = {
    initial: { backgroundColor: "#3D83F6" },
    hover: { backgroundColor: "#5c93ec" },
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
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
            {newsData.title}
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
            Post
          </p>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col sm:flex-row justify-between items-start">
          <div className="w-full lg:w-[78%]">
            <div key={newsData._id} className="mb-[5rem]">
              <div className="border-b-[1px] w-full border-[#ddd]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {newsData.images.map((image, index) => (
                    <div className="">
                      <img
                        key={index}
                        src={`${import.meta.env.VITE_API_BASE_URL}/${image}`}
                        className="w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-start items-center gap-3">
                  <p className="font-Lato py-2 font-normal uppercase text-[11px] leading-[17.6px] flex justify-start items-center gap-2">
                    <BsCalendar3 className="text-blue-500" />
                    {format(parseISO(newsData.createdAt), "MMMM do, yyyy")}
                  </p>
                  <p className="font-Lato py-2 font-normal text-[11px] uppercase leading-[17.6px] flex justify-start items-center gap-2">
                    <MdCategory className="text-blue-500" />
                    <span>{newsData.category}</span>
                  </p>
                  <p className="font-Lato py-2 font-normal text-[11px] uppercase leading-[17.6px] flex justify-start items-center gap-2">
                    <FaUser className="text-blue-500" />
                    <span>
                      By {newsData.author.firstName} {newsData.author.lastName}
                    </span>
                  </p>
                </div>
              </div>
              <h3 className="text-[24px] font-semibold font-Raleway leading-[31px] my-6">
                {newsData.title}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: newsData.content }}
                className="overflow-x-hidden mt-2 px-2 rounded-lg text-justify text-[#000] font-normal font-DMSans text-[14px]"
              ></div>
            </div>
            <div className="flex border-t-[1.5px] border-b-[1.5px] py-4 border-[#ddd]">
              <button
                onClick={() => {
                  const strippedContent = newsData.content
                    .replace(/<[^>]+>/g, "")
                    .replace(/&nbsp;/g, " ")
                    .replace(/&amp;/g, "&")
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">")
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'");

                  window.open(
                    `https://twitter.com/share?url=${encodeURIComponent(
                      window.location.href
                    )}&text=${encodeURIComponent(
                      newsData.title
                    )} ${encodeURIComponent(strippedContent)}`,
                    "_blank"
                  );
                }}
              >
                <FaSquareXTwitter className="text-[20px] mx-1 text-blue-500" />
              </button>
              <button
                onClick={() => {
                  const strippedContent = newsData.content
                    .replace(/<[^>]+>/g, "")
                    .replace(/&nbsp;/g, " ")
                    .replace(/&amp;/g, "&")
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">")
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'");

                  window.open(
                    `https://www.instagram.com/?url=${encodeURIComponent(
                      window.location.href
                    )}&text=${encodeURIComponent(
                      newsData.title
                    )} ${encodeURIComponent(strippedContent)}`,
                    "_blank"
                  );
                }}
              >
                <FaSquareInstagram className="text-[20px] mx-1 text-blue-500" />
              </button>
              <button
                onClick={() => {
                  const strippedContent = newsData.content
                    .replace(/<[^>]+>/g, "")
                    .replace(/&nbsp;/g, " ")
                    .replace(/&amp;/g, "&")
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">")
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'");

                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      window.location.href
                    )}&text=${encodeURIComponent(
                      newsData.title
                    )} ${encodeURIComponent(strippedContent)}`,
                    "_blank"
                  );
                }}
              >
                <FaLinkedin className="text-[20px] mx-1 text-blue-500" />
              </button>

              <button
                onClick={() => {
                  const strippedContent = newsData.content
                    .replace(/<[^>]+>/g, "")
                    .replace(/&nbsp;/g, " ")
                    .replace(/&amp;/g, "&")
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">")
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'");

                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}&text=${encodeURIComponent(
                      newsData.title
                    )} ${encodeURIComponent(strippedContent)}`,
                    "_blank"
                  );
                }}
              >
                <FaSquareFacebook className="text-[20px] mx-1 text-blue-500" />
              </button>
            </div>

            <div>
              <h2 className="font-Raleway px-4 lg:px-[4%] text-[18px] font-semibold text-left leading-[44px]">
                1 Comment:
              </h2>
              <div className="px-4 lg:px-[4%] flex justify-start gap-3 items-end">
                <img src={avatar} alt="Avatar" />
                <div>
                  <h2 className="font-Raleway text-[14px] font-semibold text-left">
                    Admin
                  </h2>
                  <p className="font-Raleway text-[18px] font-normal text-left">
                    Hello Hello
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-4 mt-[10%] border-[1px] border-[#DDD]">
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
                  className="w-full p-4 my-4"
                  type="text"
                  name="user_name"
                  placeholder="Name"
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
                    className="w-full p-4 my-4 border-[1px] border-[#00C0FF]"
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
                    className="w-full p-4 my-4"
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
                  placeholder="Comment..."
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
                  Post Comment
                </motion.button>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-[20%]">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={handleSearch}
                className="p-2 focus:outline-none border border-gray-300 rounded w-full"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
            <h2 className="text-[16px] mb-4 leading-[22px] font-Raleway font-semibold ">
              Latest Posts
            </h2>
            <p>No recent news articles available in this view.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
