import React from "react";
import PropTypes from "prop-types";
import "./../styles/ProjectInfoSection.css";

const ProjectInfoSection = ({ sections = [] }) => {
    const renderContent = (content) => {
        if (typeof content === 'string') {
            return <p className="section-text">{content}</p>;
        }

        if (Array.isArray(content)) {
            return content.map((item, index) => {
                if (typeof item === 'string') {
                    return <p key={`text-${index}-${item.substring(0, 20)}`} className="section-text">{item}</p>;
                }

                if (item.type === 'paragraph') {
                    return <p key={`paragraph-${index}-${item.text.substring(0, 20)}`} className="section-text">{item.text}</p>;
                }

                if (item.type === 'bulletList') {
                    return (
                        <ul key={`bullet-list-${index}`} className="section-bullet-list">
                            {item.items.map((bulletItem, bulletIndex) => (
                                <li key={`bullet-${index}-${bulletIndex}-${bulletItem.substring(0, 15)}`} className="section-bullet-item">
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
        <div className="project-info-container">
            {sections.map((section, index) => (
                <div key={`${section.heading}-${index}`} className="project-info-section">
                    <div className="section-content">
                        <h3 className="section-heading">{section.heading}</h3>
                        <div className="section-content-wrapper">
                            {renderContent(section.content)}
                        </div>
                    </div>
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
                            type: PropTypes.oneOf(['paragraph', 'bulletList']),
                            text: PropTypes.string,
                            items: PropTypes.arrayOf(PropTypes.string),
                        })
                    ])
                )
            ]).isRequired,
        })
    ),
};

export default ProjectInfoSection;
