import { call, put, takeLeading } from "redux-saga/effects";
import { authApi } from "../../api/authApi";
import serviceUser from "../../services/user";
import { IUserLoginResponse, IUserRegisterResponse } from "../response.type";
import { IAction } from "../type";
import {
  signIn,
  signInFail,
  signInSuccess,
  signOut,
  signOutSuccess,
  signUp,
  signUpFail,
  signUpSuccess,
} from "./slice";
import { LoginPayload, RegisterPayload } from "../../models/auth";

function* signInWorker(action: IAction<LoginPayload>) {
  try {
    const response: IUserLoginResponse = yield call(
      authApi.login,
      action.payload
    );
    if (response) {
      const { access_token } = response;
      serviceUser.storeAccessToken(access_token);

      yield put({ type: signInSuccess.toString(), payload: access_token });
    }
  } catch (error) {
    yield put({ type: signInFail.toString() });
  }
}

function* signUpWorker(action: IAction<RegisterPayload>) {
  try {
    const response: IUserRegisterResponse = yield call(
      authApi.register,
      action.payload
    );
    if (response) {
      yield put({ type: signUpSuccess.toString() });
    }
  } catch (error) {
    yield put({ type: signUpFail.toString() });
  }
}

function* signOutWorker() {
  serviceUser.storeAccessToken(null);
  yield put({ type: signOutSuccess.toString() });
}

function* authWatcher() {
  yield takeLeading(signIn.toString(), signInWorker);
  yield takeLeading(signOut.toString(), signOutWorker);
  yield takeLeading(signUp.toString(), signUpWorker);
}

export default authWatcher;
