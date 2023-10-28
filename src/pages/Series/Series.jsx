import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getVideoSeries } from '../../store/videos/videosActions';

const Series = () => {
    const {oneVideo} = useSelector((state)=>state.videos);
    const {slug} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideoSeries({slug}))
        console.log(oneVideo)
    }, [])
  return (
    <>
    {oneVideo ? (
        <video src={oneVideo.video} controls width={'100%'}/>
    ):(<h3>No video!</h3>)}
    </>
  )
}

export default Series