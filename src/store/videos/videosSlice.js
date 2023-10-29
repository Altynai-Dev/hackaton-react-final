import { createSlice } from "@reduxjs/toolkit";
import { getGenres, getVideoDetail, getVideoSeasons, getVideoSeries, getVideos } from "./videosActions";

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        loading: false,
        videos: [],
        videoDetail: [],
        seasons : [],
        oneVideo: null,
        search: '',
        currentPage: 1,
        genres:[],
        totalPages: 1,
        currentGenre: '',
        sortByRating:''
    },
    reducers: {
        clearOneVideoState: (state) =>{
            state.oneVideo = null;
        },
        changePage: (state, action)=>{
            state.currentPage = action.payload.page;
        },
        changeGenre: (state, action) =>{
            if(action.payload.genre === "all"){
                state.currentGenre = ''
            }else{
                state.currentGenre = action.payload.genre;
            };
            state.currentGenre = 1
        },
        setSearchVal: (state, action) => {
            state.search = action.payload.search;
            state.currentPage = 1;
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getVideos.pending, (state) => {
            state.loading = true;
        })
        .addCase(getVideos.fulfilled, (state, action)=>{
            state.loading = false;
            state.videos = action.payload.data.results;
            state.totalPages = action.payload.totalPages;
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
        .addCase(getGenres.fulfilled, (state, action)=>{
            state.genres = action.payload;
        })

    }
});

export const {clearOneVideoState, changePage, changeGenre, setSearchVal} = videosSlice.actions;
export default videosSlice.reducer;