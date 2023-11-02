import { createSlice } from "@reduxjs/toolkit";
import { getFavoriteData } from "./favoritesActions";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoriteItems: null,
        loading: false
    }, 
    reducers:{
        getFavorite: (state) =>{
            state.favoriteItems = getFavoriteData();
        }
    }
});
export const {getFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;