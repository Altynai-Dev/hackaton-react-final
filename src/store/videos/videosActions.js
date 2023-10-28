import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAccessToken } from "../../helpers/functions";

export const getVideos = createAsyncThunk(
    'videos/getVideos',
    async() => {
        try{
            const {data} = await axios.get("http://34.89.235.149/api/v1/title/");
            return {data};
        }catch(err){
            console.log(err)
        }
        
    }
)

export const getVideoDetail = createAsyncThunk(
    'videos/getVideoDetail',
    async({slug})=>{
        try{
            const {data} = await axios.get(`http://34.89.235.149/api/v1/title/${slug}`);
            return {data};
        }catch(err){
            console.log(err);
        }
    }
)

export const getVideoSeasons = createAsyncThunk(
    'videos/getVideoSeasons',
    async({slug})=>{
        try{
            const {data} = await axios.get(`http://34.89.235.149/api/v1/title/${slug}/series`);
            return {data};
        }catch(err){
            console.log(err);
        }
    }
)

export const getVideoSeries = createAsyncThunk(
    'videos/getVideoSeries',
    async({slug})=>{
        try{
            const {data} = await axios.get(`http://34.89.235.149/api/v1/title/series/${slug}`);
            console.log(data)
            return {data};
        }catch(err){
            console.log(err);
        }
    }
)

export const createVideo = createAsyncThunk(
    'videos/createVideo',
    async (video, { dispatch }) => {
        // console.log(video)
        const formData = new FormData()
        formData.append('number', video.number)
        formData.append('name', video.name)
        formData.append('season', video.season)
        formData.append('title', video.title)
        formData.append('video', video.video)
        const res = await axios.post('http://34.89.235.149/api/v1/title/series/', formData, 
        {headers: {"Authorization": `Bearer ${getAccessToken()}`, "Content-Type": "multipart/form-data"}}
        )
        .catch(err => console.log(err));
        //dispatch(getVideoSeasons());
    }
);


export const createMovie = createAsyncThunk(
    'videos/createMovie',
    async(movie, {dispatch})=>{
        const formData = new FormData();
        formData.append('name', movie.name);
        formData.append('age_rating', movie.age_rating);
        formData.append('description', movie.description);
        formData.append('poster', movie.poster);
        const res = await axios.post('http://34.89.235.149/api/v1/title/', movie, 
        {headers: {"Authorization": `Bearer ${getAccessToken()}`, "Content-Type": 'multipart/form-data'}})
        .catch(err => console.log(err));
        dispatch(getVideos());
    }
);

export const deleteMovie = createAsyncThunk(
    'videos/deleteMovie',
    async ({slug}, {dispatch}) =>{
        await axios.delete(`http://34.89.235.149/api/v1/title/${slug}`, 
        {headers: {"Authorization": `Bearer ${getAccessToken()}`}}
        )
        .catch(err => console.log(err));
        dispatch(getVideos());
    }
);