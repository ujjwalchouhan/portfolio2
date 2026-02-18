import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import {
  ELRIADSHRINE,
  AUCTOSELLERAPP,
  PEPSI,
  DINGG,
} from "../data/projectContent";

const PROJECTS = [
  { ...ELRIADSHRINE, label: ELRIADSHRINE.platform },
  { ...AUCTOSELLERAPP, label: AUCTOSELLERAPP.platform },
  { ...PEPSI, label: PEPSI.platform },
  { ...DINGG, label: DINGG.platform },
];

const ImageScroller = () => {
  const CARD_WIDTH = 300;
  const CARD_GAP = 24;
  const PROJECT_COUNT = PROJECTS.length;
  const DUPLICATION_FACTOR = 4;
  const TARGET_SPEED = 60;

  const scrollerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPosition = useRef(0);
  const lastTimeRef = useRef(null);

  const [containerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getSpeedMultiplier = () => {
    if (typeof window === "undefined") return 1;
    if (document.hidden) return 0.3;
    return 1;
  };

  useEffect(() => {
    if (!inView) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    scrollPosition.current = 0;
    lastTimeRef.current = null;
    const step = PROJECT_COUNT * (CARD_WIDTH + CARD_GAP);

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      const speed =
        (TARGET_SPEED * deltaTime * getSpeedMultiplier()) / 1000;
      scrollPosition.current += speed;

      if (scrollPosition.current >= step) {
        scrollPosition.current -= step;
      }

      scroller.style.transform = `translateX(-${scrollPosition.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [inView, PROJECT_COUNT, CARD_WIDTH, CARD_GAP, TARGET_SPEED]);

  const renderCards = () => {
    const elements = [];
    const total = PROJECT_COUNT * DUPLICATION_FACTOR;

    for (let i = 0; i < total; i++) {
      const project = PROJECTS[i % PROJECT_COUNT];
      elements.push(
        <div
          key={`card-${i}`}
          className="flex-shrink-0 flex flex-col"
          style={{
            width: `${CARD_WIDTH}px`,
            marginRight: `${CARD_GAP}px`,
          }}
        >
          <div className="rounded-2xl overflow-hidden bg-white border border-gray-100/80 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div
              className="relative aspect-[4/3] flex items-center justify-center p-6 bg-[#FAFAFA]"
              style={{ minHeight: 0 }}
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <p className="mt-3 text-sm font-normal text-gray-500 tracking-tight text-center">
            {project.label}
          </p>
        </div>
      );
    }
    return elements;
  };

  return (
    <section
      ref={containerRef}
      className="w-full overflow-hidden py-20 bg-[#FAFAFA] border-t border-gray-100/60"
      aria-label="Selected work"
    >
      <div className="mb-10 px-6 md:px-10">
        <span className="text-[11px] font-normal text-gray-400 uppercase tracking-[0.2em]">
          Selected work
        </span>
      </div>
      <div
        ref={scrollerRef}
        className="flex will-change-transform"
        style={{ backfaceVisibility: "hidden" }}
      >
        {renderCards()}
      </div>
    </section>
  );
};

export default ImageScroller;
