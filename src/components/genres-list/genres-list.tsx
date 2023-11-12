import React, {ReactElement} from 'react';
import {Film} from '../../types/film-type';
import {useDispatch} from 'react-redux';
import {changeGenre} from '../../store/action';
import {useAppSelector} from '../../hooks';
import {getAllGenres} from '../../helpers/get-all-genres';

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
  const [selectedGenre, setActiveGenre] = React.useState(useAppSelector((state) => state.genre));
  const genres : string[] = getAllGenres(films);

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
