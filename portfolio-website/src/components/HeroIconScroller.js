import React, { useState, useRef, useLayoutEffect, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useHeroScene } from "../context/HeroSceneContext";
import "../styles/HeroIconScroller.css";

import iconChatgpt from "../assets/icons/scroller/chatgpt.svg";
import iconNotion from "../assets/icons/scroller/notion.svg";
import iconMirror from "../assets/icons/scroller/mirror.svg";
import iconAdobe from "../assets/icons/scroller/adobe.svg";
import iconAi from "../assets/icons/scroller/ai.svg";
import iconPs from "../assets/icons/scroller/ps.svg";
import iconSd from "../assets/icons/scroller/sd.svg";
import iconIllustrator from "../assets/icons/scroller/illustator.svg";
import iconFarmer from "../assets/icons/scroller/farmer.svg";
import iconSketch from "../assets/icons/scroller/sketch.svg";
import iconFigma from "../assets/icons/scroller/figma.svg";

const TOOLS = [
  { icon: iconFigma, name: "Figma", description: "Design tool for creating and collaborating" },
  { icon: iconSketch, name: "Sketch", description: "Digital design toolkit for interfaces" },
  { icon: iconAdobe, name: "Adobe", description: "Creative apps and services" },
  { icon: iconPs, name: "Photoshop", description: "Image editing and digital art" },
  { icon: iconIllustrator, name: "Illustrator", description: "Vector graphics and illustration" },
  { icon: iconSd, name: "Stable Diffusion", description: "AI image generation" },
  { icon: iconAi, name: "AI", description: "AI tools and workflows" },
  { icon: iconChatgpt, name: "ChatGPT", description: "AI assistant for conversation and tasks" },
  { icon: iconNotion, name: "Notion", description: "Docs, wikis, and project management" },
  { icon: iconMirror, name: "Mirror", description: "Writing and publishing" },
  { icon: iconFarmer, name: "Farmer", description: "Design and development" },
];

function IconTile({ tool, tileRef: registerTileRef }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [popupPosition, setPopupPosition] = useState(null);
  const iconRef = useRef(null);
  const elRef = useRef(null);
  const setRef = useCallback((el) => {
    elRef.current = el;
    if (typeof registerTileRef === "function") registerTileRef(el);
  }, [registerTileRef]);
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    if (!isHovered || !iconRef.current) return;
    const rect = iconRef.current.getBoundingClientRect();
    setPopupPosition({
      left: rect.left + rect.width / 2,
      top: rect.top,
    });
  }, [isHovered]);

  useEffect(() => {
    if (!elRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (isHovered) {
      gsap.to(elRef.current, {
        scale: 1.08,
        y: -4,
        duration: 0.35,
        ease: "power2.out",
        boxShadow: "0 12px 28px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)",
        overwrite: true,
      });
    } else {
      gsap.to(elRef.current, {
        scale: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
        overwrite: true,
      });
    }
  }, [isHovered]);

  const handleClose = useCallback(() => {
    if (!isHovered) return;
    setIsHovered(false);
    setIsExiting(true);
  }, [isHovered]);

  const runPopupExit = useCallback(() => {
    if (!tooltipRef.current) {
      setIsExiting(false);
      return;
    }
    gsap.to(tooltipRef.current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => setIsExiting(false),
    });
  }, []);

  useEffect(() => {
    if (isExiting) runPopupExit();
  }, [isExiting, runPopupExit]);

  const showPopup = (isHovered || isExiting) && popupPosition;
  const popupContent = showPopup && (
    <div
      ref={tooltipRef}
      className="hero-icon-tooltip fixed z-[9999] w-[14rem] pointer-events-auto"
      style={{
        left: popupPosition.left,
        top: popupPosition.top,
        transform: "translate(-50%, calc(-100% - 8px))",
        opacity: isExiting ? undefined : 0,
        transformOrigin: "50% 100%",
      }}
      onMouseEnter={() => { setIsExiting(false); setIsHovered(true); }}
      onMouseLeave={handleClose}
      role="tooltip"
      aria-live="polite"
    >
      <div
        className="hero-icon-tooltip-inner rounded-2xl px-4 py-3 shadow-xl border border-white/20"
        style={{
          background: "rgba(255, 255, 255, 0.98)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
        }}
      >
        <p className="text-sm font-semibold text-[#0A0A0A] leading-tight mb-1">
          {tool.name}
        </p>
        <p className="text-xs text-[#666666] leading-snug">
          {tool.description}
        </p>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px]"
        style={{
          top: "100%",
          marginTop: "2px",
          borderTopColor: "rgba(255, 255, 255, 0.98)",
        }}
        aria-hidden="true"
      />
    </div>
  );

  useLayoutEffect(() => {
    if (!tooltipRef.current || !showPopup || isExiting) return;
    gsap.fromTo(
      tooltipRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.28, ease: "power2.out" }
    );
  }, [isHovered, popupPosition]);

  return (
    <>
      <div
        ref={iconRef}
        role="img"
        aria-label={tool.name}
        className="group relative flex-shrink-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleClose}
      >
        <div
          ref={setRef}
          className="hero-icon-tile flex-shrink-0 flex items-center justify-center transition-colors duration-200"
        >
          <img
            src={tool.icon}
            alt=""
            width={20}
            height={20}
            className="hero-icon-img object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>
      {typeof document !== "undefined" && popupContent && createPortal(popupContent, document.body)}
    </>
  );
}

const REPEAT_COUNT = 3;

function HeroIconScroller() {
  const trackRef = useRef(null);
  const iconRefsRef = useRef([]);
  const { mousePosition } = useHeroScene();
  const setTileRef = useCallback((el, idx) => {
    iconRefsRef.current[idx] = el;
  }, []);

  // Proximity: active dist<80, neighbor dist<160 (no scroll parallax when auto-scrolling)
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let rafId;
    const update = () => {
      const mp = mousePosition.current;
      const icons = iconRefsRef.current.filter(Boolean);
      icons.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dist = mp.inside ? Math.hypot(mp.clientX - cx, mp.clientY - cy) : 9999;
        const active = dist < 80;
        const neighbor = dist < 160 && !active;
        const scale = active ? 1.06 : neighbor ? 0.96 : 1;
        const opacity = active ? 1 : neighbor ? 0.7 : 0.9;
        const filter = active ? "grayscale(0)" : "grayscale(0.4)";
        gsap.to(el, { scale, opacity, filter, duration: 0.25, ease: "power2.out", overwrite: true });
      });
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => rafId && cancelAnimationFrame(rafId);
  }, [mousePosition]);

  return (
    <div className="hero-icon-scroller" aria-hidden="true">
      <div className="hero-icon-scroller-inner hero-icon-scroller-mask">
        <div ref={trackRef} className="hero-icon-scroll-track">
        {Array.from({ length: REPEAT_COUNT }, (_, blockIndex) => (
          <div key={blockIndex} className="hero-icon-scroller-set">
            {TOOLS.map((tool, i) => (
              <IconTile
                key={`${blockIndex}-${tool.name}`}
                tool={tool}
                tileRef={(el) => setTileRef(el, blockIndex * TOOLS.length + i)}
              />
            ))}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

IconTile.propTypes = {
  tool: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroIconScroller;
