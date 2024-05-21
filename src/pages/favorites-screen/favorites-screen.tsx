import { Link } from 'react-router-dom';
import { typeOfCardList } from '../../utils';
import OfferList from '../../components/offer-list/offer-list';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import { Header } from '../../components/header/header';
import { getOffers } from '../../store/offers-data/selectors';


function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(getOffers).filter((offer) => offer.isFavorite);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <OfferList offers={favoriteOffers} listType={typeOfCardList.favourites} />
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Main} className="header__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
export default FavoritesScreen;
