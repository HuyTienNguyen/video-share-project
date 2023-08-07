import { call, put, takeLeading } from "redux-saga/effects";
import { authApi } from "../../api/authApi";
import serviceUser from "../../services/user";
import { IUserLoginResponse } from "../response.type";
import { IAction } from "../type";
import {
  signIn,
  signInFail,
  signInSuccess,
  signOut,
  signOutSuccess,
} from "./slice";
import { ISignInAction } from "./type";

function* signInWorker(action: IAction<ISignInAction>) {
  try {
    const { username, password } = action.payload;
    const loginResponse: IUserLoginResponse = yield serviceUser.login(
      username,
      password
    );
    if (loginResponse) {
      const { accessToken } = loginResponse;
      serviceUser.storeAccessToken(accessToken);

      yield put({ type: signInSuccess.toString(), payload: accessToken });
    }
  } catch (error) {
    yield put({ type: signInFail.toString() });
  }
}

function* signOutWorker() {
  console.log("saga");
  serviceUser.storeAccessToken(null);
  yield put({ type: signOutSuccess.toString() });
}

function* authWatcher() {
  yield takeLeading(signIn.toString(), signInWorker);
  yield takeLeading(signOut.toString(), signOutWorker);
}

export default authWatcher;
