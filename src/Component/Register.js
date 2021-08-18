import React, { useState, useRef, useCallback } from "react";
import "./Register.css";
import imgRegister from "../img/imgRegister.jpeg";
import MapboxAutocomplete from "react-mapbox-autocomplete";

function Register() {
  const getAddress=(result, lat, lng, text)=>{
    console.log(result);
  }
  return (
    <div className="register">
      <div className="register__container">
        <div className="register__container--left">
          <img src={imgRegister} alt="" />
        </div>
        <div className="register__container--right">
          <form>
            <input placeholder="First Name" type="fname" />
            <input placeholder="Last Name" type="lname" />
            <input placeholder="Email" type="email" />
            <input placeholder="Password" type="password" />
            <input placeholder="Dog name" type="dname" />
            <input placeholder="Dog breed" type="dbreed" />
            <label className="lblAddress">Address</label>
            <MapboxAutocomplete
              publicKey={process.env.REACT_APP_MAPBOX}
              onSuggestionSelect={getAddress}
              country='nz'
              resetSearch={false}
            />

            <button type="submit" onClick="">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
