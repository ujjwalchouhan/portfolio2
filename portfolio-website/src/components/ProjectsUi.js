import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./../styles/Project.css";
import { FiArrowLeft } from "react-icons/fi";
import ProjectInfoSection from "./ProjectInfoSection";
import HeadingImageList from "./HeadingImageList";
import ImageScroller from "./ImageScroller";
import KeySolutions from "./KeySolutions";
import * as projectContent from "../data/projectContent";
import NotFound from "../pages/NotFound";

// Utility function to convert URL slug to object name
// e.g., "my_lone" -> "MYLONE", "el_riad_shrine" -> "ELRIADSHRINE"
const convertSlugToObjectName = (slug) => {
  return slug
    .split('_')
    .map(word => word.toUpperCase())
    .join('');
};

const ProjectsUi = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const objectName = name ? convertSlugToObjectName(name) : null;

  const projects = objectName && projectContent[objectName] ? projectContent[objectName] : null;

  if (!projects) {
    return <NotFound />;
  }

  return (
    <>
      {/* Project detail hero: dark gradient, back + breadcrumb, title, meta */}
      <header className="project-detail-hero">
        <div className="project-hero-ellipse project-hero-ellipse--top" aria-hidden="true" />
        <div className="project-hero-ellipse project-hero-ellipse--bottom" aria-hidden="true" />

        <div className="project-hero-frame">
          <div className="project-hero-row">
            <button
              type="button"
              className="project-hero-back"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <FiArrowLeft className="project-hero-back-icon" />
            </button>
            <p className="project-hero-breadcrumb">
              <Link to="/work" className="project-hero-breadcrumb-work">Work</Link>
              <span className="project-hero-breadcrumb-sep"> &gt; </span>
              <span className="project-hero-breadcrumb-project">{projects.company}</span>
            </p>
          </div>
          <h1 className="project-hero-title">{projects.title}</h1>
        </div>

        <div className="project-hero-meta">
          <div className="project-meta-block">
            <span className="project-meta-label">Platform</span>
            <span className="project-meta-value">{projects.platform}</span>
          </div>
          <div className="project-meta-block">
            <span className="project-meta-label">Service</span>
            <span className="project-meta-value">{projects.service}</span>
          </div>
          <div className="project-meta-block">
            <span className="project-meta-label">Role</span>
            <span className="project-meta-value">{projects.role}</span>
          </div>
        </div>

        <div className="project-browser-mockup">
          <div className="project-browser-chrome">
            <div className="project-browser-dots">
              <span className="project-browser-dot" />
              <span className="project-browser-dot" />
              <span className="project-browser-dot" />
            </div>
            <div className="project-browser-address">
              <span className="project-browser-address-text">Search or enter website name</span>
            </div>
          </div>
          <div className="project-browser-content">
            <img
              src={projects.image}
              alt={projects.title}
              className="project-browser-image"
              loading="lazy"
            />
          </div>
        </div>
      </header>
      <div className="project-container mt-0" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="project-card">


          {/* Project Information Sections */}
          <ProjectInfoSection sections={projects.projectInfoSections} />

          {/* Key Solutions */}
          {projects.keySolutions && (
            <KeySolutions solutions={projects.keySolutions} />
          )}

          {/* Process Steps */}
          <HeadingImageList
            sections={projects.processSteps}
          />
        </div>

      </div>
      {/* Image Scroller */}
      <ImageScroller />
    </>
  );
};

export default ProjectsUi;