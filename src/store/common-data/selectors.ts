import { NameSpace } from '../../const';
import { Point } from '../../types/location';
import { State } from '../../types/state';

export const getSortType = (state: State): string => state[NameSpace.Common].sortType;
export const getCity = (state: State): string => state[NameSpace.Common].city;
export const getHighlightedMarker = (state: State): Point | undefined => state[NameSpace.Common].highlightedMarker;
export const getError = (state: State): string | null => state[NameSpace.Common].error;
