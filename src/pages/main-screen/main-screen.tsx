import OfferList from '../../components/offer-list/offer-list';
import { Link } from 'react-router-dom';
import Map from '../../components/map/map';
import { typeOfCardList } from '../../utils';
import { useAppSelector } from '../../hooks';
import CityList from '../../components/city-list/city-list';
import CardsSortingOptions from '../../components/cards-sorting-options/cards-sorting-options';

function MainScreen(): JSX.Element {
  const [city, offers] = useAppSelector((state) => [state.city, state.offers]);
  const chosenOffers = offers.filter((offer) => offer.city === city);
  const points = chosenOffers.map((offer) => offer.point);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <Link to="/favorites">
                      <span className="header__favorite-count">{favoriteOffers.length}</span>
                    </Link>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList chosenCity={city}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{chosenOffers.length} places to stay in {city.title}</b>
              <CardsSortingOptions/>
              <OfferList offers={chosenOffers} listType={typeOfCardList.standart}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={points}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainScreen;
