import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./../styles/AboutHero.css";
import { LuDownload } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import VerticalSlider from "./VerticalSlider";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const AboutHero = () => {
    const sectionRef = useRef(null);
    const [sectionHeight, setSectionHeight] = useState(0);

    useEffect(() => {
        if (sectionRef.current) {
            const height = sectionRef.current.getBoundingClientRect().height;
            setSectionHeight(height);
        }
    }, [sectionRef]);

    return (
        <div className="d-flex about-container">
            <motion.section
                className="about-hero"
                ref={sectionRef}
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.h2 className="about-title" variants={itemVariants}>
                    About me
                </motion.h2>

                <motion.h1 className="about-name" variants={itemVariants}>
                    Abhay Chouhan
                </motion.h1>

                <motion.h3 className="about-role" variants={itemVariants}>
                    UI/UX Designer
                </motion.h3>

                <motion.p className="about-description" variants={itemVariants}>
                    Dynamic and creative UI Designer with 4+ years of experience in designing engaging,
                    innovative, and responsive interfaces for web and mobile applications. Proficient
                    in using industry-standard designing software tools and techniques. Recognized for
                    delivering creative solutions that meet customer needs while driving engagement,
                    user experience, and revenue growth.
                </motion.p>

                <motion.div className="working-status" variants={itemVariants}>
                    <span className="status-icon">
                        <GoDotFill className="verified-icon" />
                    </span>
                    <span className="status-text">
                        Currently working at Galaxy Weblinks (Indore, India)
                    </span>
                </motion.div>

                <motion.button
                    className="resume-button"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Resume
                    <div className="download-icon">
                        <LuDownload className="downl-icon" />
                    </div>
                </motion.button>
            </motion.section>

            <div className="verti-cntr" style={{ height: `${sectionHeight}px` }}>
                <VerticalSlider />
            </div>
        </div>
    );
};

export default AboutHero;
