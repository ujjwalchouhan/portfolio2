import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { FiArrowUpRight } from "react-icons/fi";
import "./../styles/CardsGrid.css";
import project1 from "../assets/images/project7.png";
import project2 from "../assets/images/project8.png";
import project3 from "../assets/images/project9.jpg";
import project4 from "../assets/images/project10.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const allCardsData = [
  {
    image: project1,
    category: "Strom Lake Capital",
    title: "Redesign Website for SLC",
    tags: ["Web & Mobile", "UX/UI Design", "Booking Application"],
  },
  {
    image: project2,
    category: "My Loan",
    title: "Be Smart - Compare Loan Offers",
    tags: ["Web & Mobile", "UX/UI Design", "Fintech"],
  },
  {
    image: project3,
    category: "Pepsi",
    title: "Unlock Your Business Growth Potential",
    tags: ["Marketing", "UX/UI Design", "Web Development"],
  },
  {
    image: project4,
    category: "Kaashin",
    title: "A Gateway to Timeless Peace",
    tags: ["Branding", "UI Design", "Web & Mobile"],
  },
  {
    image: project5,
    category: "FinancePro",
    title: "Fintech Dashboard Design",
    tags: ["Finance", "UX/UI Design", "Web App"],
  },
  {
    image: project6,
    category: "E-CommerceX",
    title: "Modern E-Commerce UI/UX",
    tags: ["E-Commerce", "UX/UI Design", "Mobile App"],
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
      <div>
        <div className="cards-grid grid-layout">
          {allCardsData.slice(0, 6).map((card, index) => (
            <Card
              key={index}
              image={card.image}
              category={card.category}
              title={card.title}
              tags={card.tags}
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
