import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAccessToken } from "../../helpers/functions";
import { getVideoSeries } from "../videos/videosActions";

export const createComment = createAsyncThunk(
    'comments/createComment',
    async(commentObj, {dispatch})=>{
        const slug = commentObj.series;
        await axios.post("http://34.89.235.149/api/v1/feedback/comment/", commentObj, 
        { headers: { "Authorization": `Bearer ${getAccessToken()}` }}
        ).catch(err => console.log(err))
        dispatch(getVideoSeries({slug}))
    }
)
export const deleteComment = createAsyncThunk(
    'comments/deleteComment',
    async (commentId , { dispatch, getState }) => {
        const { oneVideo } = getState().videos;
        const slug = oneVideo.slug;
        await axios.delete(`http://34.89.235.149/api/v1/feedback/comment/${commentId}/`,
        { headers: { "Authorization": `Bearer ${getAccessToken()}` }}
        ).catch(err => console.log(err));
        dispatch(getVideoSeries({slug}))
    }
);