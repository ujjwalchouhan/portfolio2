import React, {
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
} from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import HeroIconScroller from "./HeroIconScroller";
import { useScroll } from "../context/ScrollContext";
import { useHeroScene } from "../context/HeroSceneContext";
import "../styles/HomeHero.css";

const TITLE_WORDS = ["AI-Driven", "UI/UX", "Designer"];
const TITLE_WORD_STRENGTHS = { "AI-Driven": 1.4, "UI/UX": 1.0, Designer: 0.7 };
const SCROLL_TRANSITION_THRESHOLD = 300;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

const HomeHero = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const titleWrapRef = useRef(null);
  const wordRefs = useRef([]);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const btnViewRef = useRef(null);
  const btnResumeRef = useRef(null);
  const iconsWrapRef = useRef(null);
  const quickTosRef = useRef([]);
  const heroScrollStateRef = useRef("visible");

  const { scrollY } = useScroll();
  const heroScrollProgress = Math.min(1, scrollY / SCROLL_TRANSITION_THRESHOLD);
  const { mousePosition, registerHeroRefs } = useHeroScene();
  const reducedMotion = useReducedMotion();

  const setWordRef = useCallback((el, i) => {
    wordRefs.current[i] = el;
  }, []);

  // Register hero refs for shared timeline (no separate entrance – handled by HomeScene)
  useLayoutEffect(() => {
    registerHeroRefs({
      greeting: introRef,
      titleWrap: titleWrapRef,
      words: wordRefs,
      desc: descRef,
      btnView: btnViewRef,
      btnResume: btnResumeRef,
      icons: iconsWrapRef,
    });
    return () => registerHeroRefs(null);
  }, [registerHeroRefs]);

  // Scroll resistance intro (first 120px): squash title, lock desc, shift CTA
  useEffect(() => {
    if (reducedMotion || !titleWrapRef.current || !descRef.current || !ctaRef.current) return;
    const p = heroScrollProgress;
    gsap.set(titleWrapRef.current, { scaleY: 1 - p * 0.04 });
    gsap.set(descRef.current, { y: p * -8 });
    gsap.set(ctaRef.current, { y: p * 4 });
  }, [heroScrollProgress, reducedMotion]);

  // Scroll past threshold: hide hero content
  useEffect(() => {
    if (reducedMotion || !titleWrapRef.current || !descRef.current) return;
    const isScrolled = scrollY > SCROLL_TRANSITION_THRESHOLD;
    if (isScrolled && heroScrollStateRef.current !== "hidden") {
      heroScrollStateRef.current = "hidden";
      gsap.to(titleWrapRef.current, { scale: 0.98, duration: 0.7, ease: "power3.inOut" });
      gsap.to(descRef.current, { y: -20, opacity: 0, duration: 0.6, ease: "power3.inOut" });
    } else if (!isScrolled && heroScrollStateRef.current !== "visible") {
      heroScrollStateRef.current = "visible";
      gsap.to(titleWrapRef.current, { scale: 1, duration: 0.7, ease: "power3.inOut" });
      gsap.to(descRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.inOut" });
    }
  }, [scrollY, reducedMotion]);

  // Magnetic typography – per-word strength, non-linear falloff, velocity damping
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || reducedMotion || !wordRefs.current.length) return;
    const words = wordRefs.current.filter(Boolean);
    if (!words.length) return;
    const quickTos = words.map((el) => {
      const qx = gsap.quickTo(el, "x", { duration: 0.5, ease: "power2.out" });
      const qy = gsap.quickTo(el, "y", { duration: 0.5, ease: "power2.out" });
      return { x: qx, y: qy };
    });
    quickTosRef.current = quickTos;
    let rafId;
    const update = () => {
      const mp = mousePosition.current;
      const rect = hero.getBoundingClientRect();
      const mx = mp.inside ? mp.clientX - rect.left - rect.width / 2 : 0;
      const my = mp.inside ? mp.clientY - rect.top - rect.height / 2 : 0;
      const speed = Math.hypot(mp.vx || 0, mp.vy || 0);
      const velDamp = Math.max(0.3, 1 - speed / 800);
      words.forEach((el, i) => {
        if (!quickTos[i]) return;
        const wr = el.getBoundingClientRect();
        const wx = wr.left + wr.width / 2 - (rect.left + rect.width / 2);
        const wy = wr.top + wr.height / 2 - (rect.top + rect.height / 2);
        const dx = mx - wx;
        const dy = my - wy;
        const dist = Math.hypot(dx, dy) || 1;
        const range = 220;
        const normalizedDist = Math.min(1, dist / range);
        const falloff = 1 - Math.pow(normalizedDist, 1.5);
        const strength = TITLE_WORD_STRENGTHS[TITLE_WORDS[i]] ?? 1.0;
        const amount = falloff * strength * velDamp * Math.min(dist, 36);
        const tx = mp.inside ? (dx / dist) * amount : 0;
        const ty = mp.inside ? (dy / dist) * amount : 0;
        quickTos[i].x(tx);
        quickTos[i].y(ty);
      });
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      quickTos.forEach((q) => { q.x(0); q.y(0); });
    };
  }, [mousePosition, reducedMotion]);

  // CTA decision physics: hover shadow+scale, hold 700ms → highlight sweep, click → timeScale
  const btnHoveredRef = useRef({ view: false, resume: false });
  const [ctaHighlightKey, setCtaHighlightKey] = useState(null);
  const holdCheckRef = useRef(null);

  const handleBtnMouseEnter = useCallback(
    (ref, key) => {
      if (reducedMotion || !ref?.current) return;
      btnHoveredRef.current[key] = true;
      setCtaHighlightKey(null);
      if (holdCheckRef.current) clearTimeout(holdCheckRef.current);
      const shadow = key === "resume" ? "0 8px 28px rgba(255,102,36,0.5)" : "0 8px 24px rgba(0,0,0,0.2)";
      gsap.to(ref.current, {
        scale: 1.03,
        duration: 0.4,
        ease: "power2.out",
        boxShadow: shadow,
      });
      holdCheckRef.current = setTimeout(() => {
        if (btnHoveredRef.current[key]) setCtaHighlightKey(key);
      }, 200);
    },
    [reducedMotion]
  );
  const handleBtnMouseMove = useCallback(
    (e, ref) => {
      if (reducedMotion || !ref?.current) return;
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
      gsap.to(el, { x, y, duration: 0.4, ease: "power2.out" });
    },
    [reducedMotion]
  );
  const handleBtnMouseLeave = useCallback((ref, key) => {
    if (!ref?.current) return;
    btnHoveredRef.current[key] = false;
    setCtaHighlightKey(null);
    if (holdCheckRef.current) clearTimeout(holdCheckRef.current);
    const shadow = key === "resume" ? "0 4px 20px rgba(255,102,36,0.35)" : "0 4px 12px rgba(0,0,0,0.15)";
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      boxShadow: shadow,
    });
  }, []);
  const handleBtnClick = useCallback(
    (ref) => {
      if (reducedMotion || !ref?.current) return;
      gsap.to(gsap.globalTimeline, { timeScale: 0.3, duration: 0.05 });
      setTimeout(() => {
        gsap.to(gsap.globalTimeline, { timeScale: 1, duration: 0.15 });
      }, 120);
      const el = ref.current;
      gsap.timeline()
        .to(el, { scale: 0.95, duration: 0.08 })
        .to(el, { scale: 1, duration: 0.5, ease: "back.out(1.4)" });
    },
    [reducedMotion]
  );

  return (
    <header
      ref={heroRef}
      className="home-hero relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-x-hidden overflow-y-visible"
      style={{ background: "linear-gradient(170.1deg, #111111 7.43%, #0E1015 96.62%)" }}
    >
      {/* Hero glow ellipses – same gradient as About, hero-scoped */}
      <div className="hero-glow hero-glow-main" aria-hidden="true" />
      <div className="hero-glow hero-glow-top-right" aria-hidden="true" />
      <div className="hero-glow hero-glow-bottom-left" aria-hidden="true" />
      <div className="home-hero-noise pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 text-center z-10 relative">
        <p
          ref={introRef}
          className="home-hero-intro text-xl md:text-2xl font-light text-gray-400 mb-4"
        >
          Hey, <span className="font-serif italic text-white">I&apos;m Abhay.</span>
        </p>
        <h1
          ref={titleWrapRef}
          className="home-hero-title text-5xl md:text-8xl font-serif mb-8 text-balance leading-tight"
        >
          {TITLE_WORDS.map((word, i) => (
            <span
              key={i}
              ref={(el) => setWordRef(el, i)}
              className="home-hero-title-word inline-block mr-[0.2em]"
              style={{ willChange: "transform" }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p
          ref={descRef}
          className="home-hero-desc max-w-xl mx-auto text-gray-400 text-lg md:text-xl mb-12 font-light"
        >
          I design intuitive, AI-powered digital experiences that simplify
          complex problems and drive meaningful user adoption.
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            ref={btnViewRef}
            to="/works"
            className={`home-hero-btn home-hero-btn-view px-10 py-4 rounded-full font-medium text-inherit no-underline ${ctaHighlightKey === "view" ? "cta-highlight-sweep" : ""}`}
            onMouseEnter={() => handleBtnMouseEnter(btnViewRef, "view")}
            onMouseMove={(e) => handleBtnMouseMove(e, btnViewRef)}
            onMouseLeave={() => handleBtnMouseLeave(btnViewRef, "view")}
            onClick={() => handleBtnClick(btnViewRef)}
          >
            View work
          </Link>
          <a
            ref={btnResumeRef}
            href="/resume.pdf"
            download
            className={`home-hero-btn home-hero-btn-resume px-10 py-4 rounded-full font-medium flex items-center gap-2 no-underline ${ctaHighlightKey === "resume" ? "cta-highlight-sweep" : ""}`}
            onMouseEnter={() => handleBtnMouseEnter(btnResumeRef, "resume")}
            onMouseMove={(e) => handleBtnMouseMove(e, btnResumeRef)}
            onMouseLeave={() => handleBtnMouseLeave(btnResumeRef, "resume")}
            onClick={() => handleBtnClick(btnResumeRef)}
          >
            Resume
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <div ref={iconsWrapRef} className="home-hero-icons-wrap">
        <HeroIconScroller />
      </div>
    </header>
  );
};

export default HomeHero;
