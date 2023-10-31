import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { likeVideo } from '../../store/videos/videosActions';
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { getLikedVideos } from '../../helpers/functions';

const VideoLike = ({ oneVideo}) => {
    const [isLikedVideo, setIsLikedVideo] = useState(false);

    const dispatch = useDispatch();
    const checkVideoLike = () => {
      try {
        let data = getLikedVideos();
        if (data.includes(oneVideo.slug)) {
          setIsLikedVideo(true);
        } else {
          setIsLikedVideo(false);
        }
      } catch (error) {
        console.error("Ошибка при доступе к localStorage: " + error);
        setIsLikedVideo(false); 
      }
    };

    useEffect(()=>{
      checkVideoLike();
    },[isLikedVideo])
    const handleLike = (slug) =>{  
        let likedVideos = getLikedVideos();
        if(!likedVideos.includes(slug) || likedVideos===null){
            likedVideos.push(slug);
        }else{
            likedVideos = likedVideos.filter(likedSlug =>likedSlug !== slug );
        }  
        localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
        checkVideoLike()
        dispatch(likeVideo(oneVideo))
    }
    return (
        <div>
            {isLikedVideo ? (
                <FavoriteOutlinedIcon onClick = {()=>handleLike(oneVideo.slug)}
                style={{ color: "red" }}
                />
            ) : (
                <FavoriteBorderOutlinedIcon onClick={()=>handleLike(oneVideo.slug)} />
            )}
        </div>
    )
}

export default VideoLike;