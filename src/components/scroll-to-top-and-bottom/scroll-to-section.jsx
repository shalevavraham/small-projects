import React, { useRef } from "react";

const ScroolToSection = () => {
  const firstSectionScrollRef = useRef();
  const secondSectionScrollRef = useRef();

  const data = [
    {
      label: "First section",
      style: {
        with: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Second section",
      style: {
        with: "100%",
        height: "600px",
        background: "pink",
      },
    },
    {
      label: "Terth section",
      style: {
        with: "100%",
        height: "600px",
        background: "gray",
      },
    },
    {
      label: "Forth section",
      style: {
        with: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Fifth section",
      style: {
        with: "100%",
        height: "600px",
        background: "blue",
      },
    },
  ];

  const handleScrollToFirstSection = () => {
    window.scrollTo({
      top: firstSectionScrollRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleScrollToSecondtSection = () => {
    window.scrollTo({
      top: secondSectionScrollRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <h1>Scroll to section</h1>
      <button onClick={handleScrollToFirstSection}>
        Click to scroll to First page
      </button>
      <button onClick={handleScrollToSecondtSection}>
        Click to scroll to second page
      </button>

      {data.map((dataItem, index) => (
        <div
          key={index}
          ref={
            index === 0
              ? firstSectionScrollRef
              : index === 1
              ? secondSectionScrollRef
              : null
          }
          style={dataItem.style}
        >
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScroolToSection;
