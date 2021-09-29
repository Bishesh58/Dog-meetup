import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "./EventCard";
import "./SearchBar.css";
import { fetchUser } from "../redux/apiCalls";

function SearchBar() {

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    fetchUser(dispatch, auth.userInfo);
  }, []);

  return (
    <div className="searchBar">
      <div className="searchBar__top">
        <form className="searchBar__form" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Enter here"
            variant="outlined"
            size="small"
          />
          <Button size="large" variant="outlined" className="searchButton">
            Search
          </Button>
        </form>
      </div>
      <div className="searchBar__bottom">
        <EventCard
          title="Eden Park Circuit"
          activities="30 Minutes walking with dog around the circuit"
          address="250 Mount Eden Road, Mount Eden, Auckland 1024"
        />
        <EventCard
          title="Fun with my dog at Cornwall Park"
          activities="Flying Disc training for 1 hour"
          address="Green Lane West, Epsom, Auckland 1051"
        />
        <EventCard
          title="Fun Weekend at Portters Park"
          activities="Playing all day with my dogs"
          address="480 Dominion Road, Mt Eden Auckland"
        />
      </div>
    </div>
  );
}

export default SearchBar;
