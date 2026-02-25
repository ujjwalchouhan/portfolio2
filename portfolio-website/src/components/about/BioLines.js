import React from "react";

const PARAGRAPHS = [
  "I'm a UI/UX Designer with 5+ years of experience designing SaaS and mobile products for startups and growing businesses. Proficient in using industry-standard designing software tools and techniques.My approach blends empathy, data, and AI-assisted workflows to create products that are not just visually polished, but practical, scalable, and easy to use.",
  "When I'm not designing interfaces, I'm refining workflows, exploring AI tools to improve efficiency, and learning how great products are built behind the scenes.",
];

export default function BioLines({ progress, scrollVelocity, reducedMotion }) {
  const startProgress = 0.35;
  const endProgress = 0.8;
  const range = endProgress - startProgress;
  const progressInRange = Math.max(0, Math.min(1, (progress - startProgress) / range));
  const lineCount = PARAGRAPHS.length;
  const lineProgress = (i) => {
    const segment = 1 / lineCount;
    const lineStart = i * segment;
    const lineEnd = (i + 1) * segment;
    if (progressInRange <= lineStart) return 0;
    if (progressInRange >= lineEnd) return 1;
    return (progressInRange - lineStart) / (lineEnd - lineStart);
  };

  const absVel = Math.min(1, Math.abs(scrollVelocity || 0) / 800);

  return (
    <div className="about-bio">
      {PARAGRAPHS.map((text, i) => {
        const p = lineProgress(i);
        const blur = reducedMotion ? 0 : 6 - p * 6 + absVel * 4;
        const opacity = reducedMotion ? 1 : 0.25 + p * 0.75;
        const contrast = reducedMotion ? 1 : 0.8 + p * 0.2;
        return (
          <div key={i} className="about-bio-line-wrap">
            <p
              className="about-bio-p"
              style={{
                opacity,
                filter: `blur(${blur}px) contrast(${contrast})`,
                transition: reducedMotion ? "none" : "opacity 1.6s ease, filter 1.6s ease",
              }}
            >
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
