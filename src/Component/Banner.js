import React from "react";
import "./Banner.css";
import bannerImge from "../img/dogsInPark.jpeg";
import mapImg from "../img/mapImg.png"
import Button from "@material-ui/core/Button";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__top">
        <div className="banner__topLeft">
          <h3>Find similar dogs to play within your place</h3>
          <p>
           Our client love the fact that they can finally find similar dog to play
          in their local parks. Our Web app will allow dog owners to find
           similar dog breed, color or weight for different dog activities. As a dog owner, you will be
           able to manage dog's profile and post your events so that other can join you.
           Our simple and easy use application will give you the best experience that all you need. 
          </p>
          <Button
            variant="contained"
            style={{ backgroundColor: "#1abc9c", color: "#FFFFFF" }}
          >
            Expore More
          </Button>
        </div>
        <div className="banner__topRight">
          <img src={bannerImge} alt=""></img>
        </div>
      </div>
      <div className="banner__bottom">
        <div className="banner__bottomLeft">
          <img src={mapImg} alt=""></img>
        </div>
        <div className="banner__bottomRight">
          <h3>Let other see your dog's activities</h3>
          <p>
            We have integrated google map for you to be able to view events created by
            others. You are just a click away to let other know that you are joining too. Not only that
            you can create one for your dog too. It's easy, List what activities you want for your dog, and 
            other can join.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
