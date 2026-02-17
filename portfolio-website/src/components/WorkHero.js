import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/WorkHero.css";
import Card from "./Card";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { MYLONE, KAASHIN, AUCTOSELLERAPP, ELRIADSHRINE } from "../data/projectContent";

const workData = [
  { id: 1, image: MYLONE.image, category: MYLONE.company, title: MYLONE.title, tags: ["Web & Mobile", "UX/UI Design", "Loan Comparison"], path: "MYLONE" },
  { id: 2, image: KAASHIN.image, category: KAASHIN.company, title: KAASHIN.title, tags: ["Logo", "UX/UI Design", "Hospitality"], path: "KAASHIN" },
  { id: 3, image: AUCTOSELLERAPP.image, category: AUCTOSELLERAPP.company, title: AUCTOSELLERAPP.title, tags: ["Mobile", "UX/UI Design", "Auction and Seller app"], path: "AUCTOSELLERAPP" },
  { id: 4, image: ELRIADSHRINE.image, category: ELRIADSHRINE.company, title: ELRIADSHRINE.title, tags: ["Web & Mobile", "Design Ticket Booking Experience", "UI/UX Designer"], path: "ELRIADSHRINE" },
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
  const navigate = useNavigate();

  return (
    <section className="work-hero">
      {/* Hero header with gradient background and blur orbs */}
      <div className="work-hero-header">
        <div className="work-hero-ellipse work-hero-ellipse--top" aria-hidden="true" />
        <div className="work-hero-ellipse work-hero-ellipse--bottom" aria-hidden="true" />

        <motion.div
          className="work-hero-frame"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="work-hero-row">
            <button
              type="button"
              className="work-hero-back"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <FiArrowLeft className="work-hero-back-icon" />
            </button>
            <span className="work-hero-label">Work</span>
          </div>
          <h1 className="work-hero-heading">Explore my design work and process</h1>
        </motion.div>
      </div>

      {/* Work Cards */}
      <motion.div
        className="work-cards grid-layout"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {workData.map((card) => (
          <motion.div key={card.id} variants={cardVariants}>
            <Card
              image={card.image}
              category={card.category}
              title={card.title}
              tags={card.tags}
              path={card.path}
            />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default WorkHero;
