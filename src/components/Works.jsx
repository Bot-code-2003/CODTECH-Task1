import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <h1 className={`${styles.sectionHeadText}`}>Projects</h1>
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <div className="bg-gray-800 p-5 flex flex-col gap-1 mb-1 rounded-md">
            <div className="flex justify-between mb-1 items-center">
              <h1 className="text-2xl sm:text-3xl">"{project.name}"</h1>
              <img src={github} width={40} height={40} alt="" />
            </div>
            <p className="text-sm sm:text-xl">{project.description}</p>
            <div className="flex flex-wrap">
              {project.tags.map((tag) => (
                <p className={`${tag.color} mr-2`}>#{tag.name}</p>
              ))}
            </div>
            <div>
              <img className="rounded-md" src={`${project.image}`} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
