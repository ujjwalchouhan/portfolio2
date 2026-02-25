import React, { useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useWorkTransition } from "../context/WorkTransitionContext";
import "../styles/WorkTransitionLayer.css";

export default function WorkTransitionLayer() {
  const overlayRef = useRef(null);
  const imageRef = useRef(null);
  const { morph, setMorph, navigate } = useWorkTransition();

  useLayoutEffect(() => {
    if (!morph?.imageSrc || !overlayRef.current || !imageRef.current) return;
    const { rect, to } = morph;
    const overlay = overlayRef.current;
    const img = imageRef.current;
    gsap.set(overlay, { opacity: 1 });
    gsap.set(img, {
      position: "fixed",
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    });
    gsap.to(img, {
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        navigate(to);
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => setMorph(null),
        });
      },
    });
  }, [morph, navigate, setMorph]);

  if (!morph?.imageSrc) return null;

  const overlay = (
    <div ref={overlayRef} className="work-transition-overlay" aria-hidden>
      <img ref={imageRef} src={morph.imageSrc} alt="" className="work-transition-image" />
    </div>
  );

  return typeof document !== "undefined" ? createPortal(overlay, document.body) : null;
}
