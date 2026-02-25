import React, {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { WORK_PROJECTS } from "../data/workProjects";
import "../styles/WorkGrid.css";

gsap.registerPlugin(ScrollTrigger);

const STAGGER = 0.1;

const WorkCard = React.forwardRef(
  function WorkCard(
    { project, index, isActive, dimmed, onActivate, onDeactivate, onClick },
    ref
  ) {
  const cardRef = useRef(null);
  const ctaRef = useRef(null);
  const setRef = useCallback(
    (el) => {
      cardRef.current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) ref.current = el;
    },
    [ref]
  );

  const handleClick = useCallback(
    (e) => {
      const card = cardRef.current;
      if (!card) return;
      const img = card.querySelector(".work-grid-card-image");
      if (!img) {
        onClick?.(e, project, null);
        return;
      }
      const rect = img.getBoundingClientRect();
      onClick?.(e, project, { rect, img });
    },
    [onClick, project]
  );

  return (
    <article
      ref={setRef}
      className={`work-grid-card ${isActive ? "work-grid-card--active" : ""} ${dimmed ? "work-grid-card--dimmed" : ""}`}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onClick={(e) => {
        if (!e.target.closest(".work-grid-card-cta")) handleClick(e);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e);
        }
      }}
    >
      <div className="work-grid-card-inner">
        <div
          className="work-grid-card-image-wrap"
          style={{ "--card-image-bg": project.cardBg }}
        >
          <div
            className="work-grid-card-image-mask"
            data-mask
            style={{ backgroundColor: project.cardBg }}
          />
          <div className="work-grid-card-image-frame">
            <img
              src={project.image}
              alt=""
              className="work-grid-card-image"
            />
          </div>
        </div>
        <div className="work-grid-card-content">
          <p className="work-grid-card-company">
            <span>{`{ `}</span>
            {project.company}
            <span>{` }`}</span>
          </p>
          <p className="work-grid-card-title">
            {project.landingTitle || project.title}
          </p>
          <div className="work-grid-card-cta-wrap">
            <button
              ref={ctaRef}
              type="button"
              className="work-grid-card-cta"
              onClick={(e) => {
                e.stopPropagation();
                const ripple = cardRef.current?.querySelector("[data-ripple]");
                if (ripple) {
                  const rect = ctaRef.current?.getBoundingClientRect();
                  const x = e.clientX - (rect?.left ?? 0);
                  const y = e.clientY - (rect?.top ?? 0);
                  gsap.set(ripple, { left: x, top: y, x: "-50%", y: "-50%", scale: 0, opacity: 1 });
                  gsap.to(ripple, { scale: 4, opacity: 0, duration: 0.5, ease: "power2.out" });
                }
                if (ctaRef.current) {
                  gsap.to(ctaRef.current, { scale: 0.96, duration: 0.08 });
                  gsap.to(ctaRef.current, { scale: 1, duration: 0.35, ease: "back.out(1.4)", delay: 0.08 });
                }
                handleClick(e);
              }}
            >
              <span className="work-grid-card-cta-ripple" data-ripple />
              View case
              <span className="work-grid-card-cta-arrow" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 7l6 5-6 5" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
});


export default function WorkGrid() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();

  /* Scroll reveal: cards fade up, image mask wipe, stagger */
  useLayoutEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        if (!card) return;
        const inner = card.querySelector(".work-grid-card-inner");
        const imageMask = card.querySelector("[data-mask]");

        gsap.set(inner, { y: 50, opacity: 0 });
        gsap.set(imageMask, { scaleX: 1, transformOrigin: "left center" });

        ScrollTrigger.create({
          trigger: card,
          start: "top 88%",
          onEnter: () => {
            const delay = i * STAGGER;
            gsap.to(inner, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay,
              ease: "power3.out",
            });
            gsap.to(imageMask, {
              scaleX: 0,
              duration: 0.65,
              delay: delay + 0.08,
              ease: "power2.inOut",
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = useCallback(
    (e, project) => {
      if (!project) return;
      navigate(`/work/${project.path}`);
    },
    [navigate]
  );

  return (
    <section ref={sectionRef} className="work-grid-section" data-purpose="work-grid">
      <div className="work-grid-container">
        <div ref={gridRef} className="work-grid-layout">
          {WORK_PROJECTS.map((project, i) => (
            <WorkCard
              key={project.path}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              project={project}
              index={i}
              isActive={activeIndex === i}
              dimmed={activeIndex >= 0 && activeIndex !== i}
              onActivate={() => setActiveIndex(i)}
              onDeactivate={() => setActiveIndex(-1)}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
