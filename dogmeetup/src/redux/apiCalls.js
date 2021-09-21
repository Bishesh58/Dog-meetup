import { loginStart, loginSuccess, loginError } from "./authSlice";
import axios from "axios";
import { registerStart, registerSuccess, registerError } from "./registerSlice";
import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserError,
  updateUserStart,
  updateUserSuccess,
  updateUserError,
} from "./userSlice";

//login
export const login = async (user, dispatch, history) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/users/login", user);
    dispatch(loginSuccess(res.data));
    history.push("/");
  } catch (error) {
    dispatch(loginError());
  }
};

//register
export const register = async (user, dispatch, history) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/api/users/register", user);
    dispatch(registerSuccess(res.data));
    history.push("/login");
  } catch (error) {
    dispatch(registerError(error.message));
    console.log(error);
  }
};

//get user
export const fetchUser = async (dispatch, id) => {
  dispatch(fetchUserStart());
  try {
    const res = await axios.get(`/api/users/${id}`);
    dispatch(fetchUserSuccess(res.data));
  } catch (error) {
    dispatch(fetchUserError(error.message));
    console.log(error);
  }
};

//update user
export const updateUser = async (user, dispatch, history, id) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.patch(`/api/users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
    history.push("/profile");

    const res1 = await axios.get(`/api/users/${id}`);
    dispatch(fetchUserSuccess(res1.data));
  } catch (error) {
    dispatch(updateUserError(error.message));
    console.log(error);
  }
};
