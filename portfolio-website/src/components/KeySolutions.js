import React from "react";
import PropTypes from "prop-types";

const KeySolutions = ({ solutions }) => {
  if (!solutions || solutions.length === 0) {
    return null;
  }

  return (
    <div className="project-content-section">
      <h3 className="project-content-heading">Key solutions implemented</h3>
      <div className="project-content-solutions">
        {solutions.map((solution, index) => (
          <div
            key={solution.title || `solution-${index}`}
            className="project-content-solution-card"
          >
            <h4 className="project-content-solution-title">{solution.title}</h4>
            <p className="project-content-solution-desc">{solution.description}</p>
            {solution.items && solution.items.length > 0 && (
              <ul className="project-content-solution-list">
                {solution.items.map((item, itemIndex) => (
                  <li key={`${solution.title}-item-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

KeySolutions.propTypes = {
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default KeySolutions;
