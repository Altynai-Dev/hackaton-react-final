import React from 'react'

const VideoItem = ({video}) => {
  return (
    <>
    <h2>{video.name}</h2>
    <img src={video.poster} />
    <p>{video.seasons}</p>
    </>
  )
}

export default VideoItem