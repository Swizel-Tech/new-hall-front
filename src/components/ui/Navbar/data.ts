import { SideNavProps } from "./Navs";
import { logo2 } from "../../../assets";

export const navData: SideNavProps[] = [
  {
    href: "",
    text: "About Us",
    dropdown: true,
    scrolledState: false,
    children: [
      {
        href: "aboutus",
        text: "About the School",
      },
      {
        href: "management-team",
        text: "Management Team",
      },
      {
        href: "aims-and-objectives",
        text: "Aims and Objective",
      },
    ],
    image: "",
  },
  {
    href: "",
    text: "Academics",
    dropdown: true,
    scrolledState: false,
    children: [
      {
        href: "pre-school",
        text: "Pre-School",
      },
      {
        href: "pre-nursery",
        text: "Pre-Nursery",
      },
      {
        href: "nursery",
        text: "Nursery",
      },
      {
        href: "elementary",
        text: "Primary",
      },
      {
        href: "thecollege",
        text: "College",
      },
    ],
    image: "",
  },
  {
    href: "",
    text: "Admission",
    dropdown: true,
    scrolledState: false,
    children: [
      {
        href: "applying-to-new-hall",
        text: "Application",
      },
      {
        href: "tuition-and-fees",
        text: "Tuition & Fees",
      },
    ],
    image: "",
  },
  {
    href: "/",
    text: "",
    dropdown: false,
    scrolledState: false,
    children: [],
    image: `${logo2}`,
  },
  {
    href: "",
    text: "Pastoral care",
    dropdown: true,
    scrolledState: false,
    children: [
      {
        href: "/footballacademy",
        text: "Football Academy",
      },
      {
        href: "/co-curriculum",
        text: "Co-Curricular Activities",
      },
    ],
    image: "",
  },
  {
    href: "/boarding",
    text: "Boarding School",
    dropdown: false,
    scrolledState: false,
    children: [],
    image: "",
  },
  {
    href: "/contact_us",
    text: "Contact Us",
    dropdown: false,
    scrolledState: false,
    children: [],
    image: "",
  },
];
