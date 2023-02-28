import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
function Rating({ rating }) {
  const [ratingArray, setRatingArray] = useState([false, false, false, false]);
  useEffect(() => {
    let tempRating = [false, false, false, false, false];
    for (let i = 0; i < rating; i++) {
      tempRating[i] = true;
    }
    setRatingArray(tempRating);
  }, []);

  return (
    <div>
      {ratingArray.map((item) => (
        <>{item ? <AiFillStar color="rgb(234 147 49)" size={20} /> : <AiOutlineStar color="rgb(234 147 49)" size={20}/>}</>
      ))}
    </div>
  );
}

export default Rating;
