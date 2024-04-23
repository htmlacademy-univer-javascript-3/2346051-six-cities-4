import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../mocks/cities';
import { OFFERS } from '../mocks/offers';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { changeCity, changeHighlightedMarker, changeSortOptions, getOffers } from './action';
import { filters } from '../utils';
import { Point } from '../types/point';


type StateType = {
    city: City;
    offers: Offer[];
    sortType: string;
    highlightedMarker?: Point;
  }

const initialState: StateType = {
  city: CITIES[0],
  offers: OFFERS,
  sortType: filters.POPULAR,
  highlightedMarker: undefined
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffers, (state) => {
      state.offers = OFFERS;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortOptions, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(changeHighlightedMarker, (state, action) => {
      state.highlightedMarker = action.payload;
    });
});

export {reducer};
