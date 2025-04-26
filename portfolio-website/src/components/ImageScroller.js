import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./../styles/ImageScroller.css";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";
import project8 from "../assets/images/project8.png";
import project9 from "../assets/images/project9.jpg";
import project10 from "../assets/images/project10.png";

const ImageScroller = () => {
  // Configuration - adjust these values as needed
  const IMAGE_COUNT = 10; // Number of unique images
  const DUPLICATION_FACTOR = 4; // How many times to duplicate the set
  const TARGET_SPEED = 360; // DOUBLED from 180 to 360 pixels per second
  const IMAGE_WIDTH = 300; // px
  const IMAGE_GAP = 10; // px

  const images = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10
  ];
  const scrollerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPosition = useRef(0);
  const lastTimeRef = useRef(null);

  const [containerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  // Calculate speed multiplier based on conditions
  const getSpeedMultiplier = () => {
    if (typeof window === 'undefined') return 1;
    if (document.hidden) return 0.3; // Slow down when tab is inactive
    return 1;
  };

  useEffect(() => {
    if (!inView) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    scrollPosition.current = 0;
    lastTimeRef.current = null;

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      // Calculate speed with multiplier (now using doubled TARGET_SPEED)
      const speed = (TARGET_SPEED * deltaTime * getSpeedMultiplier()) / 1000;
      scrollPosition.current += speed;

      // Reset position when scrolled one full set
      if (scrollPosition.current >= IMAGE_COUNT * (IMAGE_WIDTH + IMAGE_GAP)) {
        scrollPosition.current = 0;
      }

      scroller.style.transform = `translateX(-${scrollPosition.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [inView, IMAGE_COUNT, IMAGE_WIDTH, IMAGE_GAP, TARGET_SPEED]);

  // Generate image elements with performance optimizations
  const renderImages = () => {
    const imageElements = [];
    const totalImages = IMAGE_COUNT * DUPLICATION_FACTOR;

    for (let i = 0; i < totalImages; i++) {
      const imgIndex = i % IMAGE_COUNT;
      imageElements.push(
        <div
          key={`img-${i}`}
          className="scroller-item"
          style={{
            width: `${IMAGE_WIDTH}px`,
            marginRight: `${IMAGE_GAP}px`,
            flexShrink: 0,
          }}
        >
          <img
            src={images[imgIndex]}
            alt=""
            className="scroller-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      );
    }
    return imageElements;
  };

  return (
    <motion.div
      className="scroller-container"
      ref={containerRef}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="scroller" ref={scrollerRef}>
        {renderImages()}
      </div>
    </motion.div>
  );
};

export default ImageScroller;