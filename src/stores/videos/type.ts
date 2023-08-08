import { ListParams, PaginationParams } from "../common";
import { EActionStatus } from "../type";

export interface IVideo {
  id: number;
  name: string;
  title: string;
  url: string;
  likeCount: number;
  reactVideo: boolean | null;
  createdAt: string;
}

export interface IGetAllDataQuery {
  page: number;
  limit: number;
}

export interface IVideosState {
  status: EActionStatus;
  statusInteracVideo: EActionStatus;
  videosList: IVideo[];
  filter: ListParams;
  pagination: PaginationParams;
}
