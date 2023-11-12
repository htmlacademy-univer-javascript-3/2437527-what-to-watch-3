import React, {ReactElement} from 'react';
import {Film} from '../../types/film-type';
import {useDispatch} from 'react-redux';
import {changeGenre} from '../../store/action';
import {ALL_GENRES_RUBRIC} from '../../store/reducer';

const GenreNames : Record<string, string> = {
  'All genres': 'All genres-list',
  'Comedy': 'Comedies',
  'Crime': 'Crime',
  'Documentary': 'Documentary',
  'Drama': 'Dramas',
  'Horror': 'Horror',
  'Kids & Family': 'Kids & Family',
  'Romance': 'Romance',
  'Sci-Fi': 'Sci-Fi',
  'Thriller': 'Thrillers'
};

type GenreListProps = {
  films: Film[];
};

function GenresList({films} : GenreListProps): ReactElement {
  const dispatch = useDispatch();
  const [selectedGenre, setActiveGenre] = React.useState(ALL_GENRES_RUBRIC);
  const genres : string[] = [...new Set(films.map((film) => film.genre).sort())];
  genres.unshift(ALL_GENRES_RUBRIC);

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li key = {GenreNames[genre]}
            className={`catalog__genres-item ${genre === selectedGenre ? 'catalog__genres-item--active' : ''}`}
          >
            <a onClick={() => {
              setActiveGenre(genre);
              dispatch(changeGenre({genre : genre}));
            }}
            className="catalog__genres-link"
            >{GenreNames[genre]}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresList;
