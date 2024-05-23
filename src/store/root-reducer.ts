import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersData } from './offers-data/offers-data';
import { offerData } from './offer-data/offer-data';
import { userProcess } from './user-process/user-process';
import { commmonData } from './common-data/common-data';
import { favoriteProcess } from './favorite-process/favorite-process';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Common]: commmonData.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer,
});
