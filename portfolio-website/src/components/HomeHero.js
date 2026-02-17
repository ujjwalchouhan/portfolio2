import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";
import HeroIconScroller from "./HeroIconScroller";
import "./../styles/HomeHero.css";

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
      <div className="hero-glow-bg hero-glow-bg-top" aria-hidden="true"></div>
      <div className="hero-glow-bg hero-glow-bg-bottom" aria-hidden="true"></div>

      <div className="hero-main">
        <div className="hero-content">
          <motion.h1 className="hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="hero-title-line1">
              <span className="hero-title-hey">Hey,</span>
              <span className="hero-title-name"> I'm Abhay.</span>
            </span>
            <span className="hero-title-main">AI-Driven UI/UX Designer</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I design intuitive, AI-powered digital experiences that simplify complex problems and drive meaningful user adoption.
          </motion.p>
        </div>

        <motion.div
          className="hero-cta"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <Link to="/work" className="hero-btn hero-btn-view">
            View work
          </Link>
          <a href="/resume.pdf" download className="hero-btn hero-btn-resume">
            <span className="hero-btn-resume-text">Resume</span>
            <span className="hero-btn-download-icon">
              <LuDownload size={18} />
            </span>
          </a>
        </motion.div>
      </div>

      <HeroIconScroller />
    </section>
  );
};

export default HomeHero;