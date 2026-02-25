import React from "react";
import galaxyIcon from "../../assets/icons/galaxy.svg";

export default function JobBadge({ progress, reducedMotion }) {
  const badgeVisible = progress >= 0.12;
  const transformProgress = Math.max(0, Math.min(1, (progress - 0.6) / 0.3));
  const isUnderline = transformProgress >= 0.9;

  return (
    <div className="about-meta-wrap">
      <div
        className="about-meta"
        style={{
          display: badgeVisible ? "flex" : "none",
          opacity: badgeVisible ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
      >
        <img
          src={galaxyIcon}
          alt="Galaxy Weblinks"
          className="about-avatar about-avatar-icon"
        />
        <div className="about-meta-text">
          <p className="about-company">Galaxy Weblinks LTD, Indore</p>
          <p className="about-role">UI/UX Designer</p>
        </div>
      </div>
      <div
        className="about-name-underline"
        style={{
          transform: `scaleX(${isUnderline ? 1 : 0})`,
          transformOrigin: "left",
          transition: "transform 1.6s ease",
          height: 2,
          background: "linear-gradient(90deg, #FF6624, transparent)",
          marginTop: isUnderline ? 8 : 0,
          maxWidth: 200,
        }}
      />
    </div>
  );
}
