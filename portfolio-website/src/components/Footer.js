import React, { useState } from "react";
import cardGrayArrow from "../assets/icons/card-gary-arrow.svg";

const Footer = () => {
  const email = "abhaychouhan24.designs@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      className="py-24 bg-brand-black text-white relative overflow-hidden"
      data-purpose="footer"
    >
      <div className="container mx-auto px-6">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-r from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-[40px] p-12 md:p-20 overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 min-h-[200px] md:min-h-0">
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
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
                  <span className="italic text-gray-400">meaningful together</span>
                </h2>
              </div>
              <p className="text-gray-500 font-light">Let&apos;s make an impact</p>
            </div>
            <div className="relative flex flex-col items-center md:items-end justify-center gap-5 pr-0 md:pr-24 md:min-w-[260px]">
              <div className="flex flex-col items-center md:items-end gap-5">
                <div className="flex items-center gap-3 bg-white/5 px-6 py-4 rounded-full border border-white/10">
                <div className="w-8 h-8 bg-indigo-500 rounded-md flex items-center justify-center shrink-0">
                  <svg
                    className="h-4 w-4"
                    fill="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 22.525H0V1.475h24v21.05zM2.4 19.8h19.2V6.635L12 12.87 2.4 6.635V19.8zm0-15.632v.22l9.6 6.24 9.6-6.24v-.22H2.4z" />
                  </svg>
                </div>
                <span className="text-sm md:text-lg font-medium">{email}</span>
              </div>
              <button
                type="button"
                onClick={copyToClipboard}
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors bg-transparent border-0 cursor-pointer"
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
          {/* Arrow: right side of card, behind content (z-0), visible */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-28 md:w-36 h-[180px] md:h-[220px] flex items-center justify-end pointer-events-none z-0"
            aria-hidden="true"
          >
            <img
              src={cardGrayArrow}
              alt=""
              className="h-full w-auto object-contain object-right block opacity-[0.35]"
              style={{ filter: "brightness(1.2) contrast(1.1)" }}
            />
          </div>
          {/* Decorative shape */}
          <div className="absolute right-[-5%] bottom-[-20%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-gray-600">
          <p>Thank you for visiting my portfolio. This site is designed by me.</p>
          <div className="flex items-center gap-6">
            <a
              className="hover:text-white transition-colors uppercase tracking-widest text-inherit no-underline"
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
            <a
              className="hover:text-white transition-colors uppercase tracking-widest text-inherit no-underline"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-white transition-colors uppercase tracking-widest text-inherit no-underline"
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </a>
            <a
              className="hover:text-white transition-colors uppercase tracking-widest text-inherit no-underline"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
