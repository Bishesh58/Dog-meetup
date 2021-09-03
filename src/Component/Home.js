import React from "react";
import "./Home.css";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import CarasoulComp from "./carasoul/CarasoulComp";
import Mapbox from "./Mapbox";
import { useSelector } from "react-redux";


function Home() {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="home">
      {auth.userInfo ? (
        <Mapbox />
      ) : (
        <>
          <Banner />
          <CarasoulComp />
          <CustomerReview />
        </>
      )}
    </div>
  );
}

export default Home;
