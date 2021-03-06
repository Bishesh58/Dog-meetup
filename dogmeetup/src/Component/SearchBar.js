import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "./EventCard";
import "./SearchBar.css";
import { fetchUser } from "../redux/apiCalls";
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

function SearchBar() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    fetchUser(dispatch, auth.userInfo);
  }, []);

  const [searchText, setsearchText] = useState("");
  const [data, setData] = useState([]);

  const [city, setCity] = useState("");
  const [dogbreed, setDogbreed] = useState("");
  const [dogweight, setDogweight] = useState("");

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeDogbreed = (event) => {
    setDogbreed(event.target.value);
  };
  const handleChangeDogweight = (event) => {
    setDogweight(event.target.value);
  };

  const handleSearchText = (value) => {
    setsearchText(value);
    filterData(value);
  };

  const filterData = async (value) => {
    const inputText = value.toLowerCase().trim();
    if (!inputText) {
      // setData(eventsDetails);
    } else {
      const res = await axios.get(`/api/events/`);
      const resData = res.data;
      const filterData = resData.filter((item) => {
        return (
          item.address.toLowerCase().toString().includes(inputText) ||
          item.title.toLowerCase().toString().includes(inputText) ||
          item.username.toLowerCase().toString().includes(inputText) ||
          item.dogtype.toLowerCase().toString().includes(inputText) ||
          item.dogweight.toString().includes(inputText) ||
          item.startDate.toLowerCase().toString().includes(inputText) ||
          item.endDate.toLowerCase().toString().includes(inputText)
        );
      });

      setData(filterData);
    }
  };
  const handleFilterSearch = async (e) => {
    e.preventDefault();
    const res = await axios.get(`/api/events/`);
    const resData = res.data;
    const filterData = resData.filter((item) => {
      return (
        item.address.toLowerCase().toString().includes(city.toLowerCase()) &&
        item.dogtype
          .toLowerCase()
          .toString()
          .includes(dogbreed.toLowerCase()) &&
        item.dogweight.toString().includes(dogweight.toString())
      );
    });
    setData(filterData);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setCity("");
    setDogbreed("");
    setDogweight("");
    setData([]);
  };
  return (
    <div className="searchBar">
      <div className="searchBar__top">
        <form className="searchBar__form" noValidate autoComplete="off">
          <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="inputCity">City/Suburb</InputLabel>
              <Select
                labelId=""
                id="selectCity"
                value={city}
                label="city"
                onChange={handleChangeCity}
              >
                <MenuItem value="Auckland CBD">Auckland CBD</MenuItem>
                <MenuItem value="Mount Eden">Mount Eden</MenuItem>
                <MenuItem value="Epsom">Epsom</MenuItem>
                <MenuItem value="Mount Wellington">Mount Wellington</MenuItem>
                <MenuItem value="Grey lynn">Grey lynn</MenuItem>
                <MenuItem value="Mount Albert">Mount Albert</MenuItem>
                <MenuItem value="One Tree Hill">One Tree Hill</MenuItem>
                <MenuItem value="Parnell">Parnell</MenuItem>
                <MenuItem value="Greenlane">Greenlane</MenuItem>
                <MenuItem value="Remura">Remura</MenuItem>
                <MenuItem value="Newmarket">Newmarket</MenuItem>
                <MenuItem value="Avondale">Avondale</MenuItem>
                <MenuItem value="Lynfield">Lynfield</MenuItem>
                <MenuItem value="Three Kings">Three Kings</MenuItem>
                <MenuItem value="Mount Roskill">Mount Roskill</MenuItem>
                <MenuItem value="Penrose">Penrose</MenuItem>
                <MenuItem value="Mission Bay">Mission Bay</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="inputBreed">Dog breed</InputLabel>
              <Select
                labelId=""
                id="selectDogbreed"
                value={dogbreed}
                label="Dog breed"
                onChange={handleChangeDogbreed}
              >
                <MenuItem value="German shepherd">German shepherd</MenuItem>
                <MenuItem value="Labrador retriever">
                  Labrador retriever
                </MenuItem>
                <MenuItem value="English bulldog">English bulldog</MenuItem>
                <MenuItem value="Golden retriever">Golden retriever</MenuItem>
                <MenuItem value="Labrador retriever">
                  Labrador retriever
                </MenuItem>
                <MenuItem value="Border collie">Border collie</MenuItem>
                <MenuItem value="French bulldog">French bulldog</MenuItem>
                <MenuItem value="Beagles">Beagles</MenuItem>
                <MenuItem value="Rottweilers">Rottweilers</MenuItem>
                <MenuItem value="Pointers">Pointers</MenuItem>
                <MenuItem value="Dachshunds">Dachshunds</MenuItem>
                <MenuItem value="Boxer">Boxer</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="inputDogweight">Dog weight</InputLabel>
              <Select
                labelId=""
                id="selectDogweight"
                value={dogweight}
                label="dogweight"
                onChange={handleChangeDogweight}
              >
                <MenuItem value={10}>10 kg</MenuItem>
                <MenuItem value={20}>20 kg</MenuItem>
                <MenuItem value={30}>30 kg</MenuItem>
                <MenuItem value={40}>40 kg</MenuItem>
                <MenuItem value={50}>50 kg</MenuItem>
                <MenuItem value={60}>60 kg</MenuItem>
                <MenuItem value={70}>70 kg</MenuItem>
                <MenuItem value={80}>80 kg</MenuItem>
                <MenuItem value={90}>90 kg</MenuItem>
                <MenuItem value={100}>100 kg</MenuItem>
                <MenuItem value={110}>110 kg</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <TextField
                id="outlined-basic"
                label="or Enter here"
                variant="standard"
                size="small"
                type="search"
                value={searchText}
                onChange={(e) => handleSearchText(e.target.value)}
              />
            </FormControl>
          </div>
          <div>
            <Button
              size="large"
              variant="outlined"
              className="searchButton"
              onClick={handleFilterSearch}
              type="submit"
            >
              Search
            </Button>
            <Button
              size="large"
              variant="outlined"
              className="searchButton"
              onClick={handleReset}
              type="reset"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
      <div className="searchBar__bottom">
        {data?.map((Ev) => (
          <EventCard Ev={Ev} />
        ))}

        {data?.length === 0 && (
          <span style={{ paddingLeft: "15px" }}>
            No records found to be displayed..
          </span>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
