import { Button, Modal } from "antd";
import * as React from "react";

export default function ModalShareVideo() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Share video
      </Button>
      <Modal
        title="Share video"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
      >
        <p>Title: aa</p>
        <p>Url: http</p>
        <p>Do you want to share videos?</p>
      </Modal>
    </>
  );
}
