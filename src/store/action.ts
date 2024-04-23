import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Point } from '../types/point';

export const getOffers = createAction('OFFERS_GET');

export const changeCity = createAction('CITY_CHANGE', (value: City) => ({
  payload: value
}));

export const changeSortOptions = createAction('CHANGE_SORT_OPTIONS', (value: string) => ({
  payload: value
}));

export const changeHighlightedMarker = createAction('CHANGE_HIGHLIGHTED_MARKER', (value: Point | undefined) => ({
  payload: value
}));
