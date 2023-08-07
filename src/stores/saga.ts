import authWatcher from "./auth/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([authWatcher()]);
}
