import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./../styles/Footer.css";
import { FaRegCopy } from "react-icons/fa6";
import starIcon from "../assets/icons/orange-pointer.svg";
import grayArrow from "../assets/icons/card-gary-arrow.svg";

const Footer = () => {
  const email = "abhaychouhan24.designs@gmail.com";
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 500);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY) setRotation((prev) => prev + 10);
      else if (currentScroll < lastScrollY) setRotation((prev) => prev - 10);
      lastScrollY = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      {/* Section-level blur (Ellipse 6) */}
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-inner">
        {/* Main card - Frame 1000015189 */}
        <motion.div
          className="footer-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Gradient ellipses inside card */}
          <div className="footer-card-ellipse footer-card-ellipse-6" aria-hidden="true" />
          <div className="footer-card-ellipse footer-card-ellipse-7" aria-hidden="true" />

          {/* Decorative vector - right side */}
          <img src={grayArrow} alt="" className="footer-card-vector" aria-hidden="true" />

          {/* Orange star icon - left */}
          <motion.img
            src={starIcon}
            alt=""
            className="footer-card-star"
            aria-hidden="true"
            animate={{ rotate: rotation }}
            transition={{ type: "spring", stiffness: 100 }}
          />

          {/* Heading */}
          <h2 className="footer-card-heading">Let's build something meaningful together</h2>
          <p className="footer-card-subtext">Let's make an impact</p>

          {/* Email block - Frame 3903 */}
          <div className="footer-card-email">
            <div className="footer-card-email-icon" aria-hidden="true">
              <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" alt="" />
            </div>
            <a href={`mailto:${email}`} className="footer-card-email-link">
              {email}
            </a>
          </div>

          {/* Copy button - Button/Copy */}
          <button type="button" className="footer-copy-btn" onClick={copyToClipboard}>
            <span className="footer-copy-text">Copy to Clipboard</span>
            <span className="footer-copy-icon">
              <FaRegCopy className="footer-copy-icon-svg" aria-hidden="true" />
            </span>
          </button>

          {tooltipVisible && (
            <div className="footer-tooltip" aria-live="polite">Copied to clipboard!</div>
          )}
        </motion.div>

        {/* Footer credit - Group 3878 */}
        <p className="footer-credit">
          Thank you for visiting my portfolio. This site is designed by me
        </p>
      </div>
    </footer>
  );
};

export default Footer;
