import {Link} from 'react-router-dom';
import {AppRoutes} from '../../const/app-routes';
import {ReactElement} from 'react';
import {NotFoundPageStyle} from './not-found-page-style';

function NotFoundPage(): ReactElement {
  return (
    <div style={NotFoundPageStyle}>
      <p>404. Страница не найдена</p>
      <Link to={AppRoutes.Main}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;
