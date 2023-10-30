import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {reviewPages} from './mocks/reviewPages';
import {video} from './mocks/video';
import {promoFilm} from './mocks/promoFilm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      promoFilm={promoFilm}
      films={films}
      reviews={reviewPages}
      videoPlayer={video}
    />
  </React.StrictMode>
);
