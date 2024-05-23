import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/selectors';
import { getFavoriteOffersId } from '../../store/favorite-process/selectors';

function LoginNavigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleSignOut = () => {
    dispatch(logoutAction());
  };

  const favoriteNumber = useAppSelector(getFavoriteOffersId);

  return (
    <nav className="header__nav">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile" >
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{userData?.email}</span>
              <span className="header__favorite-count">{favoriteNumber.length}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to={AppRoute.Login} className="header__nav-link" onClick={handleSignOut}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile" >
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default LoginNavigation;
