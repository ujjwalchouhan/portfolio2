import React from "react";
import "./../styles/HeadingImageList.css";


const HeadingImageList = ({ sections }) => {
    return (
      <div className="section-display">
        {sections.map((item, index) => (
          <div key={index} className="section-item">
            <h2 className="section-heading">{item.heading}</h2>
            <img src={item.image} alt={item.heading} className="section-image" />
          </div>
        ))}
      </div>
    );
  };
  
  export default HeadingImageList;