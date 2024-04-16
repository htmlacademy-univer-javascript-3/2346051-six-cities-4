import { Offer } from '../types/offer';
import { CITIES } from './cities';
import { POINTS } from './points';
import { REVIEWS } from './reviews';

export const OFFERS: Offer[] = [
  {
    id: '1',
    image: ['img/apartment-01.jpg'],
    isPremium: true,
    price: 120,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    isFavorite: false,
    rating: 4,
    reviews: [REVIEWS[0], REVIEWS[1]],
    city: CITIES[0],
    point: POINTS[0]
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
    reviews: [REVIEWS[1]],
    city: CITIES[1],
    point: POINTS[1]
  },
  {
    id: '3',
    image: ['img/apartment-02.jpg'],
    isPremium: false,
    price: 132,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    isFavorite: false,
    rating: 4.7,
    reviews: [REVIEWS[2]],
    city: CITIES[0],
    point: POINTS[2]
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
    reviews: [REVIEWS[3]],
    city: CITIES[3],
    point: POINTS[3]
  },
];
