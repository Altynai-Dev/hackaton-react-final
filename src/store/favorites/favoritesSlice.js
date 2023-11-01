import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteData } from "../../helpers/functions";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoriteItems: [],
        loading: false
    }, 
    reducers:{
        getFavorite: (state) =>{
            state.favoriteItems = getFavoriteData();

        }
    }
});

export default favoritesSlice.reducer;