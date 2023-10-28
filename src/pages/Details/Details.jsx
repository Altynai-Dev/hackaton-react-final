import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { deleteMovie, getVideoDetail } from '../../store/videos/videosActions';
import { checkAdmin } from '../../helpers/functions';
import './Detail.scss';

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
                {checkAdmin() && <button onClick={()=>navigate("/createVideo")}>Add video</button>}
                <button onClick={()=>{
                  dispatch(deleteMovie({slug}));
                  navigate("/netflix");
                }}>Delete Movie</button>
                {/* <p>Genre: {videoDetail.genres.map((genre)=><span>{genre}</span>)}</p> */}
            </div>
        )}
    </>
  )
}

export default Details;