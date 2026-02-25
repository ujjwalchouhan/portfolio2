import React from "react";
import { useParams } from "react-router-dom";
import ProjectScene from "./ProjectScene";
import ProjectInfoSection from "./ProjectInfoSection";
import HeadingImageList from "./HeadingImageList";
import ImageScroller from "./ImageScroller";
import KeySolutions from "./KeySolutions";
import * as projectContent from "../data/projectContent";
import NotFound from "../pages/NotFound";
import "../styles/ProjectContent.css";

const convertSlugToObjectName = (slug) => {
  if (!slug) return null;
  return slug
    .split("-")
    .map((word) => word.toUpperCase())
    .join("");
};

const ProjectsUi = () => {
  const { name } = useParams();

  const objectName = name ? convertSlugToObjectName(name) : null;
  const project =
    objectName && projectContent[objectName] ? projectContent[objectName] : null;

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <ProjectScene project={project} />

      <section className="project-content">
        <div className="project-content-inner">
          <div className="project-content-column">
            <ProjectInfoSection sections={project.projectInfoSections} />

            {project.keySolutions && project.keySolutions.length > 0 && (
              <KeySolutions solutions={project.keySolutions} />
            )}

            {project.processSteps && project.processSteps.length > 0 && (
              <HeadingImageList sections={project.processSteps} />
            )}
          </div>
        </div>
      </section>

      <ImageScroller />
    </>
  );
};

export default ProjectsUi;
