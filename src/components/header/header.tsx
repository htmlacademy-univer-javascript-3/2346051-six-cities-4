import { Link } from 'react-router-dom';
import LoginNavigation from '../login-navigation/login-navigation';
import { AppRoute } from '../../const';
import { memo } from 'react';

function HeaderComponent(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <LoginNavigation />
        </div>
      </div>
    </header>
  );
}

export const Header = memo(HeaderComponent);

