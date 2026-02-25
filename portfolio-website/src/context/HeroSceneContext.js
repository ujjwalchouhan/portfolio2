import React, { createContext, useContext, useRef, useState, useMemo, useCallback } from "react";

const HeroSceneContext = createContext(null);

export function HeroSceneProvider({ children }) {
  const sceneRef = useRef(null);
  const mousePosition = useRef({
    x: 0,
    y: 0,
    clientX: 0,
    clientY: 0,
    normalizedY: 0.5,
    inside: false,
    vx: 0,
    vy: 0,
  });
  const [, setMouseTick] = useState(0);
  const [navReady, setNavReady] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const navRefs = useRef({ container: null, logo: null, links: [] });
  const heroRefs = useRef({
    greeting: null,
    titleWrap: null,
    words: [],
    desc: null,
    btnView: null,
    btnResume: null,
    icons: null,
  });
  const timelineRunRef = useRef(false);

  const registerNavRefs = useCallback((refs) => {
    if (!refs) return;
    navRefs.current = refs;
    setNavReady(true);
  }, []);

  const registerHeroRefs = useCallback((refs) => {
    if (!refs) return;
    heroRefs.current = refs;
    setHeroReady(true);
  }, []);

  const value = useMemo(
    () => ({
      sceneRef,
      mousePosition,
      setMouseTick,
      navReady,
      heroReady,
      navRefs,
      heroRefs,
      registerNavRefs,
      registerHeroRefs,
      timelineRunRef,
    }),
    [navReady, heroReady, registerNavRefs, registerHeroRefs]
  );

  return (
    <HeroSceneContext.Provider value={value}>
      {children}
    </HeroSceneContext.Provider>
  );
}

export function useHeroScene() {
  return useContext(HeroSceneContext);
}
