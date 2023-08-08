import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EActionStatus } from "../type";
import { IVideo, IVideosState } from "./type";
import { ListParams, ListResponse } from "../common";

const initialState: IVideosState = {
  status: EActionStatus.Idle,
  statusInteracVideo: EActionStatus.Idle,
  videosList: [],
  filter: {
    _page: 1,
    _limit: 12,
  },
  pagination: {
    _page: 1,
    _limit: 15,
    _totalRows: 15,
  },
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    getAllVideosRequest: (
      state: IVideosState,
      _: PayloadAction<ListParams>
    ) => {
      state.status = EActionStatus.Pending;
    },
    getAllVideosSuccess: (
      state: IVideosState,
      action: PayloadAction<ListResponse<IVideo>>
    ) => {
      state.status = EActionStatus.Succeeded;
      state.videosList = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    getAllVideosFailed: (state: IVideosState) => {
      state.status = EActionStatus.Failed;
    },
    interactVideo: (
      state: IVideosState,
      _: PayloadAction<{ videoId: number}>
    ) => {
      state.statusInteracVideo = EActionStatus.Pending;
    },

    interactVideoSuccess: (state: IVideosState) => {
      state.statusInteracVideo = EActionStatus.Succeeded;
    },

    interactVideoFailed: (state: IVideosState) => {
      state.statusInteracVideo = EActionStatus.Failed;
    },

    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },
  },
});

export const {
  getAllVideosRequest,
  getAllVideosSuccess,
  getAllVideosFailed,
  interactVideo,
  interactVideoSuccess,
  interactVideoFailed,
  setFilter,
} = videoSlice.actions;

export default videoSlice.reducer;
