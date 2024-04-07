import { listToCard, typeOfCardList } from '../../const';
import { Offer } from '../../types/offer';
import CityCard from '../city-card/city-card';

type OfferListProps = {
  offers: Offer[];
  listType: typeOfCardList;
};

function OfferList({offers, listType}: OfferListProps): JSX.Element {
  const type = listToCard.get(listType);
  return (
    <div className={(listType)}>
      {offers.map((offer) => (
        <CityCard key={offer.id} offer={offer} cardType={(type !== undefined) ? type : 'cities__card place-card'}/>
      ))}
    </div>
  );
}
export default OfferList;
