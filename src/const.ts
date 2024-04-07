export const Settings = {
  placesCount: 55,
} as const;

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

export enum typeOfCardList {
  favourites = 'favorites__places',
  nearest = 'near-places__list places__list',
  standart = 'cities__places-list places__list tabs__content',
}

export const listToCard = new Map(
  [
    [typeOfCardList.favourites, 'favorites__card place-card'],
    [typeOfCardList.nearest, 'near-places__card place-card'],
    [typeOfCardList.standart, 'cities__card place-card']
  ]
);
