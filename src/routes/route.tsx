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
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
