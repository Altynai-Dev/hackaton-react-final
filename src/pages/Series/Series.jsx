import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { deleteSeries, getVideoSeries } from '../../store/videos/videosActions';
import { checkAdmin } from '../../helpers/functions';
import s from './Series.module.css';
import VideoLike from '../../components/videoLike/VideoLike';

const Series = () => {

    const {oneVideo, loading} = useSelector((state)=>state.videos);
    const [isLikedVideo, setIsLikedVideo] = useState(false);

    const {slug} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getVideoSeries({slug}))
    }, []);

    const checkVideoLike = () =>{
      const data = JSON.parse(localStorage.getItem('likedSeries'));
      const likedVideo = data.find(liked => liked.slug === slug);
      if(likedVideo){
        setIsLikedVideo(true)
      }else{
        setIsLikedVideo(false)
      };
    };

    useEffect(()=>{
      checkVideoLike();
    },[])
  return (
    <>
      {loading ? (<h3>Loading...</h3>
      ) : (
        <div className={s.series}>
          {oneVideo && (
            <div>
            <video src={oneVideo.video} controls/>
            <div><VideoLike oneVideo={oneVideo} isLikedVideo={isLikedVideo} /></div>
            <div style={{paddingLeft:"12px", fontSize:'1.5rem'}}>{oneVideo.likes}</div>
            {checkAdmin() && <button className={s.seriesBtn} onClick={()=>{
              dispatch(deleteSeries(slug))
              navigate('/netflix')}}>Delete</button>}

              {checkAdmin() && (
              <div>
              <button className={s.seriesBtn} onClick={()=>{
              navigate(`/series/edit-series/${oneVideo.slug}`)}}>Edit</button>
              </div>)}
              
            </div>
            
          )}
        </div>
      )}
    </>
  )
}

export default Series