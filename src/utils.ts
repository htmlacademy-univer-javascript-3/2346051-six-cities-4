import { Offer } from './types/offer';

export enum TypeOfCardList {
    favourites = 'favorites__places',
    nearest = 'near-places__list places__list',
    standart = 'cities__places-list places__list tabs__content',
  }

export const listToCard = new Map(
  [
    [TypeOfCardList.favourites, 'favorites__card place-card'],
    [TypeOfCardList.nearest, 'near-places__card place-card'],
    [TypeOfCardList.standart, 'cities__card place-card']
  ]
);

export const filters = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first'
};

const sortFunctions = {
  [filters.LOW_TO_HIGH]: (offers: Offer[]) => offers.sort((offerA, offerB) => offerA.price - offerB.price),
  [filters.HIGH_TO_LOW]: (offers: Offer[]) => offers.sort((offerA, offerB) => offerB.price - offerA.price),
  [filters.TOP_RATED]: (offers: Offer[]) => offers.sort((offerA, offerB) => offerB.rating - offerA.rating)
};

export const getSortedOffers = (
  offers: Offer[],
  sortType: string
) => {
  const offersCopy = offers.slice();
  if (sortFunctions[sortType]) {
    return sortFunctions[sortType](offersCopy);
  } else if (sortType === filters.POPULAR) {
    return offers;
  }
};

export const ratingPercentage = (rating: number) => `${(rating / 5) * 100}%`;

export const extractYearMonth = (initDate: string): string => {
  const date = new Date(initDate);
  const year = date.getUTCFullYear().toString();
  const monthNumber = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthName = months[Number(monthNumber) - 1];
  return [monthName, year].join(' ');
};
