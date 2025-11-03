import React from "react";
import PropTypes from "prop-types";
import "../styles/KeySolutions.css";

const KeySolutions = ({ solutions }) => {
    if (!solutions || solutions.length === 0) {
        return null;
    }

    return (
        <div className="key-solutions-section">
            <h2 className="section-heading">Key Solutions Implemented</h2>
            <div className="solutions-grid">
                {solutions.map((solution, index) => (
                    <div key={solution.title ? solution.title : `solution-${index}`} className="solution-card">
                        <h3 className="solution-title">{solution.title}</h3>
                        <p className="solution-description">{solution.description}</p>
                        {solution.items && solution.items.length > 0 && (
                            <ul className="solution-items">
                                {solution.items.map((item, itemIndex) => (
                                    <li key={`${solution.title}-item-${itemIndex}`} className="solution-item">
                                        {item}
                                    </li>
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

