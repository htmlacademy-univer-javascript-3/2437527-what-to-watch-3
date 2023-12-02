import {ReactElement} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../routes';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {getAuthorizationStatus, getUser} from '../../store/user/selectors';

function UserBlock(): ReactElement {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  if (user !== null && authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link" onClick={() => {
            void (async () => {
              await dispatch(logoutAction());
            })();
          }}
          >Sign out
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>
        </li>
      </ul>
    );
  }
}

export default UserBlock;
