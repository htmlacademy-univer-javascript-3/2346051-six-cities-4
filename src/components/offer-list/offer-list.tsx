import { getSortedOffers, listToCard, typeOfCardList } from '../../const';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offer[];
  listType: typeOfCardList;
};

function OfferList({offers, listType}: OfferListProps): JSX.Element {
  const chosenSortType = useAppSelector((state) => state.sortType);
  const type = listToCard.get(listType);
  return (
    <div className={(listType)}>
      {getSortedOffers(offers, chosenSortType)?.map((offer) => (
        <OfferCard key={offer.id} offer={offer} cardType={(type !== undefined) ? type : 'cities__card place-card'}/>
      ))}
    </div>
  );
}
export default OfferList;
