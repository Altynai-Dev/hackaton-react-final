import React from 'react'
import { useNavigate } from 'react-router-dom'

const VideoItem = ({video}) => {
    const navigate = useNavigate();

  return (
    <>
    {/* <h2>{video.name}</h2> */}
    <img onClick={()=>navigate(`/series/${video.slug}`)} src={video.poster} />
    <p>{video.seasons}</p>
    </>
  )
}

export default VideoItem