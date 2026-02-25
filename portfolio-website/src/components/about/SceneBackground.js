import React, { useRef, useEffect } from "react";
import { useAboutScene } from "../../context/AboutSceneContext";

export default function SceneBackground({ progress = 0 }) {
  const bgRef = useRef(null);
  const { reducedMotion } = useAboutScene();
  const scrollOut = progress > 0.88;

  useEffect(() => {
    const el = bgRef.current;
    if (!el || reducedMotion) return;

    let id;
    let angle = 0;
    const speed = 360 / 40;
    const update = () => {
      angle = (angle + speed * 0.016) % 360;
      el.style.transform = `rotate(${angle}deg)`;
      id = requestAnimationFrame(update);
    };
    id = requestAnimationFrame(update);
    return () => cancelAnimationFrame(id);
  }, [reducedMotion]);

  return (
    <div
      ref={bgRef}
      className="about-scene-bg"
      aria-hidden="true"
      style={{
        willChange: reducedMotion ? "auto" : "transform",
        background: scrollOut
          ? "linear-gradient(139.52deg, rgba(40,65,188,0.08) 23.02%, rgba(255,130,4,0.02) 86.13%)"
          : "linear-gradient(139.52deg, rgba(40,65,188,0.06) 23.02%, rgba(255,130,4,0.04) 86.13%)",
        width: "150%",
        height: "150%",
        left: "-25%",
        top: "-25%",
        transition: "background 1.2s ease",
      }}
    />
  );
}
