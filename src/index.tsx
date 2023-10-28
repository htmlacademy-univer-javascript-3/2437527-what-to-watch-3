import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {reviews} from './mocks/reviews';
import {videoPlayer} from './mocks/video-player';
import {PromoFilm} from './types/promo-film-type';

export const promoFilm : PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014',
  imgSrc: 'img/the-grand-budapest-hotel-poster.jpg',
  bgImgSrc: 'img/bg-the-grand-budapest-hotel.jpg'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      promoFilm={promoFilm}
      films={films}
      reviews={reviews}
      videoPlayer={videoPlayer}
    />
  </React.StrictMode>
);
