import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../routes';
import {ReactElement} from 'react';

type PrivateRouteProps = {
  children: ReactElement;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({children, authorizationStatus}: PrivateRouteProps): ReactElement {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
