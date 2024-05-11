import { Point, City } from './location';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Point;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type ExtendedOffer = Pick<Offer, 'id' | 'title' | 'type' | 'price' | 'city' | 'location' | 'isFavorite' | 'isPremium' | 'rating'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  maxAdults: number;
  images: string[];
};
