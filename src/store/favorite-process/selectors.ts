import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getFavoritesNumber = (state: State): number => state[NameSpace.Favorite].favoritesNumber;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Favorite].favoriteOffers;
export const getIsFavoriteOffersDataLoading = (state: State): boolean => state[NameSpace.Favorite].isFavoriteOffersDataLoading;
export const getFavoriteOffersId = (state: State): string[] => state[NameSpace.Favorite].favoriteOffersId;
