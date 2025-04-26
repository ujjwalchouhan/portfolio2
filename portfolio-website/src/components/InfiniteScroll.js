import React from "react";
import { motion } from "framer-motion";
import "./../styles/InfiniteScroll.css";
import starIcon from "../assets/icons/orange-pointer.svg";

const services = [
  "Branding",
  "Website Design",
  "UI Design",
  "Logo",
  "Graphic Design",
  "Branding",
  "Website Design",
  "UI Design",
  "Logo",
  "Graphic Design",
];

const InfiniteScrollable = () => {
  return (
    <div className="scroll-container">
      <motion.div
        className="scroll-content"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 18,
        }}
        initial={false} // Prevent initial animation flash
      >
        {[...services, ...services].map((service, index) => (
          <span key={index} className="scroll-item">
            <img 
              src={starIcon} 
              alt="icon" 
              className="scroll-icon" 
              loading="lazy" // Better performance
            />
            {service}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollable;