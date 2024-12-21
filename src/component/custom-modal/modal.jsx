import React from "react";
import "./style.css";


const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div className="modal" id={id || "modal"}>
      <div className="modal-content"></div>
      <div className="header">
        <span  onClick={onClose}className="close-modal-icon">&times;</span>
        {header ? header : <h2>Header</h2>}
      </div>
      <div className="body">
        {body ? (
          body
        ) : (
          <div>
            <p>This is Modal body</p>
          </div>
        )}
      </div>
      <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
    </div>
  );
};

export default Modal;
