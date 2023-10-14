import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {CSSProperties} from 'react';

function NotFoundPage(): JSX.Element {
  const style : CSSProperties = {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  };
  return (
    <div style={style}>
      <p>404. Страница не найдена</p>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;
