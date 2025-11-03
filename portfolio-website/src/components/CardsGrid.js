import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { FiArrowUpRight } from "react-icons/fi";
import "./../styles/CardsGrid.css";
import project1 from "../assets/images/project7.png";
import project2 from "../assets/images/project8.png";
import project10 from "../assets/images/project10.png";
import project12 from "../assets/images/project12.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const allCardsData = [
  {
    image: project1,
    category: "My Loan",
    title: "Compare loan offers easily and apply quickly with trusted lenders.",
    tags: ["Web & Mobile", "UX/UI Design", "Loan Comparison"],
    path: "MYLONE",
  },
  {
    image: project2,
    category: "Kaashin",
    title: "Brand identity that embodies Varanasi's serene essence ",
    tags: ["Logo", "UX/UI Design", "Hospitality"],
    path: "KAASHIN",
  },
  {
    image: project12,
    category: "Aucto Seller Mobile App",
    title: "Empowering Industrial Sellers to Manage Auctions on the Go",
    tags: ["Mobile", "UX/UI Design", "Auction and Seller app"],
    path: "AUCTOSELLERAPP",
  },
  {
    image: project10,
    category: "EL Riad Shrine",
    title: "Designed Ticket Booking Experience for Their Event Halls",
    tags: ["Web & Mobile", "Design Ticket Booking Experience", "UI/UX Designer"],
    path: "ELRIADSHRINE",
  },
  {
    image: project5,
    category: "FinancePro",
    title: "Fintech Dashboard Design",
    tags: ["Finance", "UX/UI Design", "Web App"],
    path: "FINANCEPRO",
  },
  {
    image: project6,
    category: "E-CommerceX",
    title: "Modern E-Commerce UI/UX",
    tags: ["E-Commerce", "UX/UI Design", "Mobile App"],
    path: "ECOMMERCEX",
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
