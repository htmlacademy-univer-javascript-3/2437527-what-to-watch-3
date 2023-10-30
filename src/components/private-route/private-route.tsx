import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../routes';
import {ReactElement} from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: ReactElement;
}

function PrivateRoute(props: PrivateRouteProps): ReactElement {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.SignIn} />
  );
}

export default PrivateRoute;
