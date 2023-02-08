import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
// import { IProject, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";
import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Excellent Support for Backend Development",
    about:
      "Handle database, server, api using <b>Nest Framework </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Asp.Net Core</b>  & <b>C#</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Skiiled Debugger",
    about:
      "A daily problem solver using <b>Browser</b>  and <b>Developer Tool</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about: "Stunning user interface designer using <b>Figma</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "Mobile Developer",
    about: "A junior mobile developer using <b>React Native </b>",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "React",
    level: "78%",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "40%",
  },
  {
    Icon: BsCircleFill,
    name: "C#",
    level: "45%",
  },

  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "50%",
  },

  {
    Icon: BsCircleFill,
    name: "Solidity",
    level: "30%",
  },

  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Nextjs",
    level: "70%",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Version Control",
    level: "80%",
  },

  {
    Icon: BsCircleFill,
    name: "Microsoft Office",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "50%",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Handjobs",
    description:
      "Handjobs - A market place for skilled workers (Artisans)to be instantly reached by everyone who needs their service",
    image_path: "/images/handjobs.png",
    deployed_url: "https://handjobs-web.vercel.app/",
    github_url: "https://github.com/solomonsunday/handjobs-web",
    category: ["react", "bootstrap", "node", "redux", "rest_api"],
    key_techs: ["React", "Nodejs", "PrimeReact", "Bootstrap", "CSS"],
  },
  {
    id: 2,
    name: "Kapsuul",
    image_path: "/images/kapsuul.png",
    deployed_url: "https://www.kapsuulconnect.com/",
    github_url: "",
    category: ["react", "redux"],
    description:
      "A web app that helps Connect you to great minds and giving you insights to build, and grow your practice.",
    key_techs: ["React", "Nodejs", "Postgres", "Bootstrap", "Typescript"],
  },

  {
    id: 3,
    name: "Woozeee",
    image_path: "/images/woozeee.png",
    deployed_url: "https://woozeee.com/",
    github_url: "",
    category: ["node", "postgres", "react", "Material UI", "redux", "tailwind"],
    description:
      "Socials, Movies, Get Paid, Bills Payment, Loans, All in One App...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id: 4,
    name: "Krypto",
    image_path: "/images/krypto.png",
    deployed_url: "",
    github_url: "https://github.com/solomonsunday/krypto",
    category: ["react", "solidity", "tailwind"],
    description:
      "A Smart Contract used to transfer Etherium from one Wallet to another, built using React, Tailwind, and Solidity 0.8.0",
    key_techs: ["React", "solidity", "Tailwind"],
  },
  {
    id: 5,
    name: "Discover Coffee Store Near You",
    image_path: "/images/coffee_store_app.png",
    deployed_url: "",
    github_url: "https://github.com/solomonsunday/Discover-Coffee-store",
    category: ["react", "nextjs", "bootstrap"],
    description:
      "An application thats helps user to discover coffee stores near and around them",
    key_techs: ["React", "Bootstrap", "Nextjs"],
  },

  {
    id: 6,
    name: "Persist Africa",
    image_path: "/images/persistAfrica.png",
    deployed_url: "https://dev.app.persistafrica.com/",
    github_url:
      "https://github.com/ExquisAppFactory/talentbuildersapp/tree/dev",
    category: ["react", "nextjs", "bootstrap", "redux"],
    description: "An application that helps africa learn any native skill",
    key_techs: [
      "React",
      "Bootstrap",
      "Nextjs",
      "redux",
      "Styled Component",
      "AWS",
    ],
  },

  // {
  //     name: "Tweeter Clone",
  //     image_path: "/images/kapsuul.png",
  //     deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
  //     github_url: "",
  //     category: ["react", "react"],
  //     description:
  //         "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
  //     key_techs: ["React", "Django", "Django REST API"],
  // },

  // {
  //     name: "Color Classification using tf.js",
  //     image_path: "/images/kapsuul.png",
  //     deployed_url: "!#",
  //     github_url: "",
  //     category: ["node"],
  //     description:
  //         "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
  //     key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  // },

  // {
  //     name: "YouTube Clone",
  //     image_path: "/images/kapsuul.png",
  //     deployed_url: "https://o-my-goal.web.app/",
  //     github_url: "",
  //     category: ["react"],
  //     description:
  //         "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
  //     key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  // },
];
