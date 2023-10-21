import {Link} from 'react-router-dom';
import {AppRoutes} from '../../routes';
import {CSSProperties, ReactElement} from 'react';

function NotFoundPage(): ReactElement {
  const style : CSSProperties = {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  };
  return (
    <div style={style}>
      <p>404. Страница не найдена</p>
      <Link to={AppRoutes.Main}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;
