import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import { TypeOfCardList } from '../../utils';
import { useAppSelector } from '../../hooks';
import CityList from '../../components/city-list/city-list';
import { Header } from '../../components/header/header';
import { CardsSortingOptions } from '../../components/cards-sorting-options/cards-sorting-options';
import { getErrorStatus, getOffers } from '../../store/offers-data/selectors';
import { getCity } from '../../store/common-data/selectors';
import EmptyOffers from '../empty-offers/empty-offers';

function MainScreen(): JSX.Element {
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const hasError = useAppSelector(getErrorStatus);
  const chosenOffers = offers.filter((offer) => offer.city.name === city);
  const points = chosenOffers.map((offer) => offer.location);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${hasError ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        {hasError ? (
          <EmptyOffers city={city} />
        ) : (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{chosenOffers.length} places to stay in {city}</b>
                <CardsSortingOptions />
                <OfferList offers={chosenOffers} listType={TypeOfCardList.standart} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map points={points} city={chosenOffers[0].city} />
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
export default MainScreen;
