import authWatcher from "./auth/saga";
import { all } from "redux-saga/effects";
import videosWacher from "./videos/saga";

export default function* rootSaga() {
  yield all([authWatcher(), videosWacher()]);
}
