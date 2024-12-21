import React, { useEffect, useState } from "react";
import "./style.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0)
        // האם יש לפחות פרודקט אחד
        setData(data.products);
      setLoading(false);
    } catch (e) {
      // console.log(e);
      setErrorMessage(e.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => { // שומרת את אחוז גלילה לאותו רגע
    // console.log(
    //   'document.body.scrollTop', document.body.scrollTop,
    //   'document.documentElement.scrollTop', document.documentElement.scrollTop,
    //   'document.documentElement.scrollHeight', document.documentElement.scrollHeight,
    //   'document.documentElement.clientHeight', document.documentElement.clientHeight
    // );

    const howMuchScroll = // באיזה גובה הסקרול כרגע
      document.body.scrollTop || document.documentElement.scrollTop;

    const height = // כמה גובה יש באופן כללי
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScroll / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  // console.log(data, scrollPercentage);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
