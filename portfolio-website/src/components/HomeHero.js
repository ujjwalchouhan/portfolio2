import React from "react";
import { motion } from "framer-motion";
import "./../styles/HomeHero.css";
import arrowIcon from '../assets/icons/arrow-icon.svg';
import whiteBorder from '../assets/icons/white-arrow-border.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

const HomeHero = () => {
  return (
    <section className="hero-container grid-layout">
      <div className="hero-glow-bg"></div>

      <div className="hero-content">
        <motion.p
          className="hero-subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Hi! I'm Abhay Chouhan
        </motion.p>

        <motion.h1
          className="hero-title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          A Digital Designer from India turning your ideas into pixel-perfect realities
        </motion.h1>
      </div>


      <div className="w-100">
        <motion.div
          className="hero-scroll"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img className="border-icon" src={whiteBorder} alt="Scroll Down" />
          <img className="arrow-icon" src={arrowIcon} alt="Scroll Down" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;