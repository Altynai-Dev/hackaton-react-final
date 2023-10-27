import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
