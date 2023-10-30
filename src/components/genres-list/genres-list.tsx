import {Genres} from '../../pages/main-page/main-page';
import {ReactElement} from 'react';

function GenresList(): ReactElement {
  return (
    <ul className="catalog__genres-list">
      {
        Genres.map((genre) => (
          <li key = {genre} className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresList;
