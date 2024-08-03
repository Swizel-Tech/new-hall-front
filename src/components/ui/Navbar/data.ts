import { SideNavProps } from "./Navs";

export const navData: SideNavProps[] = [
  {
    href: "/",
    text: "Home",
    dropdown: false,
    scrolledState: false,
    children: [],
  },
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
      // {
      //   href: "nursery-2",
      //   text: "Nursery Two",
      // },
      {
        href: "elementary",
        text: "Primary",
      },
      // {
      //   href: "junior-elementary-2",
      //   text: "Upper Primary",
      // },
      {
        href: "thecollege",
        text: "College",
      },
      // {
      //   href: "boarding",
      //   text: "Boarding School",
      // },
    ],
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
      {
        href: "child-requirement",
        text: "Child Requirements",
      },
    ],
  },
  {
    href: "/footballacademy",
    text: "Football Academy",
    dropdown: false,
    scrolledState: false,
    children: [],
  },
  {
    href: "/boarding",
    text: "Boarding School",
    dropdown: false,
    scrolledState: false,
    children: [],
  },
  {
    href: "/contact_us",
    text: "Contact Us",
    dropdown: false,
    scrolledState: false,
    children: [],
  },
];
