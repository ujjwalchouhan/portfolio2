import React, { useRef, useLayoutEffect, useEffect } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useHeroScene } from "../context/HeroSceneContext";
import { useReadingMode } from "../context/ReadingModeContext";
import HeroNav from "./HeroNav";
import HomeHero from "./HomeHero";
import "../styles/HomeScene.css";

export default function HomeScene() {
  const depthRef = useRef(null);
  const { isReadingMode } = useReadingMode();
  const {
    sceneRef,
    mousePosition,
    setMouseTick,
    navRefs,
    heroRefs,
    navReady,
    heroReady,
    timelineRunRef,
  } = useHeroScene();

  // Single shared mouse listener – updates position + velocity for navbar blur + magnetic
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const last = { x: 0, y: 0, t: 0 };
    const onMove = (e) => {
      const rect = scene.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;
      const now = performance.now();
      const dt = Math.max(16, now - last.t);
      const vx = (clientX - last.x) / (dt / 1000);
      const vy = (clientY - last.y) / (dt / 1000);
      last.x = clientX;
      last.y = clientY;
      last.t = now;
      const x = clientX - rect.left - rect.width / 2;
      const y = clientY - rect.top - rect.height / 2;
      const normalizedY = (clientY - rect.top) / rect.height;
      mousePosition.current = {
        x,
        y,
        clientX,
        clientY,
        normalizedY: Math.max(0, Math.min(1, normalizedY)),
        inside: true,
        vx,
        vy,
        lastMoveTime: now,
      };
      setMouseTick((t) => t + 1);
    };
    const onLeave = () => {
      mousePosition.current.inside = false;
      setMouseTick((t) => t + 1);
    };
    scene.addEventListener("mousemove", onMove, { passive: true });
    scene.addEventListener("mouseleave", onLeave);
    return () => {
      scene.removeEventListener("mousemove", onMove);
      scene.removeEventListener("mouseleave", onLeave);
    };
  }, [sceneRef, mousePosition, setMouseTick]);

  // One global timeline: nav → logo → links → greeting → title → paragraph → buttons → icons
  useLayoutEffect(() => {
    if (!navReady || !heroReady || timelineRunRef.current) return;
    const nav = navRefs.current;
    const hero = heroRefs.current;
    const nc = nav?.container?.current;
    const nl = nav?.logo?.current;
    const linksArr = nav?.links?.current;
    const links = Array.isArray(linksArr) ? linksArr.filter(Boolean) : [];
    const gh = hero?.greeting?.current;
    const words = (hero?.words?.current && Array.isArray(hero.words.current))
      ? hero.words.current.filter(Boolean)
      : [];
    const desc = hero?.desc?.current;
    const btnView = hero?.btnView?.current;
    const btnResume = hero?.btnResume?.current;
    const icons = hero?.icons?.current;

    if (!nc || !gh) return;
    timelineRunRef.current = true;

    const tl = gsap.timeline({ ease: "power3.out" });
    tl.fromTo(nc, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
      .fromTo(nl, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.5 }, 0.15)
      .fromTo(
        links,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power2.out" },
        0.35
      )
      .fromTo(gh, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6 }, 0.5)
      .fromTo(
        words,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
        0.7
      )
      .fromTo(desc, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, 1)
      .fromTo(
        [btnView, btnResume],
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.2)" },
        1.2
      )
      .fromTo(icons, { opacity: 0, y: 16 }, { opacity: 0.9, y: 0, duration: 0.6 }, 1.4);

    return () => tl.kill();
  }, [navReady, heroReady, navRefs, heroRefs, timelineRunRef]);

  // Focus depth: sharp center follows cursor (150ms lag); diffuse edges; idle recenter
  useEffect(() => {
    const scene = sceneRef.current;
    const depth = depthRef.current;
    if (!scene || !depth) return;
    const current = { x: 50, y: 50 };
    let rafId;
    const update = () => {
      const mp = mousePosition.current;
      const now = performance.now();
      const idle = now - (mp.lastMoveTime || 0) > 2000;
      let targetX = 50;
      let targetY = 50;
      if (!idle && mp.inside) {
        targetX = 50 + (mp.x / scene.offsetWidth) * 20;
        targetY = 50 + (mp.normalizedY - 0.5) * 20;
      }
      const lerp = isReadingMode ? 0.0036 : 0.05;
      current.x += (targetX - current.x) * lerp;
      current.y += (targetY - current.y) * lerp;
      const alpha = isReadingMode ? 0.03 : 0.06;
      const alpha2 = isReadingMode ? 0.015 : 0.03;
      depth.style.background = `
        radial-gradient(ellipse 60% 40% at ${current.x}% ${current.y}%, rgba(40,65,188,${alpha}) 0%, rgba(255,130,4,${alpha2}) 50%, transparent 70%),
        radial-gradient(ellipse 100% 80% at 50% 50%, rgba(40,65,188,0.02) 0%, transparent 70%)
      `;
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => rafId && cancelAnimationFrame(rafId);
  }, [sceneRef, mousePosition, isReadingMode]);

  return (
    <>
      {/* Portal nav to body so it escapes hero-scene stacking context and stays above work cards */}
      {typeof document !== "undefined" &&
        createPortal(
          <HeroNav />,
          document.body
        )}
        <div ref={sceneRef} id="hero" className="hero-scene">
        <div ref={depthRef} className="hero-scene-depth" aria-hidden="true" />
        <HomeHero />
      </div>
    </>
  );
}
