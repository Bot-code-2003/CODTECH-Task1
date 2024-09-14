import {
  mobile,
  backend,
  creator,
  web,
  crypto,
  gamercave,
  onepiece,
  mythic,
  red2,
  mythic2,
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
    name: "Mythical Realm",
    description:
      "A Netflix-like Platform for Fantasy, Horror, and Space Story Lovers.",
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
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mythic2,
    source_code_link: "https://github.com/Bot-code-2003/Mythical_Realm",
  },
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
    name: "Red Thread",
    description:
      "A Social media site where users can post, like, comment and browse.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: red2,
    source_code_link: "https://github.com/Bot-code-2003/RedThread",
  },
];

export { services, projects };
