import React from "react";

export default function NameReveal({ progress, reducedMotion }) {
  // Simple premium fade-in when section enters view (no letter wave, no spacing animation)
  const visible = reducedMotion ? 1 : Math.max(0, Math.min(1, (progress - 0.06) / 0.2));

  return (
    <div className="about-name-block">
      <h2
        className="about-name"
        style={{
          opacity: visible,
          transform: `translateY(${8 * (1 - visible)}px)`,
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        Abhay Chouhan
      </h2>
    </div>
  );
}
