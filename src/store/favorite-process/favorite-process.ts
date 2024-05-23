import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteProcess } from '../../types/state';
import { fetchFavoriteAction } from '../api-actions';


const initialState: FavoriteProcess = {
  favoriteOffers: [],
  isFavoriteOffersDataLoading: false,
  favoritesNumber: 0,
  favoriteOffersId: []
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    changeFavoritesId: (state, action: PayloadAction<string[]>) => {
      state.favoriteOffersId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.isFavoriteOffersDataLoading = false;
        state.favoriteOffers = action.payload;
        state.favoriteOffersId = action.payload.map((o) => o.id);
      })
      .addCase(fetchFavoriteAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(fetchFavoriteAction.rejected, (state) => {
        state.isFavoriteOffersDataLoading = false;
      });
  }
}
);

export const { changeFavoritesId } = favoriteProcess.actions;
