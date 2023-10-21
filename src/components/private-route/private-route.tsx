import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../routes';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.SignIn} />
  );
}

export default PrivateRoute;
