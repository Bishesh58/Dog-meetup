import React, { useContext, useRef } from "react";
import "./Login.css";
import imgLogin from "../img/imgLogin.jpeg";

function Login() {
  const email = useRef();
  const password = useRef();
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container--left">
          <img src={imgLogin} alt="" />
        </div>
        <div className="login__container--right">
          <form onSubmit={handleSubmit}>
          <h3>Sign in to your account</h3>
            <input placeholder="Email" type="email" ref={email} required />

            <input
              placeholder="Password"
              type="password"
              ref={password}
              required
              minLength="6"
            />

            <button >
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
