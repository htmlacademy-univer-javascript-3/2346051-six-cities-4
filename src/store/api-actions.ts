import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../types/state";
import { AxiosInstance } from "axios";
import { loadOffers, setError, setQuestionsDataLoadingStatus } from "./action";
import { Offer } from "../types/offer";
import { APIRoute, TIMEOUT_SHOW_ERROR } from "../const";

import {store} from './';

export const clearErrorAction = createAsyncThunk(
  'CLEAR_ERROR_ACTION',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'FETCH_OFFERS_ACTION',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(setQuestionsDataLoadingStatus(true));
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(setQuestionsDataLoadingStatus(false));
      dispatch(loadOffers(data));
    },
  );