import React from "react";
import PropTypes from "prop-types";

const HeadingImageList = ({ sections = [] }) => {
  return (
    <div className="space-y-12">
      {sections.map((item, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-xl md:text-2xl font-medium text-brand-black tracking-tight">
            {item.heading}
          </h3>
          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white">
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-auto object-cover"
            />
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
