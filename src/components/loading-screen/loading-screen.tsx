import {ReactElement} from 'react';
import '../../../public/css/loader.css';

function LoadingScreen(): ReactElement {
  return (
    <div className="loader">
      <div className="loader-inner"/>
    </div>
  );
}

export default LoadingScreen;
