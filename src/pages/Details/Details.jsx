import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getVideoDetail } from '../../store/videos/videosActions';
const Details = () => {

    const {videoDetail} = useSelector((state) => state.videos);

    const {slug} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(()=>{
       dispatch(getVideoDetail({slug})) 
    },[])
  return (
    <>
        {videoDetail && (
            <div onClick={()=>navigate(`/series/${videoDetail.slug}/series`)} className='videoDetail' style={{color: "white"}}>
                <h3>{videoDetail.name}</h3>
                <img src={videoDetail.poster} />
                <p>Age rating: {videoDetail.age_rating}</p>
                <p>Description: {videoDetail.description}</p>
                {/* <p>Genre: {videoDetail.genres.map((genre)=><span>{genre}</span>)}</p> */}
            </div>
        )}
    </>
  )
}

export default Details;