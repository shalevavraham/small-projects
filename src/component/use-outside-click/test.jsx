import React, { useRef, useState } from "react";
import UseOutsideClick from "./index"

const UseOutsideClickTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef()
  UseOutsideClick(ref, () => setShowContent(false))

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a remdom content</h1>
          <p>
            Please click outside to close the content. It wont close if you
            click inside the content
          </p>
        </div>
      ) : (
        <button onClick={() => (setShowContent(true))}>Show Content</button>
      )}
    </div>
  );
};

export default UseOutsideClickTest;
