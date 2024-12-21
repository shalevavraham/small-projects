import React, { useEffect, useState } from "react";
import "./style.css";

const RendomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const RendomColorUitility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRendomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[RendomColorUitility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const handleCreateRendomRgbColor = () => {
    const r = RendomColorUitility(256);
    const g = RendomColorUitility(256);
    const b = RendomColorUitility(256);

    setColor(`rgb${r}, ${g}, ${b}`);
  };

  const convertRgbToHex = () => {
    // פונקציות נתונות
    if (typeOfColor === "hex") {
      // אם הצבע כבר מסוג הקס, אז תצא בלי לעשות כלום
      return;
    }

    const [r, g, b] = color.match(/\d+/g).map(Number);
    const toHex = (num) => num.toString(16).padStart(2, "0");
    const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    setColor(hexColor.toUpperCase());
    setTypeOfColor("hex");
  };

  const convertHexToRgb = () => {
    // פונקציות נתונות
    if (typeOfColor === "rgb") {
      // אם הצבע כבר מסוג ארגיבי, אז תצא בלי לעשות כלום
      return;
    }

    const hex = color.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    const rgbColor = `rgb${r}, ${g}, ${b}`;
    setColor(rgbColor);
    setTypeOfColor("rgb");
  };

  useEffect(() => { // כשהקומפוננטה מתרנדרת בפעם הראשונה, תבחר צבע רנדומלי
    if (typeOfColor === "rgb") handleCreateRendomRgbColor();
    else handleCreateRendomHexColor();
  }, []); // מערך תלויות

  return (
    <div
      className="bodyStyle"
      style={{
        width: "100vm",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={convertRgbToHex}>
        Convert to HEX color
      </button>
      <button onClick={convertHexToRgb}>
        Convert to RGB color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRendomHexColor
            : handleCreateRendomRgbColor
        }
      >
        Generate Rendom Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RendomColor;
