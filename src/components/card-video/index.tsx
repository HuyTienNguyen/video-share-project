import {
  DislikeOutlined,
  EditOutlined,
  HeartOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import style from "./style.module.scss";

const { Meta } = Card;
export interface CardVideoProps {
  id: number;
  title: string;
  likeCount: number;
  reactVideo: boolean | null;
  onChangeReact: (idVideo: number) => void;
}

export default function CardVideo({
  id,
  title,
  likeCount,
  reactVideo,
  onChangeReact,
}: CardVideoProps) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [isInteract, setIsInteract] = useState<boolean | null>(reactVideo);
  const [reactCount, setReactCount] = useState<number>(likeCount);

  const handleReactVideo = (reactVideo: boolean | null) => {
    if (reactVideo == null) {
      setIsInteract(true);
      setReactCount(reactCount + 1);
    } else {
      if (reactVideo) {
        setIsInteract(false);
        setReactCount(reactCount - 1);
      } else {
        setIsInteract(null);
      }
    }
    onChangeReact(id);
  };

  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={
        isAuthenticated
          ? [
              isInteract || isInteract === null ? (
                <LikeOutlined
                  className={clsx(
                    { [style.color_button_like]: isInteract },
                    { [style.hover_button_interact]: isInteract !== true }
                  )}
                  onClick={() => handleReactVideo(isInteract)}
                />
              ) : (
                <DislikeOutlined
                  className={clsx({
                    // [style.hover_button_interact]: isInteract !== true
                  })}
                  onClick={() => handleReactVideo(isInteract)}
                />
              ),
              <EditOutlined key="edit" />,
            ]
          : []
      }
    >
      <Meta
        title={title}
        description={
          <div style={{ fontWeight: "bold" }}>
            <HeartOutlined style={{ color: "red" }} /> {reactCount}
          </div>
        }
      />
    </Card>
  );
}
