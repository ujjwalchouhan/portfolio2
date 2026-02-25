import { useState, useEffect, useRef, useCallback } from "react";

/** Sentinel height = header top offset + nav inner height (~96px) */
const HEADER_SENTINEL_HEIGHT = 96;

/** Section IDs/selectors and whether they have light or dark background */
const SECTION_SURFACE = {
  hero: "dark",
  work: "light",
  about: "dark",
  process: "light",
  "scroller-section": "light",
  footer: "dark",
};

const SECTION_SELECTORS = [
  "#hero",
  "#work",
  "#about",
  "#process",
  ".scroller-section",
  "#footer",
];

const DEBOUNCE_MS = 50;
const TRANSITION_DURATION_MS = 360;

/**
 * useSectionAwareHeader
 * Uses IntersectionObserver to detect which section is behind the fixed header,
 * and returns the surface type (dark/light) for adaptive glass styling.
 * No scroll listeners. Debounced. Properly cleaned up.
 */
export function useSectionAwareHeader() {
  const [surface, setSurface] = useState("dark");
  const [reducedMotion, setReducedMotion] = useState(false);
  const observerRef = useRef(null);
  const debounceRef = useRef(null);
  const intersectingRef = useRef(new Map());

  const resolveSurface = useCallback(() => {
    const entries = Array.from(intersectingRef.current.entries());
    if (entries.length === 0) return;

    // Order sections by DOM position (top to bottom); highest in viewport wins
    const sorted = entries
      .filter(([, ratio]) => ratio > 0)
      .sort((a, b) => {
        const elA = document.querySelector(a[0]);
        const elB = document.querySelector(b[0]);
        if (!elA || !elB) return 0;
        return elA.getBoundingClientRect().top - elB.getBoundingClientRect().top;
      });

    const primary = sorted[0];
    if (!primary) return;

    const sel = primary[0];
    let id = sel;
    if (sel.startsWith("#") || sel.startsWith(".")) id = sel.slice(1);
    const next = SECTION_SURFACE[id] ?? "dark";
    setSurface(next);
  }, []);

  const debouncedResolve = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      resolveSurface();
      debounceRef.current = null;
    }, DEBOUNCE_MS);
  }, [resolveSurface]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setSurface("dark");
      return () => {};
    }

    const doc = typeof document !== "undefined" ? document : null;
    const elements = doc
      ? SECTION_SELECTORS.map((sel) => doc.querySelector(sel)).filter(Boolean)
      : [];
    if (elements.length === 0) return () => {};

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          let sel = null;
          if (e.target.id) sel = `#${e.target.id}`;
          else if (e.target.classList?.[0]) sel = `.${e.target.classList[0]}`;
          if (!sel) continue;
          if (e.isIntersecting) {
            intersectingRef.current.set(sel, e.intersectionRatio);
          } else {
            intersectingRef.current.delete(sel);
          }
        }
        debouncedResolve();
      },
      {
        root: null,
        rootMargin: `-${HEADER_SENTINEL_HEIGHT}px 0px -80% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    observerRef.current = observer;
    resolveSurface();

    return () => {
      observer.disconnect();
      observerRef.current = null;
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
  }, [reducedMotion, debouncedResolve, resolveSurface]);

  return {
    surface,
    reducedMotion,
    transitionDuration: TRANSITION_DURATION_MS,
  };
}
