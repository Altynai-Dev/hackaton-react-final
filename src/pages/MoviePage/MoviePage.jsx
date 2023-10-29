import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../store/videos/videosActions";
import VideoItem from "../../components/videoItem/VideoItem";
import { checkAdmin } from "../../helpers/functions";
import './MoviePage.scss';
import VideoSearch from "../../components/videoSearch/VideoSearch";

const MoviePage = () => {
  const navigate = useNavigate();

  const { videos, loading } = useSelector((state) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideos());
  }, []);
  return (
    <div className="videos">
      <Navbar />
      <div className="videoSearch">
        <VideoSearch />
      </div>
      <div className="videoItems">
        {videos.map((video) => (
          <VideoItem video={video} key={video.slug} />
        ))}
      </div>
      {checkAdmin() && <button onClick={() => navigate("/createMovie")}>Add Movie</button>}
    </div>
  )
}

export default MoviePage