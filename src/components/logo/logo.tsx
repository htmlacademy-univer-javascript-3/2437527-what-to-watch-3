import {Link} from 'react-router-dom';
import {AppRoutes} from '../../routes';
import {ReactElement} from 'react';

type LogoProps = {
  className?: string;
}

function Logo({className = 'logo__link'} : LogoProps): ReactElement {
  return (
    <div className="logo">
      <Link className={className} to={AppRoutes.Main}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
