import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Footer.css";
import cardGrayArrow from "../assets/icons/card-gary-arrow.svg";
import emailIcon from "../assets/icons/emial.svg";

const Footer = () => {
  const email = "abhaychouhan24.designs@gmail.com";
  const [copied, setCopied] = useState(false);

  const { ref: footerRef, inView } = useInView({
    threshold: 0.08,
    triggerOnce: true,
    rootMargin: "0px 0px -40px 0px",
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      ref={footerRef}
      id="footer"
      className={`footer py-24 text-white relative overflow-hidden ${inView ? "footer--in-view" : ""}`}
      data-purpose="footer"
    >
      {/* Figma BG: noise overlay */}
      <div className="footer-noise" aria-hidden="true" />

      {/* Figma BG: section-level blur glow at bottom */}
      <div className="footer-glow" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA Card - Figma card bg + ellipses + vector */}
        <div className="footer-card relative rounded-[32px] p-12 md:p-20 overflow-hidden group" style={{ contain: "layout paint" }}>
          {/* Figma: gradient ellipses inside card */}
          <div className="footer-card-ellipse footer-card-ellipse-6" aria-hidden="true" />
          <div className="footer-card-ellipse footer-card-ellipse-7" aria-hidden="true" />

          {/* Figma: vector arrow on right */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-28 md:w-36 h-[180px] md:h-[220px] flex items-center justify-end pointer-events-none z-0"
            aria-hidden="true"
          >
            <img
              src={cardGrayArrow}
              alt=""
              className="footer-card-vector h-full w-auto object-contain object-right block"
              style={{ filter: "brightness(1.2) contrast(1.1)" }}
            />
          </div>

          {/* Original content layout — z-20 ensures text always above gradient orbs */}
          <div className="footer-card-inner relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-12 min-h-[200px] md:min-h-0 md:gap-16">
            <div className="footer-card-heading text-center md:text-left flex-1 min-w-0">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <svg
                  fill="none"
                  height="40"
                  viewBox="0 0 40 40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0V40M0 20H40"
                    stroke="#FF6B00"
                    strokeWidth="2"
                  />
                  <path
                    d="M5.85786 5.85786L34.1421 34.1421M34.1421 5.85786L5.85786 34.1421"
                    stroke="#FF6B00"
                    strokeWidth="2"
                  />
                </svg>
                <h2 className="text-3xl md:text-5xl font-serif">
                  Let&apos;s build something <br />
                  <span className="italic">meaningful together</span>
                </h2>
              </div>
              <p className="footer-card-subhead text-sm md:text-base font-light mt-1">Let&apos;s make an impact</p>
            </div>
            <div className="footer-card-cta relative flex flex-col items-center md:items-end justify-center gap-4 pr-0 md:pr-16 md:min-w-[280px] flex-shrink-0">
              <div className="flex flex-col items-center md:items-end gap-5">
                <div className="footer-email-pill flex items-center gap-3 px-6 py-4 rounded-full">
                  <div className="footer-email-icon w-8 h-8 rounded-md flex items-center justify-center shrink-0">
                    <img src={emailIcon} alt="Gmail" className="h-4 w-4 object-contain" aria-hidden="true" />
                  </div>
                  <span className="text-sm md:text-lg font-medium">{email}</span>
                </div>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className={`footer-copy-btn flex items-center gap-2 text-xs bg-transparent border-0 cursor-pointer ${copied ? "footer-copy-btn--copied" : ""}`}
                >
                  {copied ? "Copied!" : "Copy to Clipboard"}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal mt-20 pt-10 border-t border-white/[0.06] flex flex-col items-center justify-center text-center text-xs">
          <p className="footer-legal-text">Thank you for visiting my portfolio. This site is designed by me.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
