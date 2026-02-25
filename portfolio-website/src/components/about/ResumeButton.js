import React, { useRef, useCallback } from "react";
import gsap from "gsap";

const MAGNETIC_RADIUS = 100;
const MAGNETIC_STRENGTH = 0.35;

export default function ResumeButton({ progress, onPress, reducedMotion }) {
  const btnRef = useRef(null);
  const isInteractive = progress >= 0.75;
  const saturationProgress = Math.max(0, (progress - 0.7) / 0.2);

  const handleMouseDown = useCallback(() => {
    if (isInteractive && onPress) onPress();
  }, [isInteractive, onPress]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!btnRef.current || !isInteractive || reducedMotion) return;
      const rect = btnRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < MAGNETIC_RADIUS) {
        const f = 1 - dist / MAGNETIC_RADIUS;
        gsap.to(btnRef.current, {
          x: dx * MAGNETIC_STRENGTH * f,
          y: dy * MAGNETIC_STRENGTH * f,
          duration: 0.6,
          ease: "power2.out",
        });
      } else {
        gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
      }
    },
    [isInteractive, reducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (btnRef.current) {
      gsap.to(btnRef.current, { x: 0, y: 0, duration: 1, ease: "power2.out" });
    }
  }, []);

  return (
    <a
      ref={btnRef}
      href="/resume.pdf"
      download
      className="about-resume-btn"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        pointerEvents: isInteractive ? "auto" : "none",
        opacity: 0.4 + saturationProgress * 0.6,
        filter: `saturate(${0.6 + saturationProgress * 0.4})`,
        transition: "opacity 2s ease, filter 2s ease",
      }}
    >
      <span className="about-resume-text">Resume</span>
      <span className="about-resume-icon">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </span>
    </a>
  );
}
