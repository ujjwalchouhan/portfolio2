import React, { createContext, useContext, useRef, useState, useEffect, useMemo } from "react";

const AboutSceneContext = createContext(null);

const getPhase = (progress) => {
  if (progress < 0.25) return "quote";
  if (progress < 0.55) return "name";
  if (progress < 0.85) return "bio";
  return "cta";
};

export function AboutSceneProvider({ children }) {
  const [progress, setProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const cursorProximity = useRef({ x: 0, y: 0, distance: 1 });
  const [hoverDuration, setHoverDuration] = useState(0);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const value = useMemo(
    () => ({
      progress,
      setProgress,
      phase: getPhase(progress),
      scrollVelocity,
      setScrollVelocity,
      reducedMotion,
      cursorProximity,
      setCursorProximity: (v) => {
        cursorProximity.current = v;
      },
      hoverDuration,
      setHoverDuration,
      sectionRef,
      lastScrollY,
      lastTime,
      setLastScrollY: (v) => { lastScrollY.current = v; },
      setLastTime: (v) => { lastTime.current = v; },
    }),
    [progress, scrollVelocity, reducedMotion, hoverDuration]
  );

  return (
    <AboutSceneContext.Provider value={value}>
      {children}
    </AboutSceneContext.Provider>
  );
}

export function useAboutScene() {
  return useContext(AboutSceneContext);
}
