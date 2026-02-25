import React, { createContext, useContext, useRef, useState, useEffect, useMemo } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollContext = createContext({ scrollY: 0, lenisRef: { current: null } });

export function ScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScroll = useRef(0);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ({ scroll }) => {
      const now = performance.now();
      const dt = Math.max(16, now - lastScrollTime.current);
      setScrollVelocity((scroll - lastScroll.current) / (dt / 1000));
      lastScroll.current = scroll;
      lastScrollTime.current = now;
      setScrollY(scroll);
      ScrollTrigger.update();
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const value = useMemo(() => ({ scrollY, scrollVelocity, lenisRef }), [scrollY, scrollVelocity]);

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const ctx = useContext(ScrollContext);
  return ctx;
}
