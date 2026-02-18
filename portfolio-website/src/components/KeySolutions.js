import React from "react";
import PropTypes from "prop-types";

const KeySolutions = ({ solutions }) => {
  if (!solutions || solutions.length === 0) {
    return null;
  }

  return (
    <div className="space-y-10">
      <h3 className="text-xl md:text-2xl font-medium text-brand-black tracking-tight">
        Key solutions implemented
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={solution.title || `solution-${index}`}
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="text-base font-semibold text-brand-black tracking-tight mb-3">
              {solution.title}
            </h4>
            <p className="text-sm md:text-base font-normal text-gray-600 leading-[1.7] mb-4">
              {solution.description}
            </p>
            {solution.items && solution.items.length > 0 && (
              <ul className="space-y-2">
                {solution.items.map((item, itemIndex) => (
                  <li
                    key={`${solution.title}-item-${itemIndex}`}
                    className="flex gap-2.5 text-sm font-normal text-gray-600 leading-[1.6]"
                  >
                    <span className="text-brand-accent font-medium flex-shrink-0">•</span>
                    <span>{item}</span>
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
