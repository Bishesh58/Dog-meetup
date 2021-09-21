import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import registerReducer from "./registerSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    user: userReducer,
  },
});
