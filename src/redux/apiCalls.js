import { loginStart, loginSuccess, loginError, logout } from "./authSlice";
import axios from "axios";

export const login = async (user, dispatch, history) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/users/login", user);
    dispatch(loginSuccess(res.data));
    history.push("/");
  } catch (error) {
    dispatch(loginError());
  }
};
