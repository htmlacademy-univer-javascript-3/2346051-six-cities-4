export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export const URL_MARKER_STANDART =
  '/img/pin.svg';

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Nearby = '/nearby',
  Favorite = '/favorite'
}

export const cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};

export const TIMEOUT_SHOW_ERROR = 2000;

export enum NameSpace {
  Offer = 'OFFER',
  Offers = 'OFFERS',
  User = 'USER',
  Common = 'COMMON',
  Favorite = 'FAVORITE'
}
