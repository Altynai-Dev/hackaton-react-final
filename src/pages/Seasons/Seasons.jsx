import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getVideoSeasons } from '../../store/videos/videosActions';
import styles from './Seasons.module.css';

const Seasons = () => {

  const {seasons, loading} = useSelector((state)=> state.videos);

    const {slug} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getVideoSeasons({slug}))
    }, [seasons])
  return (
    <div className={styles.seasons}>
      {Object.entries(seasons).map(([key, value])=>(
        <div className={styles.container} key={key}>
          <h1 className={styles.title}>{key}</h1>
        {value.map((series, index) => (
          <span key={index} onClick={()=>navigate(`/series/watch/${series.slug}`)}>{series.number} </span>
        ))}
      </div>
      ))}
    </div>
  )
}

export default Seasons