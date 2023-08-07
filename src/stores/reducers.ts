import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";

const rootReduder = combineReducers({
  auth: authReducer,
});

export default rootReduder;
