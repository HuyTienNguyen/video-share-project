import { PayloadAction } from "@reduxjs/toolkit";
import { call, debounce, put, takeLeading } from "redux-saga/effects";
import videoApi from "../../api/videoApi";
import { ListParams, ListResponse } from "../common";
import {
  getAllVideosFailed,
  getAllVideosRequest,
  getAllVideosSuccess,
  interactVideo,
  interactVideoFailed,
  interactVideoSuccess,
} from "./slice";
import { IVideo } from "./type";
import { dataTest } from "../../constants/data-test";
import { IAction } from "../type";

function* getAllVideosWorker(action: PayloadAction<ListParams>) {
  try {
    // const response: ListResponse<IVideo> = yield call(
    //   videoApi.getAll,
    //   action.payload
    // );
    const response = dataTest;
    console.log("saga", response);
    if (response) {
      yield put({
        type: getAllVideosSuccess.toString(),
        payload: response,
      });
    }
  } catch (error: any) {
    yield put({ type: getAllVideosFailed.toString() });
  }
}

function* interactVideosWorker(
  action: IAction<{
    videoId: number;
  }>
) {
  try {
    const { videoId } = action.payload;
    //call api update interact video

    //end update
    yield put({
      type: interactVideoSuccess.toString(),
    });
  } catch (error: any) {
    yield put({ type: interactVideoFailed.toString() });
  }
}

function* videosWacher() {
  yield takeLeading(getAllVideosRequest.toString(), getAllVideosWorker);
  yield takeLeading(interactVideo.toString(), interactVideosWorker);
}

export default videosWacher;
