import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MYLONE,
  KAASHIN,
  AUCTOSELLERAPP,
  ELRIADSHRINE,
  PEPSI,
  DINGG,
} from "../data/projectContent";

const WORK_PROJECTS = [
  {
    ...ELRIADSHRINE,
    landingTitle: "Simplifying a high-traffic ticket booking experience to reduce drop-offs",
    path: "ELRIADSHRINE",
    cardBg: "#F8F9FB",
  },
  {
    ...AUCTOSELLERAPP,
    landingTitle: "A mobile-first seller app for managing high-volume auction workflows",
    path: "AUCTOSELLERAPP",
    cardBg: "#F0F4FF",
  },
  {
    ...PEPSI,
    landingTitle: "An enterprise dashboard enabling faster, data-driven deal decisions",
    path: "PEPSI",
    cardBg: "#EEF2FF",
  },
  {
    ...DINGG,
    landingTitle: "An end-to-end SaaS platform for managing salon operations and growth",
    path: "DINGG",
    cardBg: "#FAFAFA",
  },
  {
    ...MYLONE,
    landingTitle: MYLONE.title,
    path: "MYLONE",
    cardBg: "#F8F9FB",
  },
  {
    ...KAASHIN,
    landingTitle: KAASHIN.title,
    path: "KAASHIN",
    cardBg: "#F0F4FF",
  },
];

const WorkHero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen">
      {/* Hero header */}
      <header className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="container mx-auto px-6">
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
            <span className="text-brand-accent font-semibold tracking-widest text-xs uppercase">
              Work
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white/90 leading-tight max-w-3xl">
            Explore my design work and process
          </h1>
        </div>
      </header>

      {/* Work Cards Grid – white BG, minimal, aligned with site */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {WORK_PROJECTS.map((project) => (
              <button
                key={project.path}
                type="button"
                onClick={() => navigate(`/work/${project.path}`)}
                className="project-card group cursor-pointer w-full text-left bg-transparent border-0 p-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:border-gray-200">
                  <div className="relative overflow-hidden rounded-t-2xl aspect-[4/3] flex items-center justify-center p-8 bg-[#FAFAFA]">
                    <img
                      alt={`${project.company} Project`}
                      className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      src={project.image}
                    />
                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-brand-accent/20">
                      <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <span className="text-[11px] font-normal text-brand-accent uppercase tracking-[0.2em]">
                      {project.company}
                    </span>
                    <h3 className="mt-2 text-base md:text-lg font-normal text-gray-900 leading-relaxed line-clamp-2 group-hover:text-brand-accent transition-colors duration-200">
                      {project.landingTitle || project.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
