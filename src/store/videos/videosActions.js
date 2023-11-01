import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAccessToken, getTotalPages } from "../../helpers/functions";

export const getVideos = createAsyncThunk(
    'videos/getVideos',
    async(_, {getState}) => {
        try{
            const {currentPage, currentGenre, search} = getState().videos;
            const categoryAndSearchParams = `search=${search}${currentGenre && `&genres=${currentGenre}`}`;
            const pagesLimitParams = `?page=${currentPage}&_limit=10`;
            const totalPages = await getTotalPages(`http://34.89.235.149/api/v1/title/?${categoryAndSearchParams}`);
            const {data} = await axios.get(`http://34.89.235.149/api/v1/title/?${categoryAndSearchParams}&${pagesLimitParams}&`);
            return {data, totalPages};
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
            return {data};
        }catch(err){
            console.log(err);
        }
    }
)

export const createVideo = createAsyncThunk(
    'videos/createVideo',
    async (video, { dispatch }) => {
        const formData = new FormData()
        formData.append('number', video.number)
        formData.append('name', video.name)
        formData.append('season', video.season)
        formData.append('title', video.title)
        formData.append('video', video.video)
        await axios.post('http://34.89.235.149/api/v1/title/series/', formData, 
        {headers: {"Authorization": `Bearer ${getAccessToken()}`, "Content-Type": "multipart/form-data"}}
        )
        .catch(err => console.log(err));
        dispatch(getVideos());
    }
);

export const editSeries = createAsyncThunk(
    'videos/editSeries',
    async(video, {dispatch}) => {
        console.log(video)
        const formData = new FormData();
        formData.append('name', video.name)
        formData.append('season', video.season)
        formData.append('title', video.title)
        formData.append('video', video.video)
        const res = await axios.patch(`http://34.89.235.149/api/v1/title/series/${video.slug}/`, formData,
        {headers: {"Authorization": `Bearer ${getAccessToken()}`, "Content-Type": 'multipart/form-data'}})
        .catch(err => console.log(err));
        console.log(res.data)
        dispatch(getVideos());
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
        formData.append('genre', movie.genre);
        await axios.post('http://34.89.235.149/api/v1/title/', movie, 
        {headers: {"Authorization": `Bearer ${getAccessToken()}`, "Content-Type": 'multipart/form-data'}})
        .catch(err => console.log(err));
        dispatch(getVideos());
    }
);

export const deleteMovie = createAsyncThunk(
    'videos/deleteMovie',
    async (slug, {dispatch}) =>{
        await axios.delete(`http://34.89.235.149/api/v1/title/${slug}`, 
        {headers: {"Authorization": `Bearer ${getAccessToken()}`}}
        )
        .catch(err => console.log(err));
        dispatch(getVideos());
    }
);

export const deleteSeries = createAsyncThunk(
    'videos/deleteSeries',
    async(slug, {dispatch})=>{
        await axios.delete(`http://34.89.235.149/api/v1/title/series/${slug}`,
        {headers: {"Authorization": `Bearer ${getAccessToken()}`}}
        ).catch(err => console.log(err));
        dispatch(getVideos());
    }
);


export const getGenres = createAsyncThunk(
    'videos/getGenres',
    async() => {
    const {data} = await axios.get('http://34.89.235.149/api/v1/title/genre/');
    const genres = data.results;
    const genresList = [];
    for(let i=0; i<genres.length; i++){
        genresList.push(genres[i].slug)
    }
    return genresList;
    }
)

export const likeVideo = createAsyncThunk(
    'videos/likeVideo',
    async (oneVideo, { dispatch }) => {
        const slug = oneVideo.slug;
        const res = await axios.post(`http://34.89.235.149/api/v1/title/series/${oneVideo.slug}/like/`, oneVideo,
            { headers: { "Authorization": `Bearer ${getAccessToken()}` } })
            .catch(err => console.log(err));
        dispatch(getVideoSeries({slug}));
    }
);

export const sendCode = createAsyncThunk(
    'videos/sendCode',
    async(email) =>{
        const res = await axios.post(`http://34.89.235.149/api/v1/account/send-code/`, {email: email})
        .catch(err=>{
            console.log(err)
        })
        alert(res.data);
    }
);

export const recoveryPassword = createAsyncThunk(
    'videos/recoveryPassword',
    async({recoveryData}) =>{
        console.log(recoveryData)
        const res = await axios.post(`http://34.89.235.149/api/v1/account/recovery-password/`, recoveryData)
        .catch(err =>{
            console.log(err)
        })
        alert(res.data)
    }
)

