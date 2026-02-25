import React from "react";
import PropTypes from "prop-types";

const HeadingImageList = ({ sections = [] }) => {
  return (
    <div className="project-content-steps">
      {sections.map((item, index) => (
        <div key={index} className="project-content-step">
          <h3 className="project-content-step-heading">{item.heading}</h3>
          <div className="project-content-step-image-wrap">
            <img src={item.image} alt={item.heading} loading="lazy" />
          </div>
        </div>
      ))}
    </div>
  );
};

HeadingImageList.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default HeadingImageList;
