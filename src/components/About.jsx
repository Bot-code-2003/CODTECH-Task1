import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="aqua-royal-blue-gradient p-[3px] rounded-[20px] shadow-card"
        >
          <div className="min-h-[280px] bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="font-bold text-center text-white text-[20px]">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 leading-7 text-secondary max-w-3xl"
      >
        I am a skilled software developer with experience Javascript, and
        expertise in frame works like React, NodeJS, ExpressJS, MongoDB. I am
        passionate about creating efficient and user-friendly applications that
        meet the needs of clients. Lets connect and build something together.
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
