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

    const handleDelete = (slug) =>{
      dispatch(deleteMovie(slug));
      navigate("/netflix");
    }
  return (
    <>
        {videoDetail && (
            <div className='videoDetail' style={{color: "white"}}>
                <h2>{videoDetail.name}</h2>
                <img onClick={()=>navigate(`/series/${videoDetail.slug}/series`)} src={videoDetail.poster} />
                <p>Age rating: {videoDetail.age_rating}</p>
                <p>Description: {videoDetail.description}</p>
                <p>Views: {videoDetail.views}</p>
                <p>Genres: {videoDetail.genres}</p>
                <p>Year: {videoDetail.years}</p>
                {checkAdmin() && <button onClick={()=>navigate("/createVideo")}>Add video</button>}
                {checkAdmin() && <button onClick={handleDelete}>Delete Movie</button>}
                {/* <p>Genre: {videoDetail.genres.map((genre)=><span>{genre}</span>)}</p> */}
            </div>
        )}
    </>
  )
}

export default Details;