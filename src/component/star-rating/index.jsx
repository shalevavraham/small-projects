import React, { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleHoverClick = (getCurrentIndex) => {
    setHover(getCurrentIndex)
};

  const handleLeaveClick = () => {
    setHover(rating)
};

  return (
    <div className="star-rating">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={(index <= hover || index <= rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleHoverClick(index)}
            onMouseLeave={() => handleLeaveClick()}

            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
