import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { redirectToRoute } from './action';
import { ExtendedOffer, Offer } from '../types/offer';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { Review } from '../types/review';
import { setError } from './common-data/common-data';
import { FavoriteData } from '../types/favorite-data';
import { changeFavoritesId } from './favorite-process/favorite-process';


export const clearErrorAction = createAsyncThunk(
  'CLEAR_ERROR_ACTION',
  (_, { dispatch }) => {
    setTimeout(() => {
      dispatch(setError(null));
    }, TIMEOUT_SHOW_ERROR);
  }
);

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FETCH_OFFERS_ACTION',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'CHECK_AUTH_ACTION',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'LOGOUT_ACTION',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(changeFavoritesId([]));
  },
);

export const fetchOfferAction = createAsyncThunk<ExtendedOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FETCH_OFFER_ACTION',
  async (id, { extra: api }) => {
    const { data } = await api.get<ExtendedOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FETCH_REVIEWS_ACTION',
  async (id, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const fetchNearbyAction = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FETCH_NEARBY_ACTION',
  async (id, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<Review[], {
  id: string;
  comment: string;
  rating: number;
},
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'POST_REVIEW_ACTION',
    async ({ id, comment, rating }, { extra: api }) => {
      await api.post(`${APIRoute.Comments}/${id}`, { comment, rating });
      const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      return data;
    },
  );

export const fetchFavoriteAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FETCH_FAVORITE_ACTION',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'LOGIN_ACTION',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(fetchFavoriteAction());
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const postFavoriteAction = createAsyncThunk<void, FavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'CHANGE_FAVORITE_ACTION',
  async ({ id, status }, { extra: api }) => {
    await api.post<Offer>(`${APIRoute.Favorite}/${id}/${status}`);
  },
);
