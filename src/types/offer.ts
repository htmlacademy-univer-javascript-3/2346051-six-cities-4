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
