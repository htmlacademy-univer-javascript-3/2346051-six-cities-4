import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { fetchOffersAction, logoutAction } from '../api-actions';
import { Offer } from '../../types/offer';

const initialState: OffersData = {
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    updateOffers: (state, action: PayloadAction<Offer>) => {
      state.offers = state.offers.map((offer) => (offer.id === action.payload.id ? action.payload : offer));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  }
});
export const { updateOffers } = offersData.actions;