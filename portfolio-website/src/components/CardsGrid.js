import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { FiArrowUpRight } from "react-icons/fi";
import "./../styles/CardsGrid.css";
import { MYLONE, KAASHIN, AUCTOSELLERAPP, ELRIADSHRINE } from "../data/projectContent";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const allCardsData = [
  {
    image: MYLONE.image,
    category: MYLONE.company,
    title: MYLONE.title,
    tags: ["Web & Mobile", "UX/UI Design", "Loan Comparison"],
    path: "MYLONE",
  },
  {
    image: KAASHIN.image,
    category: KAASHIN.company,
    title: KAASHIN.title,
    tags: ["Logo", "UX/UI Design", "Hospitality"],
    path: "KAASHIN",
  },
  {
    image: AUCTOSELLERAPP.image,
    category: AUCTOSELLERAPP.company,
    title: AUCTOSELLERAPP.title,
    tags: ["Mobile", "UX/UI Design", "Auction and Seller app"],
    path: "AUCTOSELLERAPP",
  },
  {
    image: ELRIADSHRINE.image,
    category: ELRIADSHRINE.company,
    title: ELRIADSHRINE.title,
    tags: ["Web & Mobile", "Design Ticket Booking Experience", "UI/UX Designer"],
    path: "ELRIADSHRINE",
  },
];

const CardsGrid = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/work");
  };

  return (
    <div className="justify-content-center grid-body">
      <div className="works-section grid-layout">
        <header className="works-heading">
          <span className="works-label">Works</span>
          <h2 className="works-title">Explore my design work and process</h2>
        </header>

        <div className="cards-grid">
          {allCardsData.map((card) => (
            <Card
              key={card.path}
              image={card.image}
              category={card.category}
              title={card.title}
              tags={card.tags}
              path={card.path}
            />
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="d-flex justify-content-center py-5 mb-sm-4 mob-btn"
        >
          <button className="view-more-button-c" onClick={handleNavigate}>
            <span className="text">View more work</span>
            <div className="arrow-circle-c">
              <FiArrowUpRight className="arrow-icon-c" />
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CardsGrid;
