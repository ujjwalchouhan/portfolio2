import React from "react";

export default function NoiseGrainOverlay({ sharp }) {
  return (
    <div
      className="about-noise-grain"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity: sharp ? 0.1 : 0.07,
        filter: sharp ? "contrast(1.2)" : "none",
        transition: "opacity 1.2s ease, filter 1.2s ease",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
