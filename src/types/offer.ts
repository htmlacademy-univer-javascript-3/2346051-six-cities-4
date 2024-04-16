import { Point } from './point';
import { Review } from '../types/review';
import { City } from './city';

export type Offer = {
  id: string;
  image: string[];
  isPremium: boolean;
  price: number;
  title: string;
  type: string;
  isFavorite: boolean;
  rating: number;
  reviews: Review[];
  city: City;
  point: Point;
};
