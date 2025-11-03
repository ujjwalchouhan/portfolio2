import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./../styles/Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ image, category, title, tags, path }) => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const handleClick = () => {
    navigate(`/work/${path}`);
  };

  return (
    <motion.div
      ref={ref}
      className="card"
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="card-image-container">
        <img src={image} alt="Project Preview" loading="lazy" />
      </div>

      <div className="card-content">
        <div className="card-header">
          <span className="curly-brace">{'{'}</span>
          <p className="card-category">{category}</p>
          <span className="curly-brace">{'}'}</span>
        </div>

        <h2 className="card-title">{title}</h2>

        <div className="card-tags">
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <span>{tag}</span>
              {index < tags.length - 1 && <span className="dot"></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;