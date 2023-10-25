import React, { useState, useEffect, useRef } from "react";
import "./Video.module.css";
import video1 from "./video/video1.mp4";
import video2 from "./video/video2.mp4";
import video3 from "./video/video3.mp4";
import video4 from "./video/video4.mp4";

const Video = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides ? 1 : prevSlide + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getVideoUrl = (slideNumber) => {
    switch (slideNumber) {
      case 1:
        return video1;
      case 2:
        return video2;
      case 3:
        return video3;
      case 4:
        return video4;
      default:
        return "";
    }
  };

  useEffect(() => {
    // При изменении currentSlide обновляем видео
    videoRef.current.load();
  }, [currentSlide]);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        autoPlay
        controls={false}
        loop
        muted
        width="100%"
        height="auto"
      >
        <source src={getVideoUrl(currentSlide)} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
