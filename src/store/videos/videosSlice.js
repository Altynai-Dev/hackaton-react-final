import { createSlice } from "@reduxjs/toolkit";
import { getVideoDetail, getVideoSeasons, getVideoSeries, getVideos } from "./videosActions";

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        loading: false,
        videos: [],
        videoDetail: [],
        seasons : [],
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
        .addCase(getVideoDetail.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getVideoDetail.fulfilled, (state, action)=>{
            state.loading = false;
            state.videoDetail = action.payload.data;
        })
        .addCase(getVideoDetail.rejected, (state)=>{
            state.loading = false;
        })
        .addCase(getVideoSeasons.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getVideoSeasons.fulfilled, (state, action)=>{
            state.seasons = action.payload.data;
            state.loading = false;
        })
        .addCase(getVideoSeasons.rejected, (state)=>{
            state.loading = false;
        })
        .addCase(getVideoSeries.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getVideoSeries.fulfilled, (state, action)=>{
            state.loading = false;
            state.oneVideo = action.payload.data;
        })
        .addCase(getVideoSeries.rejected, (state)=>{
            state.loading = false;
        })
    }
});

export const {clearOneVideoState} = videosSlice.actions;
export default videosSlice.reducer;