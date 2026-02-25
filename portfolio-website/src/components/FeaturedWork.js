import React, {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FEATURED_PROJECTS } from "../data/featuredWork";
import "../styles/FeaturedWork.css";

gsap.registerPlugin(ScrollTrigger);

const STAGGER = 0.12;

export default function FeaturedWork() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();

  // Scroll reveal: cards fade up, image mask wipe, text delayed, stagger 120ms
  useLayoutEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        if (!card) return;
        const inner = card.querySelector(".featured-work-card-inner");
        const imageMask = card.querySelector(".featured-work-card-image-mask");
        const content = card.querySelector(".featured-work-card-content");
        const ctaWrap = card.querySelector(".featured-work-card-cta-wrap");

        gsap.set(inner, { y: 40, opacity: 0 });
        gsap.set(imageMask, { scaleX: 1, transformOrigin: "left center" });
        gsap.set(content, { opacity: 0 });
        gsap.set(ctaWrap, { opacity: 0, y: 8 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
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
              duration: 0.7,
              delay: delay + 0.1,
              ease: "power2.inOut",
            });
            gsap.to(content, {
              opacity: 1,
              duration: 0.5,
              delay: delay + 0.25,
              ease: "power2.out",
            });
            /* CTA stays hidden until hover (slides in via CSS .featured-work-card--active) */
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = useCallback(
    (e, project) => {
      navigate(`/work/${project.path}`);
    },
    [navigate]
  );

  const handleViewMoreClick = useCallback(() => {
    if (!gridRef.current) {
      navigate("/work");
      return;
    }
    gsap.to(gridRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => navigate("/work"),
    });
  }, [navigate]);

  return (
    <section
      ref={sectionRef}
      className="featured-work"
      id="work"
      data-purpose="projects-grid"
    >
      <div className="container">
        <header className="featured-work-header">
          <span className="featured-work-label">Work</span>
          <h2 className="featured-work-title">
            Explore my design work and process
          </h2>
        </header>

        <div ref={gridRef} className="featured-work-grid">
          {FEATURED_PROJECTS.map((project, i) => (
            <FeaturedCard
              key={project.path}
              ref={(el) => { cardRefs.current[i] = el; }}
              project={project}
              index={i}
              isActive={activeIndex === i}
              dimmed={activeIndex >= 0 && activeIndex !== i}
              onActivate={() => setActiveIndex(i)}
              onDeactivate={() => setActiveIndex(-1)}
              onClick={(e) => handleCardClick(e, project)}
            />
          ))}
        </div>

        <div className="featured-work-more-wrap">
          <ViewMoreButton onClick={handleViewMoreClick} />
        </div>
      </div>
    </section>
  );
}

const FeaturedCard = React.forwardRef(
  ({ project, index, isActive, dimmed, onActivate, onDeactivate, onClick }, ref) => {
    const cardInnerRef = useRef(null);
    const ctaRef = useRef(null);
    const sizeClass =
      project.size === "large"
        ? "featured-work-card--large"
        : "featured-work-card--small";
    const cardClass = [
      "featured-work-card",
      sizeClass,
      isActive ? "featured-work-card--active" : "",
      dimmed ? "featured-work-card--dimmed" : "",
    ]
      .filter(Boolean)
      .join(" ");

    /* 3-col grid: row1 [large, small], row2 [small, large], row3 [large, small] */
    const gridColumns = [
      "1 / 3",   /* 0 large */
      "3 / 4",   /* 1 small */
      "1 / 2",   /* 2 small */
      "2 / 4",   /* 3 large */
      "1 / 3",   /* 4 large */
      "3 / 4",   /* 5 small */
    ];
    const gridColumn = gridColumns[index] ?? "1 / 4";

    return (
      <article
        ref={ref}
        className={cardClass}
        style={
          typeof window !== "undefined" && window.matchMedia("(min-width: 769px)").matches
            ? { gridColumn }
            : undefined
        }
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onClick={(e) => {
          if (!e.target.closest(".featured-work-card-cta")) onClick(e);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick(e);
          }
        }}
      >
        <div ref={cardInnerRef} className="featured-work-card-inner">
          <div
            className="featured-work-card-image-wrap"
            style={{ backgroundColor: project.cardBg }}
          >
            <div
              className="featured-work-card-image-mask"
              style={{ backgroundColor: project.cardBg }}
            />
            <div className="featured-work-card-image-frame">
              <img
                src={project.image}
                alt=""
                className="featured-work-card-image"
              />
            </div>
          </div>
          <div className="featured-work-card-content">
            <div className="featured-work-card-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p className="featured-work-card-company">
              <span>{`{ `}</span>
              {project.company}
              <span>{` }`}</span>
            </p>
            <p className="featured-work-card-outcome">{project.outcome}</p>
            <div className="featured-work-card-cta-wrap">
              <ViewCaseButton
                ref={ctaRef}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(e);
                }}
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
);

FeaturedCard.displayName = "FeaturedCard";

const ViewCaseButton = React.forwardRef(({ onClick }, ref) => {
  const btnRef = useRef(null);
  const rippleRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const btn = (ref || btnRef).current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    gsap.to(btn, { x, y, duration: 0.35, ease: "power2.out" });
  }, [ref]);

  const handleMouseLeave = useCallback(() => {
    const btn = (ref || btnRef).current;
    if (btn) gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
  }, [ref]);

  const handleClick = useCallback(
    (e) => {
      const btn = (ref || btnRef).current;
      const ripple = rippleRef.current;
      if (btn) {
        gsap.to(btn, { scale: 0.96, duration: 0.08 });
        gsap.to(btn, { scale: 1, duration: 0.4, ease: "back.out(1.4)", delay: 0.08 });
      }
      if (ripple) {
        const rect = btn?.getBoundingClientRect();
        const x = e.clientX - (rect?.left ?? 0);
        const y = e.clientY - (rect?.top ?? 0);
        gsap.set(ripple, { left: x, top: y, x: "-50%", y: "-50%", scale: 0 });
        gsap.to(ripple, {
          scale: 4,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }
      onClick?.(e);
    },
    [onClick, ref]
  );

  return (
    <button
      ref={ref || btnRef}
      type="button"
      className="featured-work-card-cta"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className="featured-work-card-cta-ripple" ref={rippleRef} />
      View case
      <span className="arrow" aria-hidden>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
});

ViewCaseButton.displayName = "ViewCaseButton";

function ViewMoreButton({ onClick }) {
  const btnRef = useRef(null);
  const cursorRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const btn = btnRef.current;
    const cursor = cursorRef.current;
    if (!btn || !cursor) return;
    const rect = btn.getBoundingClientRect();
    cursor.style.left = `${e.clientX - rect.left}px`;
    cursor.style.top = `${e.clientY - rect.top}px`;
  }, []);

  return (
    <button
      ref={btnRef}
      type="button"
      className="featured-work-more-btn"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        const c = cursorRef.current;
        if (c) c.style.opacity = "0";
      }}
      onMouseEnter={() => {
        const c = cursorRef.current;
        if (c) c.style.opacity = "1";
      }}
    >
      <span ref={cursorRef} className="featured-work-more-cursor" />
      <span className="featured-work-more-text">View more work</span>
      <span className="circle -rotate-45">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}
