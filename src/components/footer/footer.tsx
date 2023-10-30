import Logo from '../logo/logo';
import {ReactElement} from 'react';

function Footer(): ReactElement {
  return (
    <footer className="page-footer">
      <Logo isLight/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
