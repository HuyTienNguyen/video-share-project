import { FieldTimeOutlined, HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { format } from "date-fns";

const { Meta } = Card;
export interface CardVideoProps {
  id: number;
  title: string;
  urlVideo: string;
  timeShared: string;
}

export default function CardVideoShared({
  id,
  title,
  urlVideo,
  timeShared,
}: CardVideoProps) {
  return (
    <Card
      cover={
        <iframe
          width="100%"
          height="315"
          src={urlVideo}
          allowFullScreen
        ></iframe>
      }
    >
      <Meta
        title={title}
        description={
          <div
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: "10px",
            }}
          >
            <FieldTimeOutlined style={{ fontSize: "20px" }} />
            {format(new Date(timeShared), "dd MMM yyyy HH:MM:SS")}
          </div>
        }
      />
    </Card>
  );
}
