import React, { useRef } from "react";
import UseFetch from "../use-fetch";

const ScrollToTopAndToBottom = () => {
  const { data, error, pending } = UseFetch(
    `https://dummyjson.com/products?limit=100`,
    {}
  );

  const bottomRef = useRef(null);

  const handleBotton = () => {
    bottomRef.current.scrollIntoView({behavior: "smooth"})
  }

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (error) {
    return <h1>Error! Please try again</h1>;
  }

  if (pending) {
    return <h1>Laoding! Please wait</h1>;
  }

  return (
    <div>
      <h1>Scroll to top and bottom Featuer</h1>
      <h3>This is the top page</h3>
      <button onClick={handleBotton}>Scroll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleTop}>Scrool to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom page</h3>
    </div>
  );
};

export default ScrollToTopAndToBottom;
