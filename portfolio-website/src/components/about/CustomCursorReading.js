import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const prefersFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

export default function CustomCursorReading() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isReading, setIsReading] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    setHasFinePointer(prefersFinePointer());
    const mq = window.matchMedia("(pointer: fine)");
    const handler = () => setHasFinePointer(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const readingZone = el?.closest("[data-reading-zone='bio']");
    setIsReading(!!readingZone);
  }, []);

  useEffect(() => {
    if (!hasFinePointer) return;
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, hasFinePointer]);

  if (typeof document === "undefined" || !hasFinePointer) return null;

  return createPortal(
    <div
      className="about-reading-cursor"
      aria-hidden="true"
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: isReading ? 24 : 2,
        height: isReading ? 4 : 24,
        background: isReading ? "rgba(255, 102, 36, 0.4)" : "rgba(255,255,255,0.3)",
        borderRadius: 2,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s ease, height 0.2s ease",
      }}
    />,
    document.body
  );
}
