import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./VideoItem.scss";

const VideoItem = ({video}) => {
    const navigate = useNavigate();

  return (
    <div className='videoItem'>
    {/* <h2>{video.name}</h2> */}
    <img onClick={()=>navigate(`/series/${video.slug}`)} src={video.poster} />
    <p>{video.seasons}</p>
    </div>
  )
}

export default VideoItem