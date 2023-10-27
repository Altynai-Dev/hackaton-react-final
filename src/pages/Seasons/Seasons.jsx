import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getVideoSeasons } from '../../store/videos/videosActions';

const Seasons = () => {

  const {seasons, loading} = useSelector((state)=> state.videos);

    const {slug} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(slug)

    useEffect(()=>{
        dispatch(getVideoSeasons({slug}))
    }, [seasons])
  return (
    <>
      {Object.entries(seasons).map(([key, value])=>(
        <div key={key}>
          <h1>{key}</h1>
        {value.map((series, index) => (
          <span onClick={()=>navigate(`/series/watch/${series.slug}`)}>{series.number}</span>
        ))}
      </div>
      ))}
    </>
  )
}

export default Seasons