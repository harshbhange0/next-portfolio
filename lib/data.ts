import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BlogPng from "@/public/blogapp.png";
import payts from "@/public/payts.png";
import pageapp from "@/public/pageapp.png";
import portfolio from "@/public/portfolio.png";
import StickNotes from "@/public/sticky-notes.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Ba",
    location: "Nagpur YCMOU",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Computer Operator and Programming Assistant ",
    location: "Nagpur ITI",
    description: "Started My Journey Of Web Development",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023 ",
  },
  {
    title: "Full Stack Development",
    location: "Nagpur",
    description:
      "I studied Full Stack Development about 6 month with rodetocode.org and gain skills like MERN Stack....",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022 - May 2023 ",
  },
  {
    title: "MERN Stack Developer",
    location: "Remote Intern ",
    description:
      "I joined EkatraOne a Ai/whatsapp Based study Platform as MERN Stack Dev get hanson some of there Api Libraries ",
    icon: React.createElement(FaReact),
    date: "2023 1 Month Oug ",
  },
  {
    title: "FUll Stack Development",
    location: "Harkirat Singh Cohort 100xdev",
    description: "Deep Dive into fullStack Dev  ",
    icon: React.createElement(FaReact),
    date: "2023 Dec - Present ",
  },
] as const;

export const projectsData = [
  {
    title: "Sticky Notes",
    description: "google Keep Like Clone ",
    tags: ["React", "postgresSQl", "Tailwind", "Prisma", "NextJS", "Next Auth"],
    imageUrl: StickNotes,
    githubUrl: "https://github.com/harshbhange0/sticky-notes",
    liveUrl: "https://sticky-notes-h0dev.vercel.app/",
  },
  {
    title: "Blog app",
    description:
      "I build a full-stack developer  project, Users can create blog, update blog, delete blog and view blog .",
    tags: [
      "React",
      "postgresSQl",
      "Tailwind",
      "Prisma",
      "jwt",
      "cloudFlare-worker",
    ],
    imageUrl: BlogPng,
    githubUrl: "https://github.com/harshbhange0/blog-app",
    liveUrl: "https://week-13-chi.vercel.app/",
  },
  {
    title: "PayTs",
    description:
      "a paytm Clone but with minimal features like Pay to other, transaction protection, jwt authentication ...",
    tags: [
      "React",
      "TypeScript",
      "Prisma",
      "Tailwind",
      "jwt",
      "nodejs",
      "expressjs",
    ],
    imageUrl: payts,
    githubUrl: "https://github.com/harshbhange0/week-11-paytm-ty",
    liveUrl: "https://main--paytsclient.netlify.app/",
  },
  {
    title: "Paginate",
    description: "Simple Paginate React App",
    tags: ["React", "Tailwind", "react-paginate"],
    imageUrl: pageapp,
    githubUrl: "https://github.com/harshbhange0/react-pagination",
    liveUrl: "https://react-pagination-app-harshbhange0.netlify.app/page=1",
  },
  {
    title: "Portfolio",
    description: "Simple PortFolio with animations",
    tags: ["React", "NextJs", "Tailwind", "framer-motion"],
    imageUrl: portfolio,
    githubUrl: "hhttps://github.com/harshbhange0/next-portfolio",
    liveUrl: "https://next-portfolio-eight-murex.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Figma",
  "Canva",
  "Tailwind",
  "Prisma",
  "ZOD",
  "Firebase",
  "JWT",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Docker",
  "cloudFlare",
  "Framer Motion",
] as const;
