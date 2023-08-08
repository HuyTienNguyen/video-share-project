import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import videoReducer from "./videos/slice";

const rootReduder = combineReducers({
  auth: authReducer,
  video: videoReducer,
});

export default rootReduder;
