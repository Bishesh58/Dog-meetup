import React from "react";
import "./TeamCard.css";
import { Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

function TeamCard({name, role, imgUrl}) {
  return (
    <div className="teamCard">
      <div className="teamCard__top"></div>
      <div className="teamCard__middle">
        <Avatar
          src={imgUrl}
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="teamCard__bottom">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="teamCard__bottom--links">
          <FacebookIcon className="socialIcons" style={{color: "#4267B2"}}/>
          <InstagramIcon className="socialIcons" style={{color: "#C13584"}}/>
          <LinkedInIcon className="socialIcons" style={{color: "#2867B2"}}/>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
