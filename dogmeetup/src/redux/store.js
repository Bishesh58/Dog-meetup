import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import registerReducer from "./registerSlice";
import userReducer from "./userSlice";
import eventsReducer from "./eventsSlice";
import reviewReducer from "./reviewSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    user: userReducer,
    events: eventsReducer,
    reviews: reviewReducer,
  },
});
