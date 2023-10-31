import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './account/accountSlice';
import videosReducer from './videos/videosSlice';
import commentsReducer from './comments/commentsSlice';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        account: accountReducer,
        videos: videosReducer,
        comments: commentsReducer
    }
});