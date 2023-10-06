import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

export const PromoFilmData = {
  Title: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: '2014'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App title={PromoFilmData.Title} genre={PromoFilmData.Genre} year={PromoFilmData.Year}/>
  </React.StrictMode>
);
