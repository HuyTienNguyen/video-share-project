import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EActionStatus } from "../type";
import { IAuthState, ISignInAction } from "./type";
import serviceUser from "../../services/user";

const initialState: IAuthState = {
  status: EActionStatus.Idle,
  jwtAuth: null,
  isAuthenticated: !!serviceUser.getAccessToken(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state: IAuthState, _: PayloadAction<ISignInAction>) => {
      state.status = EActionStatus.Pending;
    },
    signInSuccess: (
      state: IAuthState,
      action: PayloadAction<{ jwtToken: string }>
    ) => {
      state.status = EActionStatus.Succeeded;
      state.isAuthenticated = true;
      state.jwtAuth = action.payload.jwtToken;
    },
    signInFail: (state: IAuthState) => {
      state.status = EActionStatus.Failed;
    },
    signOut: (state: IAuthState) => {
      state.status = EActionStatus.Idle;
    },
    signOutSuccess: (state: IAuthState) => {
      state.isAuthenticated = false;
    },
    updateAuth: (
      state: IAuthState,
      action: PayloadAction<{ isAuthenticated: boolean }>
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const {
  signIn,
  signInSuccess,
  signInFail,
  signOut,
  signOutSuccess,
  updateAuth,
} = authSlice.actions;

export default authSlice.reducer;
