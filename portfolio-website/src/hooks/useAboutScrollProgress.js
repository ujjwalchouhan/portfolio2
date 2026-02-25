import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useScroll } from "../context/ScrollContext";
import { useAboutScene } from "../context/AboutSceneContext";

gsap.registerPlugin(ScrollTrigger);

export function useAboutScrollProgress(sectionRef) {
  const { lenisRef } = useScroll();
  const {
    setProgress,
    setScrollVelocity,
    reducedMotion,
    lastScrollY,
    lastTime,
  } = useAboutScene();
  const stRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;

    if (reducedMotion) {
      setProgress(1);
      return () => {};
    }

    const ctx = gsap.context(() => {
      stRef.current = ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "top 15%",
        onUpdate: (self) => {
          setProgress(self.progress);
          const now = performance.now();
          const lenis = lenisRef?.current;
          const scroll = lenis?.scroll ?? window.scrollY ?? document.documentElement.scrollTop;
          const dt = Math.max(0.016, now - lastTime.current);
          const vel = (scroll - lastScrollY.current) / dt;
          setScrollVelocity(vel);
          lastScrollY.current = scroll;
          lastTime.current = now;
        },
      });
    }, section);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- lastScrollY/lastTime are refs
  }, [sectionRef, reducedMotion, lenisRef, setProgress, setScrollVelocity]);
}
