import { Offer } from '../../types/offer';
import CityCard from '../city-card/city-card';

type OfferListProps = {
  offers: Offer[];
};

function OfferList({offers}: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CityCard key={offer.id} offer={offer}/>
      ))}
    </div>
  );
}
export default OfferList;
