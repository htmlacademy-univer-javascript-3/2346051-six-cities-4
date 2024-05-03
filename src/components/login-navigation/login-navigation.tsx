import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';

function HeaderNavigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const userData = useAppSelector((state) => state.userData);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <nav className="header__nav">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" >
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <Link to={AppRoute.Favorites}>
              <span className="header__user-name user__name">{userData?.email}</span>
                <span className="header__favorite-count">{favoriteOffers.length}</span>
              </Link>
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" onClick={() => dispatch(logoutAction())}>
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        </ul>
      ) : (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" >
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <Link to={AppRoute.Login}>
                <span className="header__login">Sign in</span>
              </Link>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default HeaderNavigation;
