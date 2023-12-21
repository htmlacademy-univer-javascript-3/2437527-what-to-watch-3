import {ReactElement} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {AppRoutes} from '../../const/app-routes';
import {Link, useNavigate} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions/api-actions';
import {getAuthorizationStatus, getUser} from '../../store/user/selectors';
import {AuthorizationStatus} from '../../const/authorization-status';

function UserBlock(): ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  if (user !== null && authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar" onClick={() => {
            navigate(AppRoutes.MyList);
          }}
          >
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
          <Link className="user-block__link" to={AppRoutes.SignIn}>Sign in</Link>
        </li>
      </ul>
    );
  }
}

export default UserBlock;
