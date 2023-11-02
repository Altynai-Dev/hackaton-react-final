import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./VideoItem.scss";
import {checkUserLogin} from "../../helpers/functions";
import StarIcon from '@mui/icons-material/Star';
import { getFavoriteData } from '../../store/favorites/favoritesActions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const VideoItem = ({video}) => {
  
  const [isFavoriteMovie, setFavoriteMovie] = useState(false);
  const navigate = useNavigate();

  const checkVideoFavorite =()=>{
    try{
      const data = getFavoriteData();
      data.forEach(item =>{
        if(item.slug === video.slug){
          setFavoriteMovie(true);
        }else{
          setFavoriteMovie(false);
        }
      })
    }catch(err){
      setFavoriteMovie(false);
    }
  }

  useEffect(()=>{
    checkVideoFavorite();
  },[isFavoriteMovie]);

  const handleFavorite = (video) => {
    let favoriteVideos = getFavoriteData();
    let videoExists = false;

    favoriteVideos.forEach((item, index) => {
        if (item.slug === video.slug) {
            // Если видео уже существует в избранных, убираем его
            favoriteVideos.splice(index, 1);
            videoExists = true;
        }
    });

    if (!videoExists) {
        // Если видео не было найдено в избранных, добавляем его
        favoriteVideos.push(video);
    }

    // Сохраняем обновленный массив favoriteVideos
    localStorage.setItem('favorites', JSON.stringify(favoriteVideos));
    checkVideoFavorite();
}


  // const handleFavorite = (video) =>{
  //   let favoriteVideos = getFavoriteData();
  //   if(favoriteVideos.length ===0){
  //     favoriteVideos.push(video)
  //   }else{
  //   favoriteVideos.forEach(item => {
  //     if(item.slug !== video.slug){
  //       favoriteVideos.push(video)
  //     }else{
  //       favoriteVideos = favoriteVideos.filter(favSlug =>favSlug.slug !== video.slug );
  //     }
  //   })
  // }
    // if(!favoriteVideos.includes(video)){
    //   favoriteVideos.push(video)
    // }else{
    //   favoriteVideos.forEach(item =>{
    //     console.log(item)
    //   })
    // }
    // favoriteVideos.forEach(item => {
    //   console.log(item)
      // if(item.slug !== video.slug){
      //   favoriteVideos.push(video);
      // }else{
      //   favoriteVideos = favoriteVideos.filter(favSlug =>favSlug.slug !== video.slug );
      // }
    //})
    // if(!favoriteVideos.includes(video.slug) || favoriteVideos===null){
    //     favoriteVideos.push(video);
    // }else{
    //     favoriteVideos = favoriteVideos.filter(favSlug =>favSlug.slug !== video.slug );
    // }  
//     localStorage.setItem('favorites', JSON.stringify(favoriteVideos));
//     checkVideoFavorite();
// }

  return (
    <div className='videoItem'>
    <img onClick={()=>navigate(`/series/${video.slug}`)} src={video.poster} />
      <div className='titleContainer'>
        <h2>{video.name}</h2>
        <ShoppingCartIcon onClick={()=>navigate('/payment')} />
        
        {isFavoriteMovie ? (
          <StarIcon style={{ color: "purple" }}
          onClick={()=>handleFavorite(video)} />
        ) : (
          <StarIcon onClick={()=>handleFavorite(video)} />
        )}
        
      </div>
    <p className='count'>Количество сезонов: {video.seasons}</p>
    {checkUserLogin()}
    </div>
  )
}

export default VideoItem