import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { FEATURED_PROJECTS } from "../data/featuredWork";
import "../styles/ImageScroller.css";

const PROJECTS = FEATURED_PROJECTS.map((p) => ({
  ...p,
  label: (p.tags && p.tags[0]) || p.platform || p.company,
}));

const CARD_WIDTH = 280;
const CARD_GAP = 24;
const BASE_SPEED = 22; // px/s – calm, premium
const LERP = 0.035; // interpolation – smooth, no abrupt changes

// Subtle vertical offset – minimal depth (max ±3px)
const getParallaxY = (index) => {
  const phase = index % 3;
  if (phase === 0) return 0;
  if (phase === 1) return -3;
  return 2;
};

const ImageScroller = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const scrollX = useRef(0);
  const currentSpeed = useRef(BASE_SPEED);
  const lastTimeRef = useRef(null);

  const [sectionHovered, setSectionHovered] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(-1);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrollState, setScrollState] = useState({ x: 0, width: 0 });
  const frameCount = useRef(0);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Duplicate items for seamless infinite loop (2 full cycles minimum)
  const DUPLICATION = 2;
  const ITEMS = useMemo(() => {
    const arr = [];
    for (let i = 0; i < PROJECTS.length * DUPLICATION; i++) {
      arr.push({ ...PROJECTS[i % PROJECTS.length], index: i });
    }
    return arr;
  }, []);

  const stepWidth = PROJECTS.length * (CARD_WIDTH + CARD_GAP);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  // Target speed: card hover = 0, section hover = 30% of base, default = base; pause when off-screen
  const targetSpeed = useMemo(() => {
    if (!inView) return 0;
    if (hoveredCardIndex >= 0) return 0;
    if (sectionHovered) return BASE_SPEED * 0.3;
    return BASE_SPEED;
  }, [inView, sectionHovered, hoveredCardIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reducedMotion || !inView) return;

    let rafId;
    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      // Interpolate speed (no abrupt stop)
      const diff = targetSpeed - currentSpeed.current;
      currentSpeed.current += diff * Math.min(1, LERP + dt * 2);

      scrollX.current += currentSpeed.current * dt;

      if (scrollX.current >= stepWidth) {
        scrollX.current -= stepWidth;
      }
      if (scrollX.current < 0) {
        scrollX.current += stepWidth;
      }

      track.style.transform = `translate3d(-${scrollX.current}px, 0, 0)`;
      frameCount.current += 1;
      if (frameCount.current % 4 === 0 && sectionRef.current) {
        setScrollState({
          x: scrollX.current,
          width: sectionRef.current.offsetWidth || 0,
        });
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [targetSpeed, stepWidth, reducedMotion, inView]);

  const handleCardClick = useCallback(
    (project) => {
      if (project.path) navigate(`/work/${project.path}`);
    },
    [navigate]
  );

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        inViewRef(el);
      }}
      className="scroller-section"
      aria-label="Selected work"
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
    >
      <div className="scroller-section-inner">
        <div className={`scroller-label-wrap ${inView ? "scroller-label-wrap--visible" : ""}`}>
          <span className="scroller-label">Selected work</span>
        </div>

        <div className="scroller-mask">
          <div
            ref={trackRef}
            className="scroller-track"
            style={{ backfaceVisibility: "hidden", willChange: "transform" }}
          >
            {ITEMS.map((project, i) => (
              <ScrollerCard
                key={`${project.label}-${i}`}
                project={project}
                index={i}
                parallaxY={getParallaxY(i)}
                scrollX={scrollState.x}
                containerWidth={scrollState.width}
                isHovered={hoveredCardIndex === i}
                isDimmed={
                  hoveredCardIndex >= 0 && hoveredCardIndex !== i
                }
                onHover={() => setHoveredCardIndex(i)}
                onLeave={() => setHoveredCardIndex(-1)}
                onClick={() => handleCardClick(project)}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ScrollerCard = ({
  project,
  index,
  parallaxY,
  scrollX,
  containerWidth,
  isHovered,
  isDimmed,
  onHover,
  onLeave,
  onClick,
  reducedMotion,
}) => {
  const cardCenter = index * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2;
  const viewCenter = scrollX + containerWidth / 2;
  const distFromCenter = Math.abs(cardCenter - viewCenter);
  const centerFactor = Math.max(0, 1 - distFromCenter / viewCenter);
  const centerOpacity = reducedMotion || isHovered || isDimmed ? 1 : 0.78 + 0.22 * centerFactor;
  const centerScale = reducedMotion || isHovered || isDimmed ? 1 : 1 + 0.02 * centerFactor;
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setImgLoaded(true);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`scroller-card ${isHovered ? "scroller-card--hovered" : ""} ${isDimmed ? "scroller-card--dimmed" : ""} ${centerFactor > 0.5 ? "scroller-card--center" : ""}`}
      style={{
        width: CARD_WIDTH,
        marginRight: CARD_GAP,
        transform: `translate3d(0, ${parallaxY}px, 0) scale(${centerScale})`,
        "--parallax-y": `${parallaxY}px`,
        opacity: isDimmed ? undefined : centerOpacity,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.label} case study`}
    >
      <div className="scroller-card-inner">
        <div
          className="scroller-card-image-wrap"
          style={{ backgroundColor: project.cardBg || "#FAFAFA" }}
        >
          <img
            ref={imgRef}
            src={project.image}
            alt=""
            className={`scroller-card-image ${imgLoaded ? "scroller-card-image--loaded" : ""}`}
            loading="lazy"
            decoding="async"
            onLoad={handleLoad}
          />
        </div>
        <p className="scroller-card-label">{project.label}</p>
      </div>
    </div>
  );
};

export default ImageScroller;
