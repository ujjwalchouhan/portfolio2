import React, { useRef, useEffect, useCallback } from "react";

const PARTICLE_COUNT = 8;
const PARTICLE_LIFETIME = 300;

function Particle(x, y, t) {
  this.x = x;
  this.y = y;
  this.t = t;
  this.vx = (Math.random() - 0.5) * 4;
  this.vy = (Math.random() - 0.5) * 4;
}

export default function QuoteCardParticles({ active, mouseX, mouseY, reducedMotion }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  const update = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const MAX_SIZE = 4096;
    const w = Math.min(Math.floor(rect.width * dpr), MAX_SIZE);
    const h = Math.min(Math.floor(rect.height * dpr), MAX_SIZE);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      ctx.scale(w / rect.width, h / rect.height);
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    const now = Date.now();

    if (active && mouseX != null && mouseY != null) {
      if (particlesRef.current.length < PARTICLE_COUNT && Math.random() < 0.3) {
        particlesRef.current.push(new Particle(mouseX, mouseY, now));
      }
    }

    particlesRef.current = particlesRef.current.filter((p) => {
      const age = now - p.t;
      if (age > PARTICLE_LIFETIME) return false;
      p.x += p.vx * 0.5;
      p.y += p.vy * 0.5;
      const a = 1 - age / PARTICLE_LIFETIME;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 107, 0, ${a * 0.6})`;
      ctx.fill();
      return true;
    });

    rafRef.current = requestAnimationFrame(update);
  }, [active, mouseX, mouseY, reducedMotion]);

  useEffect(() => {
    if (!active || reducedMotion) return;
    rafRef.current = requestAnimationFrame(update);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, update, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="about-quote-particles"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}
