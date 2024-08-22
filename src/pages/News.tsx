import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight, FaUser, FaSearch } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { format, parseISO } from "date-fns";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { motion } from "framer-motion";
import { get_blogs } from "../utils/apiService";

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
const News = () => {
  let navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);

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
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    navigate("/home");
  };

  const getAllNews = async () => {
    try {
      const blogs = await get_blogs();
      console.log(blogs.data);
      const mappedData = blogs.data.map((item: any) => ({
        _id: item._id,
        title: item.title,
        content: item.content,
        author: {
          _id: item.author._id,
          idNo: item.author.idNo,
          email: item.author.email,
          firstName: item.author.firstName,
          lastName: item.author.lastName,
          middleName: item.author.middleName,
        },
        category: item.category,
        images: item.images,
        published: item.published,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      }));

      setNewsData(mappedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredNews = newsData.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const recentNews = filteredNews
    .sort(
      (a, b) =>
        parseISO(b.createdAt).getTime() - parseISO(a.createdAt).getTime()
    )
    .slice(0, 3);

  const boxVariants = {
    initial: { backgroundColor: "#3D83F6" },
    hover: { backgroundColor: "#5c93ec" },
  };

  const handleNewsView = (blogId: string) => {
    console.log(blogId);

    navigate(`/post/${blogId}`);
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
            News
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
            News
          </p>
        </div>
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col sm:flex-row justify-between items-start">
          <div className="w-full lg:w-[78%]">
            {currentNews.map((article) => (
              <div key={article._id} className="mb-[5rem]">
                <div className="border-b-[1px] border-[#ddd]">
                  <div className="mt-4 flex flex-wrap">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL}/${
                        article.images[0]
                      }`}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-start items-center gap-3">
                    <p className="font-OpenSans py-2 font-normal uppercase text-[11px] leading-[17.6px] flex justify-start items-center gap-2">
                      <BsCalendar3 className="text-blue-500" />
                      {format(parseISO(article.createdAt), "MMMM do, yyyy")}
                    </p>
                    <p className="font-OpenSans py-2 font-normal text-[11px] uppercase leading-[17.6px] flex justify-start items-center gap-2">
                      <MdCategory className="text-blue-500" />
                      <span>{article.category}</span>
                    </p>
                    <p className="font-OpenSans py-2 font-normal text-[11px] uppercase leading-[17.6px] flex justify-start items-center gap-2">
                      <FaUser className="text-blue-500" />
                      <span>
                        By {article.author.firstName} {article.author.lastName}
                      </span>
                    </p>
                  </div>
                </div>
                <h3 className="text-[24px] font-semibold font-Raleway leading-[31px] my-4">
                  {article.title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  className="overflow-x-hidden mt-2 px-2 rounded-lg text-justify overflow-y-hidden h-[110px] text-[#000] font-normal font-DMSans text-[14px]"
                ></div>
                <motion.button
                  className="text-[14px] font-semibold font-OpenSans leading-[25.5px] text-white px-6 py-4 mt-4 lg:mt-[2rem]"
                  initial="initial"
                  whileHover="hover"
                  variants={boxVariants}
                  transition={{ duration: 0.5 }}
                  value="Send"
                  type="submit"
                  onClick={() => handleNewsView(article._id)}
                >
                  Read More
                </motion.button>
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 text-blue-500 flex justify-center items-center gap-2 rounded disabled:text-gray-300"
              >
                {currentPage !== 1 && (
                  <GrLinkPrevious className="text-[24px]" />
                )}
                <span className="text-[14px]">Prev</span>
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-blue-500 flex justify-center items-center gap-2 rounded disabled:text-gray-300"
              >
                <span className="text-[14px]">Next</span>
                {currentPage !== totalPages && (
                  <GrLinkNext className="text-[24px]" />
                )}
              </button>
            </div>
          </div>
          <div className="w-full mt-4 lg:w-[20%]">
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
            {recentNews.length > 0 ? (
              recentNews.map((article) => (
                <ul key={article._id} className="list-none">
                  <li className="border-b-[1px] border-[#DDD] py-3">
                    <button className="text-[14px] font-normal font-Raleway text-blue-500 hover:text-[#fba59d]">
                      {article.title}
                    </button>
                    <p className="font-OpenSans py-2 font-normal uppercase text-[11px] leading-[17.6px] flex justify-start items-center gap-2">
                      <BsCalendar3 className="text-blue-500" />
                      {format(parseISO(article.createdAt), "MMMM do, yyyy")}
                    </p>
                  </li>
                </ul>
              ))
            ) : (
              <p>No news articles found.</p>
            )}

            <h2 className="text-[16px] uppercase my-4 leading-[22px] font-Raleway font-semibold ">
              Category
            </h2>
            <ul>
              {currentNews.map((article) => (
                <li className="font-OpenSans capitalize py-1 font-semibold text-[14px]">
                  {article.category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
