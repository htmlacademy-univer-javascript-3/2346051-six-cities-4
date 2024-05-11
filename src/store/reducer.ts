import { createReducer } from '@reduxjs/toolkit';
import { ExtendedOffer, Offer } from '../types/offer';
import { changeChosenOffer, changeCity, changeHighlightedMarker, changeNearbyOffers, changeSortOptions, loadOffers, loadReviews, loadUserData, requireAuthorization, setChosenOfferDataLoadingStatus, setError, setOffersDataLoadingStatus } from './action';
import { filters } from '../utils';
import { Point } from '../types/location';
import { AuthorizationStatus, cities } from '../const';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';


type StateType = {
    city: string;
    offers: Offer[];
    sortType: string;
    highlightedMarker?: Point;
    chosenOffer?: ExtendedOffer;
    isOffersDataLoading: boolean;
    error: string | null;
    authorizationStatus: AuthorizationStatus;
    userData?: UserData;
    reviews: Review[];
    nearbyOffers: Offer[];
    isChosenOfferDataLoading: boolean;
  }

const initialState: StateType = {
  city: cities.Paris,
  offers: [],
  sortType: filters.POPULAR,
  highlightedMarker: undefined,
  chosenOffer: undefined,
  isOffersDataLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: undefined,
  reviews: [],
  nearbyOffers: [],
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
      state.reviews = action.payload;
    })
    .addCase(changeNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setChosenOfferDataLoadingStatus, (state, action) => {
      state.isChosenOfferDataLoading = action.payload;
    });
});

export {reducer};
