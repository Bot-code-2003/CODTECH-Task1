import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Spline from "@splinetool/react-spline";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col mt-5 justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white text-center sm:text-left`}
          >
            Hi, I'm <span className="text-[#915eff]">Dharmadeep</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-center sm:text-left`}
          >
            I am a{" "}
            <span className="text-[#915eff] italic">MERN Stack Developer</span>,
            I develope web applications, User Interface and User Experience.
          </p>
        </div>
      </div>
      <Spline
        scene="https://prod.spline.design/YwVLNTq15QidPDRH/scene.splinecode"
        className="z-100 absolute right-1/2 transform translate-x-1/2 sm:bottom-24 bottom-[120px] "
        style={{
          height: isSmallScreen ? "60%" : "50%",
          width: isSmallScreen ? "70%" : "60%",
          margin: "auto",
        }}
      />
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
