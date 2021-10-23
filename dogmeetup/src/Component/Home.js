import React from "react";
import "./Home.css";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import CarasoulComp from "./carasoul/CarasoulComp";
import Mapbox from "./Mapbox";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

function Home() {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="home">
      {auth.userInfo ? (
        <div className="home__wrapper">
          <SearchBar />
          <Mapbox />
        </div>
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
