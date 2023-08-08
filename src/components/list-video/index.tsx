import { Col, Row } from "antd";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNotification } from "../../hooks/use-notification";
import { RootState } from "../../stores";
import { EActionStatus } from "../../stores/type";
import {
  getAllVideosRequest,
  interactVideo,
  setFilter,
} from "../../stores/videos/slice";
import CardVideo from "../card-video";
import Pagination from "../pagination";
import style from "./style.module.scss";

export default function ListVideo() {
  const { openNotification, contextHolder } = useNotification();
  const dispatch = useDispatch();
  const { statusInteracVideo, videosList, filter, pagination } = useSelector(
    (state: RootState) => state.video
  );
  useEffect(() => {
    console.log("check");
    dispatch(getAllVideosRequest(filter));
    // eslint-disable-next-line
  }, [dispatch, filter]);

  useEffect(() => {
    if (statusInteracVideo === EActionStatus.Failed) {
      openNotification({
        message: "Interact video failed!",
        placement: "bottomRight",
        type: "error",
      });
    }
  }, [openNotification, statusInteracVideo]);

  const handlePageChange = (page: number) => {
    dispatch(setFilter({ ...filter, _page: page }));
  };

  const handleReactVideo = (videoId: number) => {
    dispatch(interactVideo({ videoId: videoId }));
  };

  return (
    <div>
      {contextHolder}
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {videosList &&
          videosList.map((e) => (
            <Fragment key={e.id}>
              <Col className={style.colStyle} xs={24} sm={12} md={8} lg={6}>
                <CardVideo
                  id={e.id}
                  title={e.name}
                  likeCount={e.likeCount}
                  reactVideo={e.reactVideo}
                  onChangeReact={handleReactVideo}
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
          onPageChange={handlePageChange}
        />
      </Row>
    </div>
  );
}
