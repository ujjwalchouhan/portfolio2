import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ProjectInfoSection from "./ProjectInfoSection";
import HeadingImageList from "./HeadingImageList";
import ImageScroller from "./ImageScroller";
import KeySolutions from "./KeySolutions";
import * as projectContent from "../data/projectContent";
import NotFound from "../pages/NotFound";

const convertSlugToObjectName = (slug) => {
  return slug
    .split("_")
    .map((word) => word.toUpperCase())
    .join("");
};

const ProjectsUi = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const objectName = name ? convertSlugToObjectName(name) : null;
  const projects =
    objectName && projectContent[objectName] ? projectContent[objectName] : null;

  if (!projects) {
    return <NotFound />;
  }

  return (
    <>
      {/* Project detail hero */}
      <header className="relative pt-32 pb-16 hero-gradient overflow-hidden min-h-[600px] md:min-h-[700px]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 hover:text-white transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <p className="text-xs font-normal text-white/60 uppercase tracking-[0.2em]">
              <Link
                to="/work"
                className="hover:text-white transition-colors text-inherit no-underline"
              >
                Work
              </Link>
              <span className="mx-2 text-white/40">/</span>
              <span className="text-white/90 tracking-normal normal-case">{projects.company}</span>
            </p>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-white/95 tracking-tight leading-[1.15] max-w-4xl mb-12">
            {projects.title}
          </h1>

          <div className="flex flex-wrap gap-10 md:gap-14 mb-12">
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-normal text-white/50 uppercase tracking-[0.2em]">
                Platform
              </span>
              <span className="text-sm font-medium text-white/90 tracking-tight">
                {projects.platform}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-normal text-white/50 uppercase tracking-[0.2em]">
                Service
              </span>
              <span className="text-sm font-medium text-white/90 tracking-tight">
                {projects.service}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-normal text-white/50 uppercase tracking-[0.2em]">
                Role
              </span>
              <span className="text-sm font-medium text-white/90 tracking-tight">
                {projects.role}
              </span>
            </div>
          </div>

          {/* Browser mockup - minimalist */}
          <div className="max-w-5xl rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="h-10 bg-white/5 flex items-center gap-2 px-4 border-b border-white/10">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <span className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 max-w-xs mx-4 h-6 rounded-md bg-white/5 border border-white/10" />
            </div>
            <div className="bg-[#f5f5f7] aspect-video flex items-center justify-center p-4">
              <img
                src={projects.image}
                alt={projects.title}
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content section */}
      <div className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col gap-16">
            <ProjectInfoSection sections={projects.projectInfoSections} />

            {projects.keySolutions && projects.keySolutions.length > 0 && (
              <KeySolutions solutions={projects.keySolutions} />
            )}

            {projects.processSteps && projects.processSteps.length > 0 && (
              <HeadingImageList sections={projects.processSteps} />
            )}
          </div>
        </div>
      </div>

      <ImageScroller />
    </>
  );
};

export default ProjectsUi;
