import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { deleteSeries, getVideoSeries } from '../../store/videos/videosActions';
import { checkAdmin } from '../../helpers/functions';

const Series = () => {
    const {oneVideo, loading} = useSelector((state)=>state.videos);
    //const [isLikedVideo, setIsLikedVideo] = useState(false);

    const {slug} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(getVideoSeries({slug}))
    }, [])
    console.log(oneVideo)
  return (
    <>
      {loading ? (<h3>Loading...</h3>
      ) : (
        <>
          {oneVideo && (
            <>
            <video src={oneVideo.video} controls width={'100%'} />
            {checkAdmin() && <button onClick={()=>{
              dispatch(deleteSeries(slug))
              navigate('/netflix')}}>Delete</button>}

              {checkAdmin() && (
              <div>
              <button onClick={()=>{
              navigate(`/series/edit-series/${oneVideo.slug}`)}}>Edit</button>
              </div>)}
            </>
          )}
        </>
      )}
    </>
  )
}

export default Series