import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getFavoritesNumber = (state: State): number => state[NameSpace.Favorite].favoritesNumber;