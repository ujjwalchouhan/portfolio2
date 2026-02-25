import React, { useRef, useCallback, useEffect, useState } from "react";
import gsap from "gsap";
import cardGrayArrow from "../../assets/icons/card-gary-arrow.svg";
import StarIcon from "./StarIcon";

const RESISTANCE_STRENGTH = 0.03;

export default function QuoteCard({ progress, reducedMotion, onHover }) {
  const cardRef = useRef(null);
  const innerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const offsetX = useRef(0);
  const offsetY = useRef(0);

  const blurProgress = Math.min(1, progress / 0.2);
  const cardOpacity = Math.min(1, progress / 0.12);
  const blurPx = reducedMotion ? 0 : 20 - blurProgress * 20;

  // Idle breathing scale 1 → 1.01 every 6s (CSS handles it; GSAP for click)

  // Cursor resistance: card moves AWAY from cursor
  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current || reducedMotion) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const range = 200;
      const falloff = Math.max(0, 1 - dist / range);
      offsetX.current = -(dx / dist) * RESISTANCE_STRENGTH * falloff * 100;
      offsetY.current = -(dy / dist) * RESISTANCE_STRENGTH * falloff * 100;
    },
    [reducedMotion],
  );

  const handleMouseLeave = useCallback(() => {
    offsetX.current = 0;
    offsetY.current = 0;
    setIsHovered(false);
    onHover?.(false);
  }, [onHover]);

  useEffect(() => {
    if (!cardRef.current || reducedMotion) return;
    let rafId;
    const el = cardRef.current;
    let x = 0;
    let y = 0;
    const update = () => {
      x += (offsetX.current - x) * 0.08;
      y += (offsetY.current - y) * 0.08;
      const breath = 1 + 0.005 * Math.sin((Date.now() / 3000) * Math.PI * 2);
      el.style.transform = `translate(${x}px, ${y}px) scale(${breath})`;
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [reducedMotion]);

  const handleDeviceOrientation = useCallback(
    (e) => {
      if (!cardRef.current || !isTouch || reducedMotion) return;
      const beta = (e.beta ?? 0) - 45;
      const gamma = (e.gamma ?? 0) * 0.5;
      offsetX.current = gamma * 2;
      offsetY.current = beta * 0.5;
    },
    [isTouch, reducedMotion],
  );

  useEffect(() => {
    setIsTouch(!window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!isTouch) return;
    window.addEventListener("deviceorientation", handleDeviceOrientation, {
      passive: true,
    });
    return () =>
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
  }, [isTouch, handleDeviceOrientation]);

  const handleClick = useCallback(() => {
    if (!innerRef.current || reducedMotion) return;
    const el = innerRef.current;
    gsap.to(el, { scale: 1.04, duration: 0.4, ease: "power2.out" });
    gsap.to(el, { scale: 1, duration: 1, ease: "power2.out", delay: 0.4 });
  }, [reducedMotion]);

  return (
    <div
      ref={cardRef}
      className={`about-quote-card${progress > 0.88 ? " about-quote-card-scroll-out" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.(true);
      }}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={
        reducedMotion
          ? {}
          : {
              opacity: progress > 0.88 ? cardOpacity * 0.88 : cardOpacity,
              filter: `blur(${blurPx}px)`,
              transition: "opacity 1.2s ease",
            }
      }
    >
      <div ref={innerRef} className="about-quote-card-inner">
        <div className="about-quote-ellipse about-quote-ellipse-6" />
        <div className="about-quote-ellipse about-quote-ellipse-7" />
        <StarIcon />
        <p
          className="about-quote-text"
          style={{
            filter:
              isHovered && !reducedMotion ? "contrast(1.08)" : "contrast(1)",
            transition: "filter 1.2s ease",
          }}
        >
          &quot;I believe good design isn&apos;t how it looks — it&apos;s how
          clearly it solves a problem.&quot;
        </p>
        <img
          src={cardGrayArrow}
          alt=""
          className="about-quote-gray-arrow"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
