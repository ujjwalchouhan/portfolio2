import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/Process.css";

gsap.registerPlugin(ScrollTrigger);

const STAGGER = 0.14;

const STEPS = [
  {
    id: "discovery",
    title: "Discovery",
    description:
      "I start by learning and research based on client brief and resources to gain about the needs, goals, product and requirements.",
    icon: (
      <svg
        className="process-step-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: "strategy",
    title: "Strategy",
    description:
      "Then start to plan and structure of the project process based on the discovery phase before start design.",
    icon: (
      <svg
        className="process-step-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: "design",
    title: "Design",
    description:
      "After I complete all the process. I will start to do the design process such as creating user flow, wireframe, UI design until finish.",
    icon: (
      <svg
        className="process-step-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const connectorRef = useRef(null);
  const gridRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [activeStep, setActiveStep] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const label = labelRef.current;
    const heading = headingRef.current;
    const cards = cardRefs.current.filter(Boolean);
    const connector = connectorRef.current;
    const grid = gridRef.current;

    if (!section || !label || !heading || !cards.length || !connector || !grid) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(label, { opacity: 0 });
      gsap.set(heading, { y: 24, opacity: 0 });
      gsap.set(cards, { y: 40, opacity: 0 });
      gsap.set(connector, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          onEnter: () => {},
        },
      });

      tl.to(label, { opacity: 1, duration: 0.5, ease: "power2.out" })
        .to(heading, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to(connector, { scaleX: 1, duration: 0.8, ease: "power2.out" }, "-=0.2")
        .to(
          cards,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: STAGGER,
            ease: "power2.out",
          },
          "-=0.5"
        );
    }, section);

    const stActive = ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom 30%",
      onUpdate: (self) => {
        const p = self.progress;
        if (p < 0.35) setActiveStep(0);
        else if (p < 0.65) setActiveStep(1);
        else setActiveStep(2);
      },
    });

    return () => {
      ctx.revert();
      stActive.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="process-section"
      data-purpose="working-process"
      id="process"
    >
      <div className="process-bg-glow" aria-hidden="true" />
      <div className="process-container">
        <div className="process-header">
          <span ref={labelRef} className="process-label">
            Process
          </span>
          <h2 ref={headingRef} className="process-heading">
            Let&apos;s have a look on my working process
          </h2>
        </div>

        <div ref={gridRef} className="process-grid">
          <div ref={connectorRef} className="process-connector" aria-hidden="true" />
          {STEPS.map((step, i) => (
            <div
              key={step.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`process-card ${hoveredIndex === i ? "process-card--hovered" : ""} ${hoveredIndex >= 0 && hoveredIndex !== i ? "process-card--dimmed" : ""} ${activeStep === i ? "process-card--active" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <div className="process-card-icon-wrap">
                {step.icon}
              </div>
              <h4 className="process-card-title">{step.title}</h4>
              <p className="process-card-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
