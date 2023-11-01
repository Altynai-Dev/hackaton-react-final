import React from "react";
import Video from "../../components/video/Video";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      
      <div className="netflix">
        <div className="videoContainer">
          <Video />
        </div>
      </div>
    </div>
  );
};

export default Home;
