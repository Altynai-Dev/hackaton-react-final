// import React from 'react';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useDispatch } from 'react-redux'; 
// import { toggleProductLike } from '../../store/products/productsActions';

// const VideoLike = ({ isLikedVideo, likes, videoSlug }) => {

//   const dispatch = useDispatch();

//   return (
//     <>
//       {isLikedVideo ? (
//         <div onClick={() => dispatch(toggleProductLike({ setIsLike: false, likes, productId }))}>
//           <FavoriteIcon fontSize="large" color="error" />
//         </div>
//       ) : (
//         <div onClick={() => dispatch(toggleProductLike({ setIsLike: true, likes, productId }))}>
//           <FavoriteIcon fontSize="large" />
//         </div>
//       )}
//     </>
//   )
// }

// export default VideoLike;