import MainScreen from '../../pages/main-screen/main-screen';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { AppRoute } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import LoadingScreen from '../../pages/loading-screen/loading-screen.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';
import MainRouteRedirection from '../main-route-redirection/main-route-redirection.tsx';
import { getAuthorizationStatus } from '../../store/user-process/selectors.ts';
import { getIsOffersDataLoading, getOffers } from '../../store/offers-data/selectors.ts';
import { changeFavoritesNumber } from '../../store/favorite-process/favorite-process.ts';
import { useEffect } from 'react';


function App(): JSX.Element {

  const dispatch = useAppDispatch();
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offers = useAppSelector(getOffers);

  useEffect(() => {
    const favorite = offers.filter((o) => o.isFavorite);
    dispatch(changeFavoritesNumber(favorite.length));
  }, [offers, dispatch]);

  if (isOffersDataLoading || !authorizationStatus) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path="*" element={<NotFoundScreen />} />
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <MainRouteRedirection >
              <LoginScreen />
            </MainRouteRedirection>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen />} />
      </Routes>
    </HistoryRouter>
  );
}
export default App;
