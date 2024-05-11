import { createAction } from '@reduxjs/toolkit';
import { Point } from '../types/location';
import { ExtendedOffer, Offer } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { Review } from '../types/review';

export const changeCity = createAction('CITY_CHANGE', (value: string) => ({
  payload: value
}));

export const changeSortOptions = createAction('CHANGE_SORT_OPTIONS', (value: string) => ({
  payload: value
}));

export const changeHighlightedMarker = createAction('CHANGE_HIGHLIGHTED_MARKER', (value: Point | undefined) => ({
  payload: value
}));

export const loadOffers = createAction('LOAD_OFFERS', (value: Offer[]) => ({
  payload: value
}));

export const changeChosenOffer = createAction('CHANGE_CHOSEN_OFFER', (value: ExtendedOffer) => ({
  payload: value
}));

export const setOffersDataLoadingStatus = createAction('SET_OFFERS_DATA_LOADING_STATUS', (value: boolean) => ({
  payload: value
}));

export const setError = createAction('SET_ERROR', (value: string | null) => ({
  payload: value
}));

export const requireAuthorization = createAction('REQUIRE_AUTHORIZATION', (value: AuthorizationStatus) => ({
  payload: value
}));

export const loadUserData = createAction('LOAD_USER_DATA', (value: UserData) => ({
  payload: value
}));

export const redirectToRoute = createAction('REDIRECT_TO_ROUTE', (value: AppRoute) => ({
  payload: value
}));

export const loadReviews = createAction('CHANGE_REVIEWS', (value: Review[]) => ({
  payload: value
}));

export const changeNearbyOffers = createAction('CHANGE_NEARBY_OFFERS', (value: Offer[]) => ({
  payload: value
}));

export const setChosenOfferDataLoadingStatus = createAction('SET_CHOSEN_OFFER_DATA_LOADING_STATUS', (value: boolean) => ({
  payload: value
}));
