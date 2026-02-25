import React, { useRef, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import "../styles/ProjectScene.css";

export default function ProjectScene({ project }) {
  const navigate = useNavigate();
  const innerRef = useRef(null);
  const backRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const headingRef = useRef(null);
  const metaRef = useRef(null);
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const back = backRef.current;
    const breadcrumb = breadcrumbRef.current;
    const heading = headingRef.current;
    const meta = metaRef.current;
    const hero = heroRef.current;
    if (!heading) return;

    const els = [back, breadcrumb].filter(Boolean);
    gsap.set(els, { opacity: 0, y: 8 });
    gsap.set(heading, { opacity: 0, y: 20 });
    gsap.set(meta, { opacity: 0, y: 16 });
    gsap.set(hero, { opacity: 0, y: 20 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (back) tl.to(back, { opacity: 1, y: 0, duration: 0.5 });
    if (breadcrumb) tl.to(breadcrumb, { opacity: 1, y: 0, duration: 0.4 }, 0.1);
    tl.to(heading, { opacity: 1, y: 0, duration: 0.7 }, 0.2);
    tl.to(meta, { opacity: 1, y: 0, duration: 0.5 }, 0.4);
    tl.to(hero, { opacity: 1, y: 0, duration: 0.8 }, 0.5);
  }, [project?.company]);

  return (
    <header className="project-scene" data-purpose="project-hero">
      <div className="project-scene-glow project-scene-glow-main" aria-hidden="true" />
      <div className="project-scene-glow project-scene-glow-top-right" aria-hidden="true" />
      <div className="project-scene-glow project-scene-glow-bottom-left" aria-hidden="true" />

      <div ref={innerRef} className="project-scene-inner">
        <div className="project-scene-row">
          <button
            ref={backRef}
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="project-scene-back"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <nav ref={breadcrumbRef} className="project-scene-breadcrumb" aria-label="Breadcrumb">
            <Link to="/work">Work</Link>
            <span className="sep">/</span>
            <span className="current">{project.company}</span>
          </nav>
        </div>

        <h1 ref={headingRef} className="project-scene-heading">
          {project.title}
        </h1>

        <div ref={metaRef} className="project-scene-meta">
          <div className="project-scene-meta-item">
            <span className="project-scene-meta-label">Platform</span>
            <span className="project-scene-meta-value">{project.platform}</span>
          </div>
          <div className="project-scene-meta-item">
            <span className="project-scene-meta-label">Service</span>
            <span className="project-scene-meta-value">{project.service}</span>
          </div>
          <div className="project-scene-meta-item">
            <span className="project-scene-meta-label">Role</span>
            <span className="project-scene-meta-value">{project.role}</span>
          </div>
        </div>

        <div ref={heroRef} className="project-scene-hero">
          <img src={project.image} alt={project.title} loading="eager" />
        </div>
      </div>
    </header>
  );
}
