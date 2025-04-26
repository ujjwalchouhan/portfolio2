import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./../styles/Footer.css";
import { FaRegCopy } from "react-icons/fa6";
import starIcon from "../assets/icons/orange-pointer.svg";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
    const email = "Abhaychouhan24.designs@gmail.com";
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [rotation, setRotation] = useState(0);
    const lastScrollY = useRef(0); // 👈 Correct way to store previous scroll position

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setTooltipVisible(true);
        setTimeout(() => {
            setTooltipVisible(false);
        }, 500);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollY.current) {
                // scrolling down
                setRotation(prev => prev + 10);
            } else if (currentScroll < lastScrollY.current) {
                // scrolling up
                setRotation(prev => prev - 10);
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="footer grid-layout">
            <motion.div
                className="footer-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="d-lg-flex">
                    <motion.img
                        src={starIcon}
                        alt="Star Icon"
                        className="star-icon"
                        animate={{ rotate: rotation }}
                        transition={{ type: "spring", stiffness: 100 }}
                    />
                    <motion.div
                        className="footer-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h1>
                            Let's create something extraordinary
                            together <GoDotFill className="dot-svg" />
                        </h1>
                        <p>Let’s make an impact</p>
                    </motion.div>
                </div>

                <motion.div
                    className="footer-contact"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="email-section">
                        <div className="email-icon">
                            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" alt="Gmail" />
                        </div>
                        <a href={`mailto:${email}`} className="email-link">
                            {email}
                        </a>
                    </div>

                    <button className="copy-button" onClick={copyToClipboard}>
                        Copy to Clipboard
                        <div className="copy-icon">
                            <FaRegCopy className="reg-copy-icon" />
                        </div>
                    </button>

                    {tooltipVisible && (
                        <div className="tooltip">Copied to clipboard!</div>
                    )}
                </motion.div>
            </motion.div>

            <hr className="footer-line w-100 mx-0" />
            <p className="footer-rights">© 2025 All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
