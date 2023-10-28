import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Video from "../../components/video/Video";
import "./Netflix.scss";

const Netflix = () => {
  return (
    <div className="netfix">
      <Navbar />
        <div className="videoContainer">
        <Video className="mainVideo" />
        </div>    
    </div>
  );
};

export default Netflix;
