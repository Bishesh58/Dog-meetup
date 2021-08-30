import React from "react";
import TeamCard from "./TeamCard";
import "./Team.css";
import shova from '../img/shova.jpeg';
import shakila from "../img/shakila.jpeg";
import daniel from "../img/daniel.jpeg";
import bishesh from "../img/bishesh.jpeg";

function Team() {
  return (
    <div className="team">
      <div className="team__title">
        <h3>Our team members</h3>
        <hr />
      </div>
      <div className="team__cards">
        <TeamCard
          name="Shova Tandukar"
          role="Developer"
          imgUrl={shova}
        />
        <TeamCard
          name="Bishesh Sunam"
          role="Scrum Master/ Developer"
          imgUrl={bishesh}
        />
        <TeamCard
          name="Shakila Maqsoodi"
          role="Developer"
          imgUrl={shakila}
        />
        <TeamCard
          name="Daniel Kim"
          role="Product Owner"
          imgUrl={daniel}
        />
      </div>
    </div>
  );
}

export default Team;
