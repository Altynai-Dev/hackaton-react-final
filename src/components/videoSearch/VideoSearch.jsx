import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setSearchVal} from "../../store/videos/videosSlice";
import { getVideos } from "../../store/videos/videosActions";
import s from './VideoSearch.module.css'

const VideoSearch = () => {
  const { search } = useSelector(state => state.videos);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if(!search) {
      setSearchValue('');
    };
  }, [search]);

  return (
    <div className={s.videoSearch}>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        className={s.search}
        placeholder="Искать..."
      />
        <button className={s.searchBtn} onClick={() => {
          dispatch(setSearchVal({ search: searchValue }));
          dispatch(getVideos())}}>Поиск</button>
    </div>
  );
};

export default VideoSearch;