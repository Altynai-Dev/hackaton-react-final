import { createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosActions";

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        loading: false,
        videos: [],
        oneVideo: null
    },
    reducers: {
        clearOneVideoState: (state) =>{
            state.oneVideo = null;
        },

    },
    extraReducers: (builder) =>{
        builder
        .addCase(getVideos.pending, (state) => {
            state.loading = true;
        })
        .addCase(getVideos.fulfilled, (state, action)=>{
            state.loading = false;
            state.videos = action.payload.data.results;

        })
        .addCase(getVideos.rejected, (state) => {
            state.loading = false;
        })
        
    }
});

export const {clearOneVideoState} = videosSlice.actions;
export default videosSlice.reducer;