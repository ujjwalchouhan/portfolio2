import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LuDownload} from "react-icons/lu";
import logo from "../assets/icons/logo.svg";
import "./../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // Function to determine active class
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active-link" : "nav-link";

  return (
    <header className={`header grid-layout ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        {/* Logo Section */}
        <NavLink to="/" className="logo-link">
        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">Abhay</span>
        </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="desktop-links">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/work"
                className={getNavLinkClass}
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={getNavLinkClass}
              >
                About
              </NavLink>
            </li>
          </ul>
          <a href="/resume.pdf" download className="resume-btn">
            <span className="resume-text">Resume</span>
            <span className="download-icon-h">
              <LuDownload />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <div className={`menu-icon ${isOpen ? 'open' : ''}`}>
            <span className="line top-line"></span>
            <span className="line middle-line-1"></span>
            <span className="line middle-line-2"></span>
            <span className="line bottom-line"></span>
          </div>
        </button>


        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-links">
              <li>
                <NavLink
                  to="/work"
                  className={getNavLinkClass}
                  onClick={toggleMenu}
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={getNavLinkClass}
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <a href="/resume.pdf" download className="mobile-resume-btn" onClick={toggleMenu}>
                  <span className="resume-text">Resume</span>
                  <span className="download-icon-h">
                    <LuDownload />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;