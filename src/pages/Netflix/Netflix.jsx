import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import Navbar from "../../components/navbar/Navbar";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../store/videos/videosActions";
import VideoItem from "../../components/videoItem/VideoItem";
import "./Netflix.scss";

const Netflix = () => {
  const navigate = useNavigate();

  const {videos, loading} = useSelector((state)=>state.videos);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getVideos());
  },[]);
console.log(videos)
  return (
    <div className="netfix">
      <Navbar />
        <div className="videoContainer">
        <Video className="mainVideo" />
        </div>
        <div className="videos">
            <div className="videoItems">
              {videos.map((video)=>(
                <VideoItem video={video} key={video.id} />
              ))}
            </div>
        </div>
    </div>
  );
};

export default Netflix;
