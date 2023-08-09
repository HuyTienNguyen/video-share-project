export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListResponse<T> {
  content: {
    data: T[];
    pagination: PaginationParams;
  };
  success: boolean;
}

export interface ListParams {
  _page?: number;
  _limit?: number;

  [key: string]: any;
}
