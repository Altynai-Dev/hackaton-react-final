import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setSearchVal} from "../../store/videos/videosSlice";
import { getVideos } from "../../store/videos/videosActions";

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
    <div>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        id="Search"
        placeholder="Search for..."
      />
        <button onClick={() => {
          dispatch(setSearchVal({ search: searchValue }));
          dispatch(getVideos())}}>Search</button>
    </div>
  );
};

export default VideoSearch;