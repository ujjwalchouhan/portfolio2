import React, { useState } from "react";
import "./../styles/WorkHero.css";
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
import Card from "./Card";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

// Sample work data
const workData = [
  { id: 1, image: project10, category: "Web", title: "Web Project 1", tags: ["React", "UI/UX"] },
  { id: 2, image: project9, category: "Mobile", title: "Mobile Project 1", tags: ["Flutter", "Android"] },
  { id: 3, image: project8, category: "Graphic", title: "Graphic Design 1", tags: ["Adobe XD", "Figma"] },
  { id: 4, image: project7, category: "Web", title: "Web Project 2", tags: ["Next.js", "Tailwind"] },
  { id: 5, image: project6, category: "Mobile", title: "Mobile Project 2", tags: ["Swift", "iOS"] },
  { id: 6, image: project5, category: "Web", title: "Web Project 1", tags: ["React", "UI/UX"] },
  { id: 7, image: project4, category: "Mobile", title: "Mobile Project 1", tags: ["Flutter", "Android"] },
  { id: 8, image: project3, category: "Graphic", title: "Graphic Design 1", tags: ["Adobe XD", "Figma"] },
  { id: 9, image: project2, category: "Web", title: "Web Project 2", tags: ["Next.js", "Tailwind"] },
  { id: 10, image: project1, category: "Mobile", title: "Mobile Project 2", tags: ["Swift", "iOS"] },
  { id: 11, image: project10, category: "Web", title: "Web Project 1", tags: ["React", "UI/UX"] },
  { id: 12, image: project5, category: "Mobile", title: "Mobile Project 1", tags: ["Flutter", "Android"] },
  { id: 13, image: project2, category: "Graphic", title: "Graphic Design 1", tags: ["Adobe XD", "Figma"] },
  { id: 14, image: project7, category: "Web", title: "Web Project 2", tags: ["Next.js", "Tailwind"] },
  { id: 15, image: project4, category: "Mobile", title: "Mobile Project 2", tags: ["Swift", "iOS"] },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const WorkHero = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredWork =
    activeCategory === "All"
      ? workData
      : workData.filter((item) => item.category === activeCategory);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section className="work-hero">
      <motion.div
        className="poster grid-layout"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="work-title">My Work</h2>
        <h1 className="work-heading">
          Explore My Shots of Creativity that <br />
          tell Visual Stories of the Product
        </h1>

        <div className="work-filters">
          {["All", "Web", "Mobile", "Graphic"].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Work Cards */}
      <motion.div
        className="work-cards grid-layout"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {filteredWork.slice(0, visibleCount).map((card, index) => (
          <motion.div key={card.id} variants={cardVariants}>
            <Card
              image={card.image}
              category={card.category}
              title={card.title}
              tags={card.tags}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      {visibleCount < filteredWork.length && (
        <motion.div
          className="d-flex justify-content-center py-5 mb-sm-4 bg-gray mob-btn-work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button className="view-more-button-c" onClick={handleLoadMore}>
            <span className="text">View more work</span>
            <div className="arrow-circle-c">
              <FiArrowUpRight className="arrow-icon-c" />
            </div>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default WorkHero;
