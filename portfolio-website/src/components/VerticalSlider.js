import React from "react";
import { motion } from "framer-motion";
import "./../styles/VerticalSlider.css";

const colorsLeft = ["purple", "pink", "gray", "blue"];
const colorsRight = ["blue", "purple", "pink", "gray"];

const repeatColors = (colors, count) =>
  Array.from({ length: count }, (_, i) => colors[i % colors.length]);

const VerticalSlider = () => {
  return (
    <motion.div
      className="vertical-slider"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    >
      <div className="gradient-overlay" />
      <div className="gradient-overlay" />

      <div className="column column-left">
        {repeatColors(colorsLeft, 16).map((color, i) => (
          <div className={`slide ${color}`} key={`left-${i}`} />
        ))}
      </div>

      <div className="column column-right">
        {repeatColors(colorsRight, 20).map((color, i) => (
          <div className={`slide ${color}`} key={`right-${i}`} />
        ))}
      </div>
    </motion.div>
  );
};

export default VerticalSlider;