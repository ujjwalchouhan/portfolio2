import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./../styles/VerticalSlider.css";

// Import project images
import project1 from "./../assets/images/project1.png";
import project2 from "./../assets/images/project2.png";
import project3 from "./../assets/images/project3.png";
import project4 from "./../assets/images/project4.png";
import project5 from "./../assets/images/project5.png";
import project6 from "./../assets/images/project6.png";
import project7 from "./../assets/images/project7.png";
import project8 from "./../assets/images/project8.png";
import project9 from "./../assets/images/project9.jpg";
import project10 from "./../assets/images/project10.png";

const images = [
  project1, project2, project3, project4, project5,
  project6, project7, project8, project9, project10
];

const colorsLeft = ["purple", "pink", "gray", "blue"];
const colorsRight = ["blue", "purple", "pink", "gray"];

const repeatItems = (items, count) =>
  Array.from({ length: count }, (_, i) => items[i % items.length]);

const SlideWithImage = ({ color, image, slideKey }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`slide ${color} ${imageLoaded ? 'loaded' : ''}`}>
      <img
        src={image}
        alt={`Project ${slideKey}`}
        onLoad={() => setImageLoaded(true)}
        className="slide-image"
      />
    </div>
  );
};

SlideWithImage.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slideKey: PropTypes.string.isRequired,
};

const VerticalSlider = () => {
  // Generate slide data with unique IDs
  const leftSlides = repeatItems(colorsLeft, 16).map((color, i) => ({
    id: `left-${color}-${i}`,
    color,
    image: images[i % images.length],
  }));

  const rightSlides = repeatItems(colorsRight, 20).map((color, i) => ({
    id: `right-${color}-${i}`,
    color,
    image: images[i % images.length],
  }));

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
        {leftSlides.map((slide) => (
          <SlideWithImage
            color={slide.color}
            image={slide.image}
            slideKey={slide.id}
            key={slide.id}
          />
        ))}
      </div>

      <div className="column column-right">
        {rightSlides.map((slide) => (
          <SlideWithImage
            color={slide.color}
            image={slide.image}
            slideKey={slide.id}
            key={slide.id}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default VerticalSlider;