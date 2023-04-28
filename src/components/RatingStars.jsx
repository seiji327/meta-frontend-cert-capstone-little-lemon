import React from "react";

import "../css/ratingStars.css";

const RatingStars = ({ stars }) => {
  return (
    <div className="rating-stars">
      {Array.from(Array(5)).map((_, index) => (
        <span
          key={index}
          className={`fa fa-star ${
            index + 1 <= stars ? "checked" : ""
          }`.trimEnd()}
        ></span>
      ))}
    </div>
  );
};

export default RatingStars;
