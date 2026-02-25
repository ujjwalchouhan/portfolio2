import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";
import logo from "../assets/icons/logo.png";

const NavLinks = ({ onNavigate, activeSection }) => (
  <>
    <li>
      <Link
        className={`hover:text-white transition-colors text-inherit no-underline ${activeSection === "work" ? "nav-link-active" : ""}`}
        to="/works"
        onClick={onNavigate}
      >
        Work
      </Link>
    </li>
    <li>
      <Link
        className={`hover:text-white transition-colors text-inherit no-underline ${activeSection === "about" ? "nav-link-active" : ""}`}
        to="/#about"
        onClick={onNavigate}
      >
        About
      </Link>
    </li>
    <li>
      <Link
        className={`hover:text-white transition-colors text-inherit no-underline ${activeSection === "process" ? "nav-link-active" : ""}`}
        to="/#process"
        onClick={onNavigate}
      >
        Process
      </Link>
    </li>
  </>
);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navScrolled = scrollY > 80;
  const hash = location.hash?.replace("#", "") || "";
  const activeSection = hash === "work" ? "work" : hash === "about" ? "about" : hash === "process" ? "process" : null;

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-[backdrop-filter,background] duration-700 ease-out"
      data-purpose="main-navigation"
    >
      <div className={`glass-nav rounded-full px-6 py-3 flex items-center justify-between ${navScrolled ? "glass-nav-blur" : ""}`}>
        <Link to="/" className="flex items-center gap-2 no-underline text-white" aria-label="Home">
          <img src={logo} alt="" className="object-contain flex-shrink-0" style={{ width: "100px", height: "auto" }} />
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <NavLinks onNavigate={undefined} activeSection={activeSection} />
        </ul>
        <div className="flex items-center gap-4">
          <a
            className="hidden md:flex bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-xs font-semibold items-center gap-2 transition-all text-inherit no-underline"
            href="/resume.pdf"
            download
          >
            Resume
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass-nav rounded-2xl p-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-400">
            <NavLinks onNavigate={() => setMobileOpen(false)} activeSection={activeSection} />
          </ul>
          <a
            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all text-inherit no-underline w-fit"
            href="/resume.pdf"
            download
            onClick={() => setMobileOpen(false)}
          >
            Resume
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
