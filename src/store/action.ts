import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/location';
import { Point } from '../types/location';
import { Offer } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction('CITY_CHANGE', (value: City) => ({
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

export const changeChosenOffer = createAction('CHANGE_CHOSEN_OFFER', (value:Offer) => ({
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
