import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleQrGenerator = () => {
    setQrCode(input);
  };

  return (
    <div>
      <h1> QR code generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true} // מתי הכפתור יהיה לחיץ
          onClick={handleQrGenerator}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgcolor="black" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
