import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";

const Video = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

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

  const videoContainerStyle = {
    position: "relative",
    paddingTop: "56.25%", // 16:9 aspect ratio
    width: "100%", // 100% ширины окна браузера
  };

  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="video-container" style={videoContainerStyle}>
      <ReactPlayer
        url={getVideoUrl(currentSlide)}
        playing={true}
        muted={true}
        loop={true}
        style={videoStyle}
        width="100%"
        height="100%"
        preload="auto" // Добавьте этот атрибут
      />
    </div>
  );
};

export default Video;
