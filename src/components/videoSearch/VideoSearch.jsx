import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setSearchVal} from "../../store/videos/videosSlice";
import { getVideos } from "../../store/videos/videosActions";
import './VideoSearch.scss'

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
    <div className="videoSearch">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        id="Search"
        className="search"
        placeholder="Search for..."
      />
        <button className="searchBtn" onClick={() => {
          dispatch(setSearchVal({ search: searchValue }));
          dispatch(getVideos())}}>Search</button>
    </div>
  );
};

export default VideoSearch;