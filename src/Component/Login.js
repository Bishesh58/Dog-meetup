import React, {useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import imgLogin from "../img/imgLogin.jpeg";
import { login } from "../redux/apiCalls";
import { useHistory } from "react-router-dom";
import {CircularProgress} from '@material-ui/core';



function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const auth = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
 const history = useHistory()

  //ref for input
  const eml = useRef();
  const pw = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch, history);
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
            <input
              placeholder="Email"
              type="email"
              ref={eml}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Password"
              type="password"
              ref={pw}
              required
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button >
              { auth.isLoading ? <CircularProgress size="30px"/>: "Sign In"}
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
