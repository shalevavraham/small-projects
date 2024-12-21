import React, { useState } from "react";
import Modal from "./modal";
import "./style.css";

const ModalTest = () => {
  const [ShowModalPopup, setShowModalPopup] = useState(false);

  const handleToggelModalPopup = () => {
    setShowModalPopup(!ShowModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };
  return (
    <div>
      <button onClick={handleToggelModalPopup}>Open Modal Popup</button>
      {ShowModalPopup && (
        <Modal
        id={'custom id'}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customize body</div>}
        />
      )}
    </div>
  );
};

export default ModalTest;
