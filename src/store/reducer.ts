import { createReducer } from '@reduxjs/toolkit';
import { ExtendedOffer, Offer } from '../types/offer';
import { changeChosenOffer, changeCity, changeHighlightedMarker, changeNearbyOffers, changeSortOptions, loadOffers, loadReviews, loadUserData, requireAuthorization, setChosenOfferDataLoadingStatus, setError, setOffersDataLoadingStatus } from './action';
import { filters } from '../utils';
import { Point } from '../types/location';
import { AuthorizationStatus, Cities } from '../const';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';


type StateType = {
    city: Cities;
    offers: Offer[];
    sortType: string;
    highlightedMarker?: Point;
    chosenOffer?: ExtendedOffer;
    isOffersDataLoading: boolean;
    error: string | null;
    authorizationStatus: AuthorizationStatus;
    userData?: UserData;
    rewiews: Review[];
    nerbyOffers: Offer[];
    isChosenOfferDataLoading: boolean;
  }

const initialState: StateType = {
  city: Cities.Paris,
  offers: [],
  sortType: filters.POPULAR,
  highlightedMarker: undefined,
  chosenOffer: undefined,
  isOffersDataLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: undefined,
  rewiews: [],
  nerbyOffers: [],
  isChosenOfferDataLoading: false
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
    })
    .addCase(loadReviews, (state, action) => {
      state.rewiews = action.payload;
    })
    .addCase(changeNearbyOffers, (state, action) => {
      state.nerbyOffers = action.payload;
    })
    .addCase(setChosenOfferDataLoadingStatus, (state, action) => {
      state.isChosenOfferDataLoading = action.payload;
    })
});

export {reducer};
