import {Genres} from '../../pages/main-page/main-page';
import {ReactElement} from 'react';

function GenresList(): ReactElement {
  const genres : ReactElement[] = [];
  for (let i = 0; i < Genres.length; i++) {
    genres.push(
      <li key = {i} className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">{Genres[i]}</a>
      </li>);
  }
  return (
    <ul className="catalog__genres-list">
      {genres}
    </ul>
  );
}

export default GenresList;
