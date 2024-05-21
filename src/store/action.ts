import { createAction } from '@reduxjs/toolkit';
import { AppRoute} from '../const';

export const redirectToRoute = createAction('REDIRECT_TO_ROUTE', (value: AppRoute) => ({
  payload: value
}));
