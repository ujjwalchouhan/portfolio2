import React, { useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "../styles/WorkScene.css";

export default function WorkScene() {
  const navigate = useNavigate();
  const innerRef = useRef(null);
  const backRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    const back = backRef.current;
    const label = labelRef.current;
    const heading = headingRef.current;
    if (!heading) return;

    const els = [back, label].filter(Boolean);
    gsap.set(els, { opacity: 0, y: 8 });
    gsap.set(heading, { opacity: 0, y: 20 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (back) tl.to(back, { opacity: 1, y: 0, duration: 0.5 });
    if (label) tl.to(label, { opacity: 1, y: 0, duration: 0.4 }, 0.1);
    tl.to(heading, { opacity: 1, y: 0, duration: 0.7 }, 0.2);
  }, []);

  return (
    <header className="work-scene" data-purpose="work-hero">
      <div className="work-scene-glow work-scene-glow-main" aria-hidden="true" />
      <div className="work-scene-glow work-scene-glow-top-right" aria-hidden="true" />
      <div className="work-scene-glow work-scene-glow-bottom-left" aria-hidden="true" />

      <div ref={innerRef} className="work-scene-inner">
        <div className="work-scene-row">
          <button
            ref={backRef}
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="work-scene-back"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span ref={labelRef} className="work-scene-label">Work</span>
        </div>
        <h1 ref={headingRef} className="work-scene-heading">
          Explore my design work and process
        </h1>
      </div>
    </header>
  );
}
