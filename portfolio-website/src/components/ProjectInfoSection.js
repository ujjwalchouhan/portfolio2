import React from "react";
import PropTypes from "prop-types";

const ProjectInfoSection = ({ sections = [] }) => {
  const renderContent = (content) => {
    if (typeof content === "string") {
      return (
        <p className="text-base md:text-lg font-normal text-gray-700 leading-[1.7]">{content}</p>
      );
    }

    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === "string") {
          return (
            <p
              key={`text-${index}`}
              className="text-base md:text-lg font-normal text-gray-700 leading-[1.7]"
            >
              {item}
            </p>
          );
        }

        if (item.type === "paragraph") {
          return (
            <p
              key={`paragraph-${index}`}
              className="text-base md:text-lg font-normal text-gray-700 leading-[1.7]"
            >
              {item.text}
            </p>
          );
        }

        if (item.type === "bulletList") {
          return (
            <ul
              key={`bullet-list-${index}`}
              className="list-none p-0 m-0 space-y-3"
            >
              {item.items.map((bulletItem, bulletIndex) => (
                <li
                  key={`bullet-${index}-${bulletIndex}`}
                  className="flex gap-3 text-base md:text-lg font-normal text-gray-700 leading-[1.7]"
                >
                  <span className="text-brand-accent font-medium flex-shrink-0">•</span>
                  <span>{bulletItem}</span>
                </li>
              ))}
            </ul>
          );
        }

        return null;
      });
    }

    return null;
  };

  return (
    <div className="space-y-16">
      {sections.map((section, index) => (
        <div key={`${section.heading}-${index}`} className="space-y-5">
          <h3 className="text-xl md:text-2xl font-medium text-brand-black tracking-tight">
            {section.heading}
          </h3>
          <div className="space-y-4">{renderContent(section.content)}</div>
        </div>
      ))}
    </div>
  );
};

ProjectInfoSection.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
              type: PropTypes.oneOf(["paragraph", "bulletList"]),
              text: PropTypes.string,
              items: PropTypes.arrayOf(PropTypes.string),
            }),
          ])
        ),
      ]).isRequired,
    })
  ),
};

export default ProjectInfoSection;
