import { FormEvent, useRef } from 'react';
import { AppRoute, cities } from '../../const';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { redirectToRoute } from '../../store/action';
import { changeCity } from '../../store/common-data/common-data';

function getRandomCity() {
  const cityKeys = Object.keys(cities) as (keyof typeof cities)[];
  const randomIndex = Math.floor(Math.random() * cityKeys.length);
  return cities[cityKeys[randomIndex]];
}

function LoginScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          email: emailRef.current.value,
          password: passwordRef.current.value
        })
      );
    }
  };

  const city = getRandomCity();

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Main} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header >

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={emailRef} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef} />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" onClick={() => {
                dispatch(redirectToRoute(AppRoute.Main));
                dispatch(changeCity(city));
              }}
              >
                <span>{city}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div >
  );
}
export default LoginScreen;
