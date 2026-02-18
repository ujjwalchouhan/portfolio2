import React, { useState, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const CDN_BASE = "https://cdn.simpleicons.org";

// Inline SVG fallbacks for icons removed from simple-icons CDN (Adobe, OpenAI)
const FALLBACK_SVGS = {
  adobexd: (color) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 2h2v2h2v2h-2v4H9v-8zm5 0h2v8h-2v-3h-1v3h-2V8h2v2h1V8z" fill={`#${color}`} />
    </svg>
  ),
  adobeillustrator: (color) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M5 4h3v16H5V4zm11 0h3v7h-3V4zm0 9h3v7h-3v-7zM8 7h2l2 3 2-3h2v10h-2v-6l-1.5 2L11 11v6H9V7z" fill={`#${color}`} />
    </svg>
  ),
  adobe: (color) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M12 2L2 22h4l6-12 6 12h4L12 2z" fill={`#${color}`} />
    </svg>
  ),
  openai: (color) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" fill={`#${color}`} />
      <path d="M12 6v6l4 2" stroke={`#${color}`} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
};

const TOOLS = [
  { slug: "figma", color: "F24E1E", name: "Figma", description: "Design tool for creating and collaborating" },
  { slug: "sketch", color: "FDB300", name: "Sketch", description: "Digital design toolkit for interfaces" },
  { slug: "framer", color: "0055FF", name: "Framer", description: "Design and prototyping for interactive UIs" },
  { slug: "googleanalytics", color: "E37400", name: "Google Analytics", description: "Web analytics and insights" },
  { slug: "adobexd", color: "FF61F6", name: "Adobe XD", description: "UI/UX design and prototyping", useFallbackSvg: true },
  { slug: "adobeillustrator", color: "FF9A00", name: "Illustrator", description: "Vector graphics and illustration", useFallbackSvg: true },
  { slug: "adobe", color: "FF0000", name: "Adobe Creative Cloud", description: "Creative apps and services", useFallbackSvg: true },
  { slug: "webflow", color: "4353FF", name: "Webflow", description: "Visual development for the web" },
  { slug: "notion", color: "000000", name: "Notion", description: "Docs, wikis, and project management" },
  { slug: "openai", color: "412991", name: "ChatGPT", description: "AI assistant for conversation and tasks", useFallbackSvg: true },
];

const REPEAT_COUNT = 4;

function IconTile({ tool }) {
  const [isHovered, setIsHovered] = useState(false);
  const [popupPosition, setPopupPosition] = useState(null);
  const iconRef = useRef(null);

  useLayoutEffect(() => {
    if (!isHovered || !iconRef.current) return;
    const rect = iconRef.current.getBoundingClientRect();
    setPopupPosition({
      left: rect.left + rect.width / 2,
      top: rect.top,
    });
  }, [isHovered]);

  const handleClose = () => setIsHovered(false);

  const popupContent = isHovered && popupPosition && (
    <div
      className="fixed z-[9999] w-[14rem] pointer-events-auto"
      style={{
        left: popupPosition.left,
        top: popupPosition.top,
        transform: "translate(-50%, calc(-100% - 8px))",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleClose}
      role="tooltip"
      aria-live="polite"
    >
      <div
        className="rounded-2xl px-4 py-3 shadow-xl border border-white/20"
        style={{
          background: "#F5F5F7",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
      >
        <p className="text-sm font-semibold text-[#0A0A0A] leading-tight mb-1">
          {tool.name}
        </p>
        <p className="text-xs text-[#888888] leading-snug">
          {tool.description}
        </p>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px]"
        style={{
          top: "100%",
          marginTop: "2px",
          borderTopColor: "#F5F5F7",
        }}
        aria-hidden="true"
      />
    </div>
  );

  return (
    <>
      <div
        ref={iconRef}
        role="img"
        aria-label={tool.name}
        className="group relative flex-shrink-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleClose}
      >
        <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-2 transition-colors duration-200 group-hover:bg-white/10 group-hover:border-white/15">
          {tool.useFallbackSvg && FALLBACK_SVGS[tool.slug] ? (
            <span className="grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center [&>svg]:shrink-0">
              {FALLBACK_SVGS[tool.slug](tool.color)}
            </span>
          ) : (
            <>
              <img
                src={`${CDN_BASE}/${tool.slug}/${tool.color}`}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  const fallback = e.target.nextElementSibling;
                  if (fallback) fallback.hidden = false;
                }}
              />
              <span
                className="text-sm font-semibold text-white/80 hidden"
                hidden
                aria-hidden="true"
              >
                {tool.name.charAt(0)}
              </span>
            </>
          )}
        </div>
      </div>
      {typeof document !== "undefined" && popupContent && createPortal(popupContent, document.body)}
    </>
  );
}

function HeroIconScroller() {
  return (
    <div
      className="relative z-20 mt-24 w-full max-w-4xl mx-auto px-6 overflow-x-hidden overflow-y-visible flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-500 hero-icon-scroller-mask"
      aria-hidden="true"
    >
      <div className="hero-icon-scroll-track flex items-center gap-5 md:gap-6">
        {Array.from({ length: REPEAT_COUNT }, (_, blockIndex) => (
          <div
            key={blockIndex}
            className="flex items-center gap-5 md:gap-6 flex-shrink-0"
          >
            {TOOLS.map((tool) => (
              <IconTile key={`${blockIndex}-${tool.slug}`} tool={tool} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

IconTile.propTypes = {
  tool: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    useFallbackSvg: PropTypes.bool,
  }).isRequired,
};

export default HeroIconScroller;
