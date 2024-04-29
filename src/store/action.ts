import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/location';
import { Point } from '../types/location';
import { Offer } from '../types/offer';

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

export const setQuestionsDataLoadingStatus = createAction('SET_QUESTIONS_DATA_LOADING_STATUS', (value: boolean) => ({
  payload: value
}));

export const setError = createAction('SET_ERROR', (value: string | null) => ({
  payload: value
}));
