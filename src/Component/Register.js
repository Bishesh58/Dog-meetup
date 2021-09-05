import React, { useState, useRef, useCallback } from "react";
import "./Register.css";
import imgRegister from "../img/imgRegister.jpeg";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import { register } from "../redux/apiCalls";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.register);
  const getAddress = (result, lat, lng, text) => {
    //console.log(result);
  };
  //local state
  const [username, setUsername] = useState(" ");
  const [fname, setFname] = useState(" ");
  const [lname, setLname] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [passwordConfirm, setPasswordConfirm] = useState(" ");

  const [address, setAddress] = useState(" ");

  const [dogname, setDogname] = useState(" ");
  const [dogbreed, setDogbreed] = useState(" ");
  const [dogcolor, setDogcolor] = useState(" ");
  const [dogweight, setDogweight] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    register(
      {
        username,
        fname,
        lname,
        email,
        password,
        address,
        dogname,
        dogbreed,
        dogcolor,
        dogweight,
      },
      dispatch,
      history
    );
  };
  return (
    <div className="register">
      <div className="register__container">
        <div className="register__container--left">
          <img src={imgRegister} alt="" />
        </div>
        <div className="register__container--right">
          <form onSubmit={handleSubmit}>
            <h3>Register a new account</h3>
            <div className="ownerDetails">
              <h4>Dog owner details</h4>
              <input
                placeholder="Username"
                type="fname"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                placeholder="First Name"
                type="fname"
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                placeholder="Last Name"
                type="lname"
                onChange={(e) => setLname(e.target.value)}
              />
              <input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>

            <div className="dogDetails">
              <h4>Dog details </h4>
              <input
                placeholder="Dog name"
                type="dogname"
                onChange={(e) => setDogname(e.target.value)}
              />
              <input
                placeholder="Dog breed"
                type="dogbreed"
                onChange={(e) => setDogbreed(e.target.value)}
              />
              <input
                placeholder="Dog weight"
                type="dogweight"
                onChange={(e) => setDogweight(e.target.value)}
              />
              <input
                placeholder="Dog color"
                type="dogcolor"
                onChange={(e) => setDogcolor(e.target.value)}
              />
              <label className="lblAddress">Address</label>

              <MapboxAutocomplete
                publicKey={process.env.REACT_APP_MAPBOX}
                onSuggestionSelect={getAddress}
                country="nz"
                resetSearch={false}
              />
              <button>
              { newUser.isLoading ? <CircularProgress size="30px"/>: "Sign up"}
              </button>
            </div>
          </form>
          <span>{newUser.error? "error": ""}</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
