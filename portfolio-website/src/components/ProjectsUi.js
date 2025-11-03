import React from "react";
import { useParams } from "react-router-dom";
import "./../styles/Project.css";
import { ReactComponent as GIcon } from "./../assets/icons/arrow-circle.svg";
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

  const objectName = name ? convertSlugToObjectName(name) : null;

  const projects = objectName && projectContent[objectName] ? projectContent[objectName] : null;

  if (!projects) {
    return <NotFound />;
  }

  return (
    <>
      <div className="project-container">

        <div key={projects.id} className="project-card">


          <button className="btn p-0 d-flex">
            <GIcon className="g-icon" />
          </button>

          <div className="project-header">
            <h3>
              <span className="highlight">Work &gt;</span> {projects.company}
            </h3>
            <h1>{projects.title}</h1>
          </div>

          <div className="project-info-row">
            <div className="info-block">
              <p className="label">Platform</p>
              <p className="value">{projects.platform}</p>
            </div>
            <div className="info-block">
              <p className="label">Service</p>
              <p className="value">{projects.service}</p>
            </div>
            <div className="info-block">
              <p className="label">Role</p>
              <p className="value">{projects.role}</p>
            </div>
          </div>

          <div
          >
            <img
              src={projects.image}
              alt={projects.title}
              className="project-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
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