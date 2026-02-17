import React from "react";
import "../styles/HeroIconScroller.css";

// Tool icons via Simple Icons CDN (icon slug, hex color for CDN)
const TOOLS = [
  { slug: "figma", color: "F24E1E", name: "Figma" },
  { slug: "sketch", color: "FDB300", name: "Sketch" },
  { slug: "framer", color: "0055FF", name: "Framer" },
  { slug: "miro", color: "050038", name: "Miro" },
  { slug: "adobexd", color: "FF61F6", name: "Adobe XD" },
  { slug: "adobephotoshop", color: "31A8FF", name: "Photoshop" },
  { slug: "adobeillustrator", color: "FF9A00", name: "Illustrator" },
  { slug: "aftereffects", color: "9999FF", name: "After Effects" },
  { slug: "midjourney", color: "000000", name: "Midjourney" },
  { slug: "notion", color: "000000", name: "Notion" },
  { slug: "openai", color: "412991", name: "ChatGPT" },
  { slug: "googlegemini", color: "8E75B2", name: "Gemini" },
];

const ICON_SIZE = 38;
const CDN_BASE = "https://cdn.simpleicons.org";

function IconTile({ tool }) {
  return (
    <div className="hero-icon-scroller-item">
      <img
        src={`${CDN_BASE}/${tool.slug}/${tool.color}`}
        alt=""
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="hero-icon-scroller-icon"
        loading="lazy"
        onError={(e) => {
          e.target.style.display = "none";
          const fallback = e.target.nextElementSibling;
          if (fallback) fallback.hidden = false;
        }}
      />
      <span className="hero-icon-scroller-fallback" hidden aria-hidden="true">
        {tool.name.charAt(0)}
      </span>
    </div>
  );
}

function HeroIconScroller() {
  return (
    <div className="hero-icon-scroller" aria-hidden="true">
      <div className="hero-icon-scroller-track">
        <div className="hero-icon-scroller-set">
          {TOOLS.map((tool) => (
            <IconTile key={tool.slug} tool={tool} />
          ))}
        </div>
        <div className="hero-icon-scroller-set" aria-hidden="true">
          {TOOLS.map((tool) => (
            <IconTile key={`dup-${tool.slug}`} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroIconScroller;
