import React, { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handlePrevious = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      setShowLoadingMessage(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data && data.length > 0) {
        setImages(data);

        const id = setTimeout(() => {
          setShowLoadingMessage(false);
          setLoading(false);
        }, 1000);
        setTimeoutId(id);
      } else {
        setErrorMsg("No images found.");
        setLoading(false);
        setShowLoadingMessage(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
      setShowLoadingMessage(false);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  };

  // היוז אפקט הזה רץ בפעם הראשונה שהקומפוננטה נטענת, ובכל פעם שהיואראל משתנה
  useEffect(() => {
    if (url) fetchImages(url); // אם היואראל קיים (יש לו ערך) אז תייבא תמונות ממנו
  }, [url]);

  if (loading && showLoadingMessage) { // אם התמונות בטעינה, וגם אם הוחלט שמציגים הודעת טעינה
    return <div>Loading data! Please wait</div>; // הודעת טעינה
  }

  if (errorMsg) { // אם קיימת שגיאה
    return <div>Error! {errorMsg}</div>; // הודעת שגיאה
  }

  return ( // קרוסלת התמונות
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentImage === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentImage === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentImage(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
