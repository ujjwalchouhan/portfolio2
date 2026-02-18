import React from "react";
import { Link } from "react-router-dom";
import HeroIconScroller from "./HeroIconScroller";

const HomeHero = () => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 hero-gradient overflow-x-hidden overflow-y-visible">
      <div className="container mx-auto px-6 text-center z-10 animate-fade-in-up">
        <p className="text-xl md:text-2xl font-light text-gray-400 mb-4">
          Hey, <span className="font-serif italic text-white">I&apos;m Abhay.</span>
        </p>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 text-balance leading-tight">
          AI-Driven UI/UX Designer
        </h1>
        <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl mb-12 font-light">
          I design intuitive, AI-powered digital experiences that simplify
          complex problems and drive meaningful user adoption.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/#work"
            className="px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-all text-inherit no-underline"
          >
            View work
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-10 py-4 bg-brand-accent hover:bg-orange-600 text-white rounded-full font-medium flex items-center gap-2 transition-all no-underline"
          >
            Resume
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <HeroIconScroller />
    </header>
  );
};

export default HomeHero;
