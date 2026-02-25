import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ELRIADSHRINE,
  AUCTOSELLERAPP,
  PEPSI,
  DINGG,
} from "../data/projectContent";

const PROJECTS = [
  {
    ...ELRIADSHRINE,
    landingTitle:
      "Simplifying a high-traffic ticket booking experience to reduce drop-offs",
    path: "ELRIADSHRINE",
    cardBg: "#F8F9FB",
  },
  {
    ...AUCTOSELLERAPP,
    landingTitle:
      "A mobile-first seller app for managing high-volume auction workflows",
    path: "AUCTOSELLERAPP",
    cardBg: "#F0F4FF",
  },
  {
    ...PEPSI,
    landingTitle:
      "An enterprise dashboard enabling faster, data-driven deal decisions",
    path: "PEPSI",
    cardBg: "#EEF2FF",
  },
  {
    ...DINGG,
    landingTitle:
      "An end-to-end SaaS platform for managing salon operations and growth",
    path: "DINGG",
    cardBg: "#FAFAFA",
  },
];

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const title = project.landingTitle || project.title;

  const handleClick = () => {
    navigate(`/work/${project.path}`);
  };

  return (
    <button
      type="button"
      className="project-card group cursor-pointer w-full text-left bg-transparent border-0 p-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
      onClick={handleClick}
    >
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:shadow-gray-200/60 hover:border-gray-200">
        {/* Image: always on white/light */}
        <div className="relative overflow-hidden rounded-t-2xl aspect-[4/3] flex items-center justify-center p-8 bg-[#FAFAFA]">
          <img
            alt={`${project.company} Project`}
            className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            src={project.image}
          />
          {/* Hover: minimal corner badge — no blur, sharp and on-brand */}
          <div
            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-md border border-gray-100 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
            aria-hidden
          >
            <span className="text-sm font-medium text-gray-700">View case</span>
            <span className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
        <div className="px-6 py-5">
          <span className="text-sm font-medium text-gray-800 tracking-tight">
            <span className="text-brand-accent">{`{ `}</span>
            {project.company}
            <span className="text-brand-accent">{` }`}</span>
          </span>
          <h3 className="mt-2 text-base md:text-lg font-normal text-gray-900 leading-relaxed line-clamp-2 group-hover:text-brand-accent transition-colors duration-200">
            {title}
          </h3>
        </div>
      </div>
    </button>
  );
};

const CardsGrid = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-24 bg-white text-brand-black"
      data-purpose="projects-grid"
      id="work"
    >
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <span className="text-[11px] font-normal text-brand-accent uppercase tracking-[0.2em]">
            Work
          </span>
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mt-3 tracking-tight">
            Explore my design work and process
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.path} project={project} />
          ))}
        </div>
        <div className="mt-20 text-center">
          <button
            type="button"
            onClick={() => navigate("/work")}
            className="group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2.5 bg-transparent hover:bg-brand-accent border-0 cursor-pointer transition-all duration-300 ease-out"
          >
            <span className="text-base font-normal text-brand-black group-hover:text-white transition-colors duration-300">
              View more work
            </span>
            <span className="w-10 h-10 rounded-full bg-brand-black group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-300">
              <svg
                className="w-4 h-4 text-white -rotate-45 group-hover:text-brand-black group-hover:rotate-0 transition-[color,transform] duration-300 ease-out"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardsGrid;
