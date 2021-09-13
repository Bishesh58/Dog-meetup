import { loginStart, loginSuccess, loginError, logout } from "./authSlice";
import axios from "axios";
import { registerStart, registerSuccess, registerError} from "./registerSlice";
import { useSelector } from "react-redux";



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
    history.push("/login")
    
  } catch (error) {
    dispatch(registerError(error.message));
    console.log(error);
  }
};
