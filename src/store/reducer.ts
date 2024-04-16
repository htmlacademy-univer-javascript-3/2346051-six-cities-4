import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../mocks/cities';
import { OFFERS } from '../mocks/offers';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { changeCity, getOffers } from './action';

type StateType = {
    city: City;
    offers: Offer[];
  }

const initialState: StateType = {
  city: CITIES[0],
  offers: OFFERS
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state) => {
      state.offers = OFFERS;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};
