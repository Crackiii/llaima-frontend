import React from "react";
import { Modal, Button } from "react-bootstrap";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="my-modal"
      size="sm"
    >
      <div style={{ height: "80vh", margin: "auto" }}>
        <img src={props.data} alt="card" style={{ height: "100%" }} />
      </div>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
