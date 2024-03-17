import { Review } from '../types/review';

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
};
