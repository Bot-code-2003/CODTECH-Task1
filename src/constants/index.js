import {
  mobile,
  backend,
  creator,
  web,
  crypto,
  gamercave,
  onepiece,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
];

const projects = [
  {
    name: "Onepiece Blog",
    description:
      "A website where users can get a deep insight on One-piece, the characters and ”Can browse and even post their wildest theories!! Users can comment on a theory/post and like them aswell.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: onepiece,
    source_code_link: "https://github.com/Bot-code-2003/One-piece",
  },
  {
    name: "Gamers Cave",
    description:
      "This site show cases top 6 games of all available genres, and details of each game.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "gray-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gamercave,
    source_code_link: "https://github.com/Bot-code-2003/Gamers-Cave",
  },
  {
    name: "Crypto Insights",
    description:
      "Crypto Insights is your go-to platform to check real-time data for the best cryptocurrencies available",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/Bot-code-2003/CryptoInsights",
  },
];

export { services, projects };
