import React from "react";
import PropTypes from "prop-types";

const ProjectInfoSection = ({ sections = [] }) => {
  const renderContent = (content) => {
    if (typeof content === "string") {
      return <p className="project-content-text">{content}</p>;
    }

    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === "string") {
          return (
            <p key={`text-${index}`} className="project-content-text">
              {item}
            </p>
          );
        }

        if (item.type === "paragraph") {
          return (
            <p key={`paragraph-${index}`} className="project-content-text">
              {item.text}
            </p>
          );
        }

        if (item.type === "bulletList") {
          return (
            <ul key={`bullet-list-${index}`} className="project-content-list">
              {item.items.map((bulletItem, bulletIndex) => (
                <li key={`bullet-${index}-${bulletIndex}`}>
                  {bulletItem}
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
    <div className="project-content-sections">
      {sections.map((section, index) => (
        <div key={`${section.heading}-${index}`} className="project-content-section">
          <h3 className="project-content-heading">{section.heading}</h3>
          <div className="project-content-body">{renderContent(section.content)}</div>
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
