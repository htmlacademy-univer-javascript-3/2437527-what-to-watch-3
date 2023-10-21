import Logo from '../logo/logo';
import {ReactElement} from 'react';

function Footer(): ReactElement {
  return (
    <footer className="page-footer">
      <Logo className = {'logo__link logo__link--light'}/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
