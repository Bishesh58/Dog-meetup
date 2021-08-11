import React from "react";
import "./Login.css";
import imgLogin from "../img/imgLogin.jpeg";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container--left">
          <img src={imgLogin} alt="" />
        </div>
        <div className="login__container--right">
          <form>
            <input placeholder="Email" type="email" />

            <input placeholder="Password" type="password" />

            <button type="submit" onClick="">
              Sign in
            </button>
            <p>
              Forget password? <span className="forgetpw">Reset Now</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
