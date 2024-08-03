import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { MobileNav } from "../Navbar/MobileNav";
import ScrollToTopButton from "../display/Scroll/ScrollToTopButton";
import ScrollToTop from "../display/Scroll/ScrollToTop";

export const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location, navigate]);
  return (
    <div
      className={`relative m-auto font-light transition-[background-color] duration-500 ease-out`}
    >
      <div className="flex m-auto flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <MobileNav />
      <ScrollToTop />
      <ScrollToTopButton />
    </div>
  );
};
