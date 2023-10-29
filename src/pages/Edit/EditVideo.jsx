import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editSeries, getGenres, getVideoSeries } from '../../store/videos/videosActions';
import { useNavigate, useParams } from 'react-router-dom';
import { clearOneVideoState } from '../../store/videos/videosSlice';

const EditVideo = () => {
    const {oneVideo, loading, genres} = useSelector((state)=>state.videos);
    const [video, setVideo] = useState(oneVideo);
    const {slug} = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
      dispatch(getVideoSeries({slug}))
      dispatch(getGenres());
      return () => dispatch(clearOneVideoState());
    },[])

    useEffect(()=>{
      if(oneVideo){
        setVideo(oneVideo)
      }
    },[oneVideo]);

  return(
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ):(
        <>
        {video && (
          <div className='createCard'>
          <h3>Edit Video</h3>
          <input
            type="number"
            placeholder="Номер серии"
            onChange={(e) => setVideo({ ...video, number: parseInt(e.target.value) })}
            value={video.number}
          />
    
          <input
            type="text"
            placeholder="Название"
            onChange={(e) =>
              setVideo({ ...video, name: e.target.value })
            }
            value={video.name}
          />
          <input
            type="text"
            placeholder="Сезон"
            onChange={(e) =>
              setVideo({ ...video, season: e.target.value })
            }
            value={video.season}
          />
          <input
            type="text"
            placeholder="Title"
            onChange={(e) =>
              setVideo({ ...video, title: e.target.value })
            }
            value={video.title}
          />
          <input
            type="file"
            placeholder="Video"
            accept=""
            onChange={(e) =>
              setVideo({ ...video, video: e.target.files[0] })
            }
          />
    
            <select onChange={(e) => setVideo({ ...video, genre: e.target.value })} value={video.genre}>
              <option disabled>Choose genre</option>
              {genres.map(genre => (
                <option style={{color:"black"}} key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          <button onClick={()=>{
            dispatch(editSeries(video));
            navigate('/');
          }}
          >
            Edit
          </button>
        </div>
        )}
        </>
      )}
    </div>
  )
    
  
}

export default EditVideo;