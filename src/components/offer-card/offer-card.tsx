import { useAppDispatch } from '../../hooks';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { listToCard, ratingPercentage, TypeOfCardList } from '../../utils';
import { fetchNearbyAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { changeHighlightedMarker } from '../../store/common-data/common-data';
import ChangeFavoriteButton from '../change-favorite-button/change-favorite-button';

type OfferProps = {
  offer: Offer;
  cardType: string;
}

function OfferCard({ offer, cardType }: OfferProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <article
      className={cardType}
      {...(cardType === listToCard.get(TypeOfCardList.standart) && {
        onMouseEnter: () => dispatch(changeHighlightedMarker(offer.location)),
        onMouseLeave: () => dispatch(changeHighlightedMarker(undefined))
      })}
    >
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`${cardType === listToCard.get(TypeOfCardList.favourites) ? 'favorites' : 'cities'}__image-wrapper place-card__image-wrapper`}>
        <a>
          <img className="place-card__image" src={offer.previewImage} width={cardType === listToCard.get(TypeOfCardList.favourites) ? '150' : '260'} height={cardType === listToCard.get(TypeOfCardList.favourites) ? '110' : '200'} alt="Place image" />
        </a>
      </div>
      <div className={(cardType === listToCard.get(TypeOfCardList.favourites)) ? 'favorites__card-info place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ChangeFavoriteButton
            offerId={offer.id}
            typeButton='place-card'
            width='18'
            height='19'
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingPercentage(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}
            onClick={() => {
              dispatch(fetchOfferAction(offer.id));
              dispatch(fetchReviewsAction(offer.id));
              dispatch(fetchNearbyAction(offer.id));
            }}
          >
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export default OfferCard;
