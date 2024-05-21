import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type MainRouteRedirectionProps = {
  children: JSX.Element;
}

function MainRouteRedirection(props: MainRouteRedirectionProps): JSX.Element {
  const {children} = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.NoAuth ? children : <Navigate to={AppRoute.Main}/>
  );
}
export default MainRouteRedirection;
