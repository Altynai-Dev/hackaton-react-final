import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./VideoItem.scss";
import {checkUserLogin} from "../../helpers/functions";

const VideoItem = ({video}) => {
    const navigate = useNavigate();

  return (
    <div className='videoItem'>
    <img onClick={()=>navigate(`/series/${video.slug}`)} src={video.poster} />
    <h2>{video.name}</h2>
    <p>Количество сезонов: {video.seasons}</p>
    {checkUserLogin()}
    </div>
  )
}

export default VideoItem