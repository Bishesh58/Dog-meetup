import React, { useState, useRef, useCallback } from "react";
import "./Register.css";
import imgRegister from "../img/imgRegister.jpeg";
import MapboxAutocomplete from "react-mapbox-autocomplete";

function Register() {
  const getAddress = (result, lat, lng, text) => {
    console.log(result);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
              <input placeholder="First Name" type="fname" />
              <input placeholder="Last Name" type="lname" />
              <input placeholder="Email" type="email" />
              <input placeholder="Password" type="password" />
            </div>
            <div className="dogDetails">
              <h4>Dog details</h4>
              <input placeholder="Dog name" type="dname" />
              <input placeholder="Dog breed" type="dbreed" />
              <input placeholder="Dog weight" type="dweight" />
              <input placeholder="Dog color" type="dcolor" />
              <label className="lblAddress">Address</label>

              <MapboxAutocomplete
                publicKey={process.env.REACT_APP_MAPBOX}
                onSuggestionSelect={getAddress}
                country="nz"
                resetSearch={false}
              />
              <button>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
