import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import logo from "../assets/icons/logo.png";
import { useHeroScene } from "../context/HeroSceneContext";
import { useReadingMode } from "../context/ReadingModeContext";
import { useScroll } from "../context/ScrollContext";
import { useSectionAwareHeader } from "../hooks/useSectionAwareHeader";
import "../styles/HeroNav.css";

const NAV_LINKS = [
  { to: "/works", label: "Work" },
  { to: "/#about", label: "About" },
  { to: "/#process", label: "Process" },
];

const SCROLL_THRESHOLD = 60;

export default function HeroNav() {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const resumeRef = useRef(null);
  const [logoHovered, setLogoHovered] = useState(false);
  const { registerNavRefs, mousePosition } = useHeroScene();
  const { isReadingMode } = useReadingMode();
  const { scrollY } = useScroll();
  const { surface, reducedMotion } = useSectionAwareHeader();
  const quickTosRef = useRef([]);
  const heroScrollProgress = Math.min(1, scrollY / (SCROLL_THRESHOLD + 60));

  useLayoutEffect(() => {
    registerNavRefs({
      container: containerRef,
      logo: logoRef,
      links: linksRef,
    });
    return () => registerNavRefs(null);
  }, [registerNavRefs]);

  // Adaptive glass: section-aware vars + scroll compression (interpolation, no class snap)
  useEffect(() => {
    const el = containerRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const isOverLight = surface === "light";
    const dur = reducedMotion ? 0 : 0.36;

    // Mode A (dark): rgba(10,10,12,0.45–0.55), blur 18–22px, border 0.06
    // Mode B (light): rgba(10,10,12,0.65–0.75), blur 22–26px, border 0.10
    const bgAlphaMin = isOverLight ? 0.65 : 0.45;
    const bgAlphaMax = isOverLight ? 0.75 : 0.55;
    const blurMin = isOverLight ? 22 : 18;
    const blurMax = isOverLight ? 26 : 22;
    const borderAlpha = isOverLight ? 0.1 : 0.06;

    const bgAlpha = bgAlphaMin + heroScrollProgress * (bgAlphaMax - bgAlphaMin);
    const blur = blurMin + heroScrollProgress * (blurMax - blurMin);

    inner.style.setProperty("--nav-glass-bg", `rgba(10, 10, 12, ${bgAlpha})`);
    inner.style.setProperty("--nav-glass-blur", `${blur}px`);
    inner.style.setProperty("--nav-glass-border", `rgba(255, 255, 255, ${borderAlpha})`);
    inner.style.setProperty("--nav-glass-transition-dur", `${dur}s`);

    // Scroll compression: interpolated padding, gap, logo scale
    const padY = 0.75 - 0.25 * heroScrollProgress;
    const padX = 1.5 - 0.25 * heroScrollProgress;
    const gap = 2 - 0.5 * heroScrollProgress;
    const logoScale = 1 - 0.08 * heroScrollProgress;
    inner.style.setProperty("--nav-pad-y", `${padY}rem`);
    inner.style.setProperty("--nav-pad-x", `${padX}rem`);
    inner.style.setProperty("--nav-gap", `${gap}rem`);
    inner.style.setProperty("--nav-logo-scale", String(logoScale));

    if (surface !== "dark" || heroScrollProgress > 0.3) {
      el.style.setProperty("--nav-cursor-blur", "0px");
    }
  }, [surface, heroScrollProgress, reducedMotion]);

  // Cursor-reactive blur (hero zone only); reading mode increases blur
  useEffect(() => {
    const el = containerRef.current;
    if (!el || surface !== "dark" || heroScrollProgress > 0.3) return;
    let rafId;
    const update = () => {
      const mp = mousePosition.current;
      const normalizedY = mp?.inside ? mp.normalizedY : 0.5;
      let extraBlur = 0;
      if (heroScrollProgress < 0.2) {
        extraBlur = (8 + normalizedY * 6) * (1 - heroScrollProgress * 2.5);
      }
      if (isReadingMode) extraBlur += 8;
      el.style.setProperty("--nav-cursor-blur", `${extraBlur}px`);
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => rafId && cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mousePosition is a ref, read in RAF
  }, [surface, heroScrollProgress, isReadingMode]);

  // Magnetic nav links (shared mouse field)
  useEffect(() => {
    const links = linksRef.current.filter(Boolean);
    if (!links.length) return;
    const quickTos = links.map((el) => ({
      x: gsap.quickTo(el, "x", { duration: 0.4, ease: "power2.out" }),
      y: gsap.quickTo(el, "y", { duration: 0.4, ease: "power2.out" }),
    }));
    quickTosRef.current = quickTos;
    let rafId;
    const update = () => {
      const mp = mousePosition.current;
      if (!mp.inside) {
        quickTos.forEach((q) => { q.x(0); q.y(0); });
      } else {
        links.forEach((el, i) => {
          if (!el || !quickTos[i]) return;
          const r = el.getBoundingClientRect();
          const lx = r.left + r.width / 2;
          const ly = r.top + r.height / 2;
          const dx = mp.clientX - lx;
          const dy = mp.clientY - ly;
          const dist = Math.hypot(dx, dy) || 1;
          const range = 120;
          const falloff = Math.max(0, 1 - dist / range);
          const amount = isReadingMode ? falloff * 0.9 : falloff * 3;
          quickTos[i].x((dx / dist) * amount);
          quickTos[i].y((dy / dist) * amount);
        });
      }
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      quickTos.forEach((q) => { q.x(0); q.y(0); });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps -- mousePosition is a ref, read in RAF
  }, [isReadingMode]);

  // Logo beacon: idle micro-pulse every 12s
  useEffect(() => {
    const logoEl = logoRef.current;
    if (!logoEl || isReadingMode) return;
    const tween = gsap.timeline({ repeat: -1, repeatDelay: 11.4 });
    tween.to(logoEl, { scale: 1.02, duration: 0.4, ease: "power2.out" })
         .to(logoEl, { scale: 1, duration: 0.6, ease: "power2.inOut" });
    return () => tween.kill();
  }, [isReadingMode]);

  return (
    <nav
      ref={containerRef}
      className="hero-nav"
      data-surface={surface}
      data-purpose="main-navigation"
      aria-label="Main navigation"
    >
      <div ref={innerRef} className="hero-nav-inner">
        <Link
          ref={logoRef}
          to="/"
          className={`hero-nav-logo ${logoHovered ? "hero-nav-logo-hover" : ""}`}
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <img src={logo} alt="" className="hero-nav-logo-img" style={{ width: "100px" }} />
        </Link>
        <div className="hero-nav-links-wrap">
          <ul className="hero-nav-links">
          {NAV_LINKS.map((item, i) => (
            <li key={item.to}>
              <Link
                ref={(el) => { linksRef.current[i] = el; }}
                className="hero-nav-link"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
          </ul>
        </div>
        <a
          ref={resumeRef}
          href="/resume.pdf"
          download
          className="hero-nav-resume"
        >
          Resume
          <svg className="hero-nav-resume-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
