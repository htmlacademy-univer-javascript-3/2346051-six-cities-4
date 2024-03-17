import { Offer } from '../types/offer';
import { reviews } from './reviews';

export const offers: Offer[] = [
  {
    id: '1',
    image: ['img/apartment-01.jpg'],
    isPremium: true,
    price: 120,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    isFavorite: false,
    rating: 4,
    reviews: [reviews[0]]
  },
  {
    id: '2',
    image: ['img/room.jpg'],
    isPremium: false,
    price: 80,
    title: 'Wood and stone place',
    type: 'Room',
    isFavorite: true,
    rating: 4,
    reviews: [reviews[1]]
  },
  {
    id: '3',
    image: ['img/apartment-02.jpg'],
    isPremium: false,
    price: 132,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    isFavorite: false,
    rating: 4,
    reviews: [reviews[2]]
  },
  {
    id: '4',
    image: ['img/apartment-03.jpg'],
    isPremium: true,
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isFavorite: true,
    rating: 5,
    reviews: [reviews[3]]
  },
];
