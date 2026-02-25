import React, { useRef } from "react";
import NameReveal from "./NameReveal";
import JobBadge from "./JobBadge";
import BioLines from "./BioLines";
import ResumeButton from "./ResumeButton";

export default function ContentColumn({ progress, scrollVelocity, onResumePress, reducedMotion }) {
  const contentRef = useRef(null);

  const luminance = progress < 0.01 ? 0 : Math.min(1, 0.5 + (progress - 0.01) / 0.25);
  const scrollOut = progress > 0.88;
  const contentOpacity = scrollOut ? luminance * 0.95 : luminance;

  return (
    <div
      ref={contentRef}
      className="about-content"
      data-reading-zone="bio"
      style={{
        opacity: contentOpacity,
        filter: reducedMotion ? "none" : `brightness(${0.6 + luminance * 0.4})`,
        transition: "opacity 1.6s ease, filter 1.6s ease",
      }}
    >
      <span className="about-label">About me</span>
      <NameReveal progress={progress} reducedMotion={reducedMotion} />
      <JobBadge progress={progress} reducedMotion={reducedMotion} />
      <BioLines progress={progress} scrollVelocity={scrollVelocity} reducedMotion={reducedMotion} />
      <ResumeButton
        progress={progress}
        onPress={onResumePress}
        reducedMotion={reducedMotion}
      />
    </div>
  );
}
