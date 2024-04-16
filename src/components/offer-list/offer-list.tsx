import { listToCard, typeOfCardList } from '../../const';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offer[];
  listType: typeOfCardList;
};

function OfferList({offers, listType}: OfferListProps): JSX.Element {
  const type = listToCard.get(listType);
  return (
    <div className={(listType)}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} cardType={(type !== undefined) ? type : 'cities__card place-card'}/>
      ))}
    </div>
  );
}
export default OfferList;
