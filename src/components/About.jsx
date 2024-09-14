import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <h1 className={`${styles.sectionHeadText}`}>Overview</h1>
      <div className="flex flex-col justify-center">
        <h1 className="text-lg mb-4">
          I am a skilled software developer with experience Javascript, and
          expertise in frame works like React, NodeJS, ExpressJS, MongoDB. I am
          passionate about creating efficient and user-friendly applications
          that meet the needs of clients. Lets connect and build something
          together.
        </h1>
        <div className="flex gap-2 justify-between flex-wrap">
          {services.map((service) => (
            <div className="bg-gray-800 sm:w-[270px] w-full rounded-sm p-5">
              <div className="flex items-center justify-between">
                <h1>{service.title}</h1>
                <img src={service.icon} width={50} height={50} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
