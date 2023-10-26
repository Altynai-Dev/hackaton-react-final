import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './account/accountSlice';
import videosReducer from './videos/videosSlice';

export default configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        account: accountReducer,
        videos: videosReducer
    }
});