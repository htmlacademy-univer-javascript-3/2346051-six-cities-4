import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import { ratingPercentage, typeOfCardList } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { fetchNearbyAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MAXIMUM_NEARBY_PREVIEW = 3;

function OfferScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.chosenOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const city = useAppSelector((state) => state.offers[0].city);

  const displayedNearby = (nearbyOffers).slice(
    0,
    MAXIMUM_NEARBY_PREVIEW
  );

  const id = String(useParams().id);
  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchReviewsAction(id));
    dispatch(fetchNearbyAction(id));
  }, [dispatch, id]);

  const isSelectedOfferDataLoading = useAppSelector((state) => state.isChosenOfferDataLoading);
  if (isSelectedOfferDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer?.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer?.isPremium ? (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              ) : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer?.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: offer && offer.rating ? ratingPercentage(offer.rating) : undefined }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer?.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${offer?.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${offer?.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer?.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${offer?.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={offer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer?.host.name}
                  </span>
                  {offer?.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer?.description}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={reviews} />
            </div>
          </div>
          <section className="offer__map map">
            <Map points={displayedNearby.map((nearOffer) => nearOffer.location)} city={nearbyOffers.length > 0 ? nearbyOffers[0].city : city} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList offers={displayedNearby} listType={typeOfCardList.nearest} />
          </section>
        </div>
      </main>
    </div>
  );
}
export default OfferScreen;
