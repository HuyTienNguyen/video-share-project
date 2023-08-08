import { FieldTimeOutlined, HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { format } from "date-fns";

const { Meta } = Card;
export interface CardVideoProps {
  id: number;
  title: string;
  timeShared: string;
}

export default function CardVideoShared({
  id,
  title,
  timeShared,
}: CardVideoProps) {
  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
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
              columnGap: "10px",
            }}
          >
            <FieldTimeOutlined style={{ fontSize: "20px" }} />
            {format(new Date(timeShared), "dd MMM yyyy")}
          </div>
        }
      />
    </Card>
  );
}
