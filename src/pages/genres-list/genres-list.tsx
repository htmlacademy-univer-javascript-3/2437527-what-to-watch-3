import {Genres} from '../main-page/main-page';

function GenresList(): JSX.Element {
  const genres = [];
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
