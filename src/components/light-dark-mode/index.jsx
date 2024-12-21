import React from "react";
import UseLocalStorage from "./use-Local-Storage";
import "./theme.css";

const LightDarkMode = () => {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  const handleToogleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Hello World !</h1>
        <button onClick={handleToogleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
