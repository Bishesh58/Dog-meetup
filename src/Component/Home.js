import React from "react";
import "./Home.css";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import CarasoulComp from "./carasoul/CarasoulComp";
import Mapbox from "./Mapbox";

function Home() {
  return (
    <div className="home">
      {/* <Banner /> */}
      <Mapbox />
      <CarasoulComp />
      <CustomerReview />
    </div>
  );
}

export default Home;
