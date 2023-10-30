import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { likeVideo } from '../../store/videos/videosActions';
import { getVideoSeries } from '../../store/videos/videosActions';
import { addLikedSeriesLS } from '../../helpers/functions';

const VideoLike = ({ oneVideo, isLikedVideo }) => {

    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch(likeVideo({ oneVideo }));
        addLikedSeriesLS(oneVideo);
    }
    return (
        <>
            {isLikedVideo ? (
                <div onClick={handleLike}>
                    <FavoriteIcon fontSize="large" color='error' />
                </div>
            ) : (
                <div onClick={handleLike}>
                    <FavoriteIcon fontSize="large" />
                </div>
            )}

        </>
    )
}

export default VideoLike;