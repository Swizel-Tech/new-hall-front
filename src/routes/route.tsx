import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../components/ui/layout/AppLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ManagementTeam from "../pages/ManagementTeam";
import AimsObjectives from "../pages/AimsObjectives";
import PreSchool from "../pages/PreSchool";
import PreNursery from "../pages/PreNursery";
import Nursery from "../pages/Nursery";
import Primary from "../pages/Primary";
import College from "../pages/College";
import Application from "../pages/Application";
import TuitionFees from "../pages/TuitionFees";
import Football from "../pages/Football";
import BoardingFacility from "../pages/BoardingFacility";
import ContactUs from "../pages/ContactUs";
import AcademicCalendar from "../pages/AcademicCalendar";
import Cocurriculum from "../pages/Cocurriculum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "management-team",
        element: <ManagementTeam />,
      },
      {
        path: "aims-and-objectives",
        element: <AimsObjectives />,
      },
      {
        path: "pre-school",
        element: <PreSchool />,
      },
      {
        path: "pre-nursery",
        element: <PreNursery />,
      },
      {
        path: "nursery",
        element: <Nursery />,
      },
      {
        path: "elementary",
        element: <Primary />,
      },
      {
        path: "thecollege",
        element: <College />,
      },
      {
        path: "applying-to-new-hall",
        element: <Application />,
      },
      {
        path: "calendar",
        element: <AcademicCalendar />,
      },
      {
        path: "tuition-and-fees",
        element: <TuitionFees />,
      },
      {
        path: "footballacademy",
        element: <Football />,
      },
      {
        path: "boarding",
        element: <BoardingFacility />,
      },
      {
        path: "contact_us",
        element: <ContactUs />,
      },
      {
        path: "co-curriculum",
        element: <Cocurriculum />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
