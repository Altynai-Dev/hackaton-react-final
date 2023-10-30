import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { deleteMovie, getVideoDetail } from '../../store/videos/videosActions';
import { checkAdmin } from '../../helpers/functions';
import styles from './Details.module.css';

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
      navigate("/movies");
    }
  return (
    <div className={styles.details}>
        {videoDetail && (
            <div className={styles.videoDetail} style={{color: "white"}}>
                <div className={styles.title}>
                <h2 className={styles.name}>{videoDetail.name}</h2>
                <img className={styles.videoImage} onClick={()=>navigate(`/series/${videoDetail.slug}/series`)} src={videoDetail.poster} />
                </div>
                <div className={styles.info}>
                <p><span className={styles.styleText}>Описание</span>:{videoDetail.description}</p>
                <p><span className={styles.styleText}>Количество просмотров</span>: {videoDetail.views}</p>
                {videoDetail.genres && (<p><span className={styles.styleText}>Жанр</span>: {videoDetail.genres.map((genre, index) => (
                  <span key={index}>{genre}, </span>
                ))}</p>)}
                <p><span className={styles.styleText}>Год выпуска</span>: {videoDetail.years}</p>
                </div>
                {checkAdmin() && <button className={styles.detailsBtn} onClick={()=>navigate("/createVideo")}>Добавить серию</button>}
             {checkAdmin() && <button className={styles.detailsBtn} onClick={()=>{
              
              dispatch(deleteMovie(videoDetail.slug));
              navigate("/movies");
             }}>Удалить фильм</button>}
            </div>
             
        )}
       
    </div>
  )
}

export default Details;