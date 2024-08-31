import { logo } from "../../../assets";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "./Navs";
import { navData } from "./data";
import { FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export const MobileNav = () => {
  const [menuClicked, setmenuClicked] = useState(false);
  let navigate = useNavigate();

  const handlehomeNavigate = () => {
    navigate("/home");
    setmenuClicked(false);
  };
  return (
    <nav className="z-20 w-full fixed bg-transparent py-0 top-0  shadow-xl lg:hidden">
      <div className="px-6 flex py-2 bg-[#191919] justify-between w-full items-center">
        <button onClick={() => setmenuClicked(!menuClicked)}>
          {menuClicked ? (
            <RxCross1 fontSize={30} className="text-[#fff]" />
          ) : (
            <MdMenu fontSize={30} className="text-[#fff]" />
          )}
        </button>
        <button onClick={handlehomeNavigate}>
          <img src={logo} alt="logo" className="w-[200px]" />
        </button>
        <FaSearch fontSize={25} className="text-[#fff]" />
      </div>
      {menuClicked && (
        <div className="bg-[#c31515] py-4">
          <h2 className="w-full text-[16px] font-semibold uppercase py-3 px-4 bg-black text-white">
            Menu
          </h2>
          <motion.div
            className={`w-full h-[100vh] py-3 px-4 shadow-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <button
              className="font-OpenSans text-white text-[16px] text-left font-normal uppercase"
              onClick={handlehomeNavigate}
            >
              Home
            </button>
            <div className="w-full h-full overflow-y-auto py-3 flex flex-col justify-start items-start">
              {navData.map((data) => (
                <Nav key={data.text} {...data} />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};
