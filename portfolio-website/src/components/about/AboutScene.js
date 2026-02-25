import React, { useRef, useCallback, useEffect, useState } from "react";
import gsap from "gsap";
import { AboutSceneProvider, useAboutScene } from "../../context/AboutSceneContext";
import { useReadingMode } from "../../context/ReadingModeContext";
import { useAboutScrollProgress } from "../../hooks/useAboutScrollProgress";
import SceneBackground from "./SceneBackground";
import NoiseGrainOverlay from "./NoiseGrainOverlay";
import QuoteCard from "./QuoteCard";
import ContentColumn from "./ContentColumn";

function AboutSceneInner() {
  const sectionRef = useRef(null);
  const [quoteHovered, setQuoteHovered] = useState(false);
  const { progress, scrollVelocity, reducedMotion } = useAboutScene();
  const { setReadingMode } = useReadingMode();

  useAboutScrollProgress(sectionRef);

  useEffect(() => {
    const inView = progress > 0.03 && progress < 0.97;
    setReadingMode(inView);
    return () => setReadingMode(false);
  }, [progress, setReadingMode]);

  const handleResumePress = useCallback(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;
    gsap.to(section, {
      scale: 0.995,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(section, {
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.4)",
        });
      },
    });
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="about-section about-scene"
      data-purpose="about-me"
      id="about"
      style={{ transformOrigin: "center center" , justifyContent: "center" }}
    >
      <SceneBackground progress={progress} />
      <div className="about-section-depth-glow" aria-hidden="true" />
      <NoiseGrainOverlay sharp={quoteHovered} />

      <div className="about-inner about-scene-inner">
        <div className="about-grid about-scene-grid">
          <QuoteCard progress={progress} reducedMotion={reducedMotion} onHover={setQuoteHovered} />
          <ContentColumn
            progress={progress}
            scrollVelocity={scrollVelocity}
            onResumePress={handleResumePress}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>

    </section>
  );
}

export default function AboutScene() {
  return (
    <AboutSceneProvider>
      <AboutSceneInner />
    </AboutSceneProvider>
  );
}
