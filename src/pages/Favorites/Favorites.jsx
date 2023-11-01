import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteData } from '../../store/favorites/favoritesActions';

const Favorites = () => {
  const {favoriteItems} = useSelector((state)=>state.favorites);
  console.log(favoriteItems)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getFavoriteData())
  }, [])
  return (
    <div>
        <Navbar />
    </div>
  )
}

export default Favorites