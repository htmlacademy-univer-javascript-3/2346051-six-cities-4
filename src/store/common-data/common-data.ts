import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, cities } from '../../const';
import { filters } from '../../utils';
import { CommonData } from '../../types/state';
import { Point } from '../../types/location';

const initialState: CommonData = {
  sortType: filters.POPULAR,
  city: cities.Paris,
  highlightedMarker: undefined,
  error: null,
};

export const commmonData = createSlice({
  name: NameSpace.Common,
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeHighlightedMarker: (state, action: PayloadAction<Point | undefined>) => {
      state.highlightedMarker = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { changeSortType, changeCity, changeHighlightedMarker, setError } = commmonData.actions;
