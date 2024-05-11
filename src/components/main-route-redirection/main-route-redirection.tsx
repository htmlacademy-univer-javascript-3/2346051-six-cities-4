import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type MainRouteRedirectionProps = {
  children: JSX.Element;
}

function MainRouteRedirection(props: MainRouteRedirectionProps): JSX.Element {
  const {children} = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.NoAuth ? children : <Navigate to={AppRoute.Main}/>
  );
}
export default MainRouteRedirection;
