import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/location';
import { Offer } from '../types/offer';
import { changeChosenOffer, changeCity, changeHighlightedMarker, changeSortOptions, loadOffers, setError, setQuestionsDataLoadingStatus } from './action';
import { filters } from '../utils';
import { Point } from '../types/location';
import { CITIES } from '../const';


type StateType = {
    city: City;
    offers: Offer[];
    sortType: string;
    highlightedMarker?: Point;
    chosenOffer: Offer | undefined;
    isQuestionsDataLoading: boolean;
    error: string | null;
  }

const initialState: StateType = {
  city: CITIES[0],
  offers: [],
  sortType: filters.POPULAR,
  highlightedMarker: undefined,
  chosenOffer: undefined,
  isQuestionsDataLoading: false,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortOptions, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(changeHighlightedMarker, (state, action) => {
      state.highlightedMarker = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeChosenOffer, (state, action) => {
      state.chosenOffer = action.payload;
    })
    .addCase(setQuestionsDataLoadingStatus, (state, action) => {
      state.isQuestionsDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
