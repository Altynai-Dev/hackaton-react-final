import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, getVideos } from '../../store/videos/videosActions';
import { changeGenre } from '../../store/videos/videosSlice';
import s from './MoviesFilter.module.css';

const MoviesFilter = () => {
    const {genres, currentGenre} = useSelector(state => state.videos);
    const [genre, setGenre] = useState('все');
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGenres());
    },[]);

    useEffect(()=>{
        dispatch(changeGenre({genre}));
        dispatch(getVideos());
    },[genre]);

    useEffect(()=>{
        if(!currentGenre){
            setGenre('все')
        };
    }, [currentGenre])
  return (
    <div className={s.moviesGenre}>
        <select
        onChange={(e)=>setGenre(e.target.value)}
        value={genre}
        className={s.moviesSelect}
        >
            <option value='все'>все</option>
            {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
            ))}
        </select>
    </div>
  )
}

export default MoviesFilter