import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVideos } from '../../store/videos/videosActions';
import s from './MovieList.module.css';
import VideoItem from '../videoItem/VideoItem';
import PaginationControlled from '../MoviesPagination/MoviesPagination';
import { useNavigate } from 'react-router-dom';
import { checkAdmin } from '../../helpers/functions';

const MovieList = () => {

  const { videos, loading } = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  return (
    <>
    {loading ? (
      <h3>Loading...</h3>
    ):(
      <div className={s.movieList}>
      <div className={s.movieItems}>
        {videos.map((video) => (
          <VideoItem video={video} key={video.slug} />
        ))}
      </div>
      <div className={s.paginationContainer}>
      <PaginationControlled />
      </div>
      {checkAdmin() && <button className={s.addMovie} onClick={() => navigate("/createMovie")}>Add Movie</button>} 
      </div>
    )}
    </>
  )
}

export default MovieList