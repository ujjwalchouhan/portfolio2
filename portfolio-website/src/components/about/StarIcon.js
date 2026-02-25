import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useAboutScene } from "../../context/AboutSceneContext";

export default function StarIcon() {
  const starRef = useRef(null);
  const { scrollVelocity, reducedMotion } = useAboutScene();
  const rotation = useMotionValue(0);
  const springRotation = useSpring(rotation, { stiffness: 100, damping: 20 });

  useEffect(() => {
    if (reducedMotion) return;
    const r = Math.max(-45, Math.min(45, scrollVelocity * 0.15));
    rotation.set(r);
  }, [scrollVelocity, reducedMotion, rotation]);

  return (
    <motion.div
      ref={starRef}
      className="about-quote-orange-pointer"
      style={reducedMotion ? {} : { rotate: springRotation }}
      aria-hidden="true"
    >
      <svg
        fill="none"
        height="40"
        viewBox="0 0 40 40"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0V40M0 20H40"
          stroke="#FF6B00"
          strokeWidth="2"
        />
        <path
          d="M5.85786 5.85786L34.1421 34.1421M34.1421 5.85786L5.85786 34.1421"
          stroke="#FF6B00"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
}
