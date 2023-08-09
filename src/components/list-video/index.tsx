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
  shareVideo,
} from "../../stores/videos/slice";
import CardVideo from "../card-video";
import Pagination from "../pagination";
import style from "./style.module.scss";
import ModalShareVideo from "../modal-share-video";
import io from "socket.io-client";

export default function ListVideo() {
  const { openNotification, contextHolder } = useNotification();
  const dispatch = useDispatch();
  const {
    statusInteracVideo,
    statusShareVideo,
    videosList,
    filter,
    pagination,
  } = useSelector((state: RootState) => state.video);
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

  useEffect(() => {
    if (statusShareVideo === EActionStatus.Succeeded) {
      openNotification({
        message: "Shared video success fully!",
        placement: "bottomRight",
        type: "success",
      });
    }
  }, [openNotification, statusShareVideo]);

  useEffect(() => {
    console.log('socket')
    const socket = io("http://localhost:5000"); // Replace with your server URL

    socket.on("videoShared", (notification: any) => {
      console.log("notification", notification);
    });
    console.log('end socket')
    return () => {
      socket.disconnect();
    };
  }, []);

  const handlePageChange = (page: number) => {
    console.log("list video page:", page);
    dispatch(setFilter({ ...filter, _page: page }));
  };

  const handleReactVideo = (videoId: number) => {
    dispatch(interactVideo({ videoId: videoId }));
  };

  const handleSharedVideo = (videoId: number) => {
    dispatch(shareVideo({ videoId: videoId }));
  };

  return (
    <div>
      {contextHolder}
      <ModalShareVideo />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {videosList &&
          videosList.map((e) => (
            <Fragment key={e.id}>
              <Col className={style.colStyle} xs={24} sm={12} md={8} lg={6}>
                <CardVideo
                  id={e.id}
                  title={e.title}
                  likeCount={e.likeCount}
                  reactVideo={e.reactVideo}
                  onChangeReact={handleReactVideo}
                  onChangeShared={handleSharedVideo}
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
