import React from "react";
import { LuDownload } from "react-icons/lu";
import "./../styles/AboutSection.css";
import orangePointer from "./../assets/icons/orange-pointer.svg";
import grayArrow from "./../assets/icons/card-gary-arrow.svg";
import G from "./../assets/icons/G.svg";

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* Background gradient blur ellipses */}
      <div className="about-glow about-glow-main" aria-hidden="true" />
      <div className="about-glow about-glow-top-right" aria-hidden="true" />
      <div className="about-glow about-glow-bottom-left" aria-hidden="true" />

      <div className="about-inner grid-layout">
        <div className="about-grid">
          {/* Left: Quote card (Frame 1000015189) */}
          <div className="about-quote-card">
            {/* Ellipse 6 - gradient blur top right inside card */}
            <div className="about-quote-ellipse about-quote-ellipse-6" aria-hidden="true" />
            {/* Ellipse 7 - gradient blur bottom left inside card */}
            <div className="about-quote-ellipse about-quote-ellipse-7" aria-hidden="true" />

            {/* Orange icon (Vector) - top left */}
            <img
              src={orangePointer}
              alt=""
              className="about-quote-orange-pointer"
              aria-hidden="true"
            />

            {/* Vector - white curved decoration bottom right */}
            <img
              src={grayArrow}
              alt=""
              className="about-quote-gray-arrow"
              aria-hidden="true"
            />

            <p className="about-quote-text">
              I believe good design isn't how it looks — it's how clearly it
              solves a problem.
            </p>
          </div>

          {/* Right: About content */}
          <div className="about-content">
            <h3 className="about-label">About me</h3>

            <div className="about-name-block">
              <h2 className="about-name">Abhay Chouhan</h2>
              <div className="about-meta">
                <div className="about-avatar" aria-hidden="true">
                  <img src={G} alt="" />
                </div>
                <div className="about-meta-text">
                  <span className="about-company">
                    Galaxy Weblinks LTD, Indore
                  </span>
                  <span className="about-role">UI/UX Designer</span>
                </div>
              </div>
            </div>

            <div className="about-bio">
              <p className="about-bio-p">
                I'm a UI/UX Designer with 5+ years of experience designing SaaS
                and mobile products for startups and growing businesses.
                Proficient in using industry-standard designing software tools
                and techniques. My approach blends empathy, data, and
                AI-assisted workflows to create products that are not just
                visually polished, but practical, scalable, and easy to use.
              </p>
              <p className="about-bio-p">
                When I'm not designing interfaces, I'm refining workflows,
                exploring AI tools to improve efficiency, and learning how great
                products are built behind the scenes.
              </p>
            </div>

            <a href="/resume.pdf" download className="about-resume-btn">
              <span className="about-resume-text">Resume</span>
              <span className="about-resume-icon">
                <LuDownload size={18} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>

        {/* Decorative vertical line */}
        <div className="about-vertical-line" aria-hidden="true" />
      </div>
    </section>
  );
};

export default AboutSection;
