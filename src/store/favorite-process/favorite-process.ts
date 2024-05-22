import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteProcess } from '../../types/state';
import { fetchFavoriteAction } from '../api-actions';


const initialState: FavoriteProcess = {
    favoriteOffers: [],
    isFavoriteOffersDataLoading: false,
    favoritesNumber: 0
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    changeFavoritesNumber: (state, action: PayloadAction<number>) => {
      state.favoritesNumber = action.payload;
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteOffersDataLoading = false;
    })
    .addCase(fetchFavoriteAction.pending, (state) => {
      state.isFavoriteOffersDataLoading = true;
    })
    .addCase(fetchFavoriteAction.rejected, (state) => {
      state.isFavoriteOffersDataLoading = false;
    })
  }
}
);

export const { changeFavoritesNumber } = favoriteProcess.actions;
