import React from "react";

const Rating = props => {
  let stars = function(rate) {
    let starRow = "";
    let roundedRating = Math.round(rate);

    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        starRow += "★";
      } else {
        starRow += "☆";
      }
    }
    return starRow;
  };

  return (
    <div className="rating">
      <p>{stars(props.children)}</p>
    </div>
  );
};

export default Rating;
