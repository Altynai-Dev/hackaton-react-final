import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {getFavorite} from '../../store/favorites/favoritesSlice';
import s from './Favorites.module.css';
import { useNavigate } from 'react-router';
import { deleteFavorite } from '../../store/favorites/favoritesActions';

const Favorites = () => {
  const {favoriteItems} = useSelector((state)=>state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getFavorite())
  }, [])
  return (
    <div className={s.favorites}>
        <Navbar />
        <div className={s.favoriteItems}>
        {favoriteItems && (
          favoriteItems.map((item)=>(
            <div className={s.favItem}>
              <img className={s.favImg} onClick={() => navigate(`/series/${item.slug}`)} src={item.poster} />
              <div className={s.titleContainer}>
                <h2 className={s.favTitle}>{item.name}</h2>
              </div>
              <p className={s.count}>Количество сезонов: {item.seasons}</p>
              <button onClick={()=>{
                deleteFavorite(item)
                dispatch(getFavorite())
              }
                }>Удалить</button>
            </div>
          ))
        )}
        </div>
    </div>
  )
}

export default Favorites