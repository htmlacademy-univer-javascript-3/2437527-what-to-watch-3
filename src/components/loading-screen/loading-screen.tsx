import {ReactElement} from 'react';
import './loading-screen.css';

function LoadingScreen(): ReactElement {
  return (
    <div className="loader">
      <div className="loader-inner"/>
    </div>
  );
}

export default LoadingScreen;
