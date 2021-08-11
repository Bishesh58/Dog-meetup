import React from "react";
import "./Register.css";
import imgRegister from "../img/imgRegister.jpeg";

function Register() {
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
            <input placeholder="Address" type="address" />
            <input placeholder="Dog name" type="dname" />
            <input placeholder="Dog breed" type="dbreed" />
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
