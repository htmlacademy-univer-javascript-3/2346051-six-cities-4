import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';

export const getOffers = createAction('OFFERS_GET');

export const changeCity = createAction('CITY_CHANGE', (value: City) => ({
  payload: value
}));
