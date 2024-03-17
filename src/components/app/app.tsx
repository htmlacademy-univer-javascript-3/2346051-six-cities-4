import MainScreen from '../../pages/main-screen/main-screen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { Offer } from '../../types/offer';

type AppScreenProps = {
  placesCount: number;
  offers: Offer[];
}

function App({placesCount, offers}: AppScreenProps): JSX.Element {
  const favourites: Offer[] = offers.filter((o) => o.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundScreen/>} />
        <Route path={AppRoute.Main} element={<MainScreen placesCount={placesCount} offers={offers}/>} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
              <FavoritesScreen offers={favourites}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginScreen/>} />
        <Route path={AppRoute.Offer} element={<OfferScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
