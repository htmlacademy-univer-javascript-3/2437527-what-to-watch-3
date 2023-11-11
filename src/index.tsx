import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {reviewPages} from './mocks/reviewPages';
import {video} from './mocks/video';
import {promoFilm} from './mocks/promoFilm';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        promoFilm={promoFilm}
        films={films}
        reviews={reviewPages}
        videoPlayer={video}
      />
    </Provider>
  </React.StrictMode>
);
