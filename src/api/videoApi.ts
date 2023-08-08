import { ListParams, ListResponse } from "../stores/common";
import { IVideo } from "../stores/videos/type";
import axiosClient from "./axiosClient";

const videoApi = {
  getAll(params: ListParams): Promise<ListResponse<IVideo>> {
    const url = "/students";
    return axiosClient.get(url, { params });
  },
  getVideoSharedAll(params: ListParams): Promise<ListResponse<IVideo>> {
    const url = "/students";
    return axiosClient.get(url, { params });
  },
  updateInteractVideo(videoId: number): Promise<any> {
    const url = `/like/${videoId}`;
    return axiosClient.post(url);
  },
};

export default videoApi;
