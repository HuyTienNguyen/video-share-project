import { Col, Pagination, Row } from "antd";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { getAllVideosRequest, setFilter } from "../../stores/videos/slice";
import CardVideoShared from "../card-video-shared";
import style from "./style.module.scss";

export default function ListVideoShared() {
  const dispatch = useDispatch();
  const { videosList, filter, pagination } = useSelector(
    (state: RootState) => state.video
  );
  useEffect(() => {
    console.log("check");
    dispatch(getAllVideosRequest(filter));
    // eslint-disable-next-line
  }, [dispatch, filter]);

  const handlePageChange = (page: number) => {
    dispatch(setFilter({ ...filter, _page: page }));
  };

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {videosList &&
          videosList.map((e) => (
            <Fragment key={e.id}>
              <Col className={style.colStyle} xs={24} sm={12} md={8} lg={6}>
                <CardVideoShared
                  id={e.id}
                  title={e.title}
                  timeShared={e.createdAt}
                />
              </Col>
            </Fragment>
          ))}
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          pageSize={pagination._limit}
          total={pagination._totalRows}
          current={pagination._page}
          onChange={handlePageChange}
        />
      </Row>
    </div>
  );
}
