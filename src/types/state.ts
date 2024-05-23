import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { Point } from './location';
import { ExtendedOffer, Offer } from './offer';
import { Review } from './review';
import { UserData } from './user-data';

export type OfferData = {
    chosenOffer?: ExtendedOffer;
    reviews: Review[];
    nearbyOffers: Offer[];
    isChosenOfferDataLoading: boolean;
    isCommentPosting: boolean;
    isCommentRejected: boolean;
  };

export type OffersData = {
    offers: Offer[];
    isOffersDataLoading: boolean;
    hasError: boolean;
  };

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    userData?: UserData;
  };

export type CommonData = {
  sortType: string;
  city: string;
  highlightedMarker: Point | undefined;
  error: string | null;
}

export type FavoriteProcess = {
  favoriteOffers: Offer[];
  isFavoriteOffersDataLoading: boolean;
  favoritesNumber: number;
  favoriteOffersId: string[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
