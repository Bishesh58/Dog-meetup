import React from "react";
import "./ReviewCard.css";
import { Avatar } from "@material-ui/core";

function ReviewCard({ review, i}) {
  
  return (
    <div key={i} className="reviewCard">
      <div
        className="reviewCard__top"
        style={{ backgroundColor: "purple" }}
      ></div>
      <div className="reviewCard__middle">
        <Avatar style={{ height: "70px", width: "70px" }} src={review.profilepic}></Avatar>
      </div>
      <div className="reviewCard__bottom">
        <div className="reviewCard__top--name">
          <p>{review.fname}</p>
          <p>{review.lname}</p>
        </div>
        <h4>{review.title}</h4>
        <p>{review.description}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
