import { Offer } from '../../types/offer';
import CityCard from '../city-card/city-card';

type OfferListProps = {
  offers: Offer[];
  isStandartCardType: boolean
};

function OfferList({offers, isStandartCardType}: OfferListProps): JSX.Element {
  return (
    <div className={(isStandartCardType) ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}>
      {offers.map((offer) => (
        <CityCard key={offer.id} offer={offer} isStandartCardType={isStandartCardType}/>
      ))}
    </div>
  );
}
export default OfferList;
