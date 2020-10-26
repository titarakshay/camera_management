import React from "react";
import Dropzone from "react-dropzone-uploader";

import Modal from "react-modal";
export default function Upload() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("body");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Upload
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <button
          className="btn btn-light btn-sm"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
        <div className="mt-3">
          <Dropzone accept="image/*" />
        </div>
      </Modal>
    </div>
  );
}
