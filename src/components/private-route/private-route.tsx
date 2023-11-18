import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../routes';
import {ReactElement} from 'react';

type PrivateRouteProps = {
  children: ReactElement;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({children, authorizationStatus}: PrivateRouteProps): ReactElement {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.SignIn} />
  );
}

export default PrivateRoute;
