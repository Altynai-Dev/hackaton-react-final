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