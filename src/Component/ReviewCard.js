import React from "react";
import "./ReviewCard.css";
import { Avatar } from "@material-ui/core";

function ReviewCard({ imgURL, fname, lname, title, description }) {
  return (
    <div className="reviewCard">
      <div className="reviewCard__top">
        <Avatar style={{ height: "70px", width: "70px" }} src={imgURL}></Avatar>
        <div className="reviewCard__top--name">
          <p>{fname}</p>
          <p>{lname}</p>
        </div>
      </div>
      <div className="reviewCard__bottom">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
