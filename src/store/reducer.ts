import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/location';
import { Offer } from '../types/offer';
import { changeChosenOffer, changeCity, changeHighlightedMarker, changeSortOptions, loadOffers, loadUserData, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { filters } from '../utils';
import { Point } from '../types/location';
import { AuthorizationStatus, CITIES } from '../const';
import { UserData } from '../types/user-data';


type StateType = {
    city: City;
    offers: Offer[];
    sortType: string;
    highlightedMarker?: Point;
    chosenOffer?: Offer;
    isOffersDataLoading: boolean;
    error: string | null;
    authorizationStatus: AuthorizationStatus;
    userData?: UserData;
  }

const initialState: StateType = {
  city: CITIES[0],
  offers: [],
  sortType: filters.POPULAR,
  highlightedMarker: undefined,
  chosenOffer: undefined,
  isOffersDataLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: undefined
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
