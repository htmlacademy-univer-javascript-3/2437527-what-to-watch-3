import React, {ReactElement} from 'react';
import {FilmPreview} from '../../types/film-types';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {getAllGenres} from '../../helpers/get-all-genres';
import {getGenre} from '../../store/data/selectors';
import {setGenre} from '../../store/data/data';
import {transparentButtonStyle} from '../../helpers/styles';


type GenreListProps = {
  filmPreviews: FilmPreview[];
};

function GenresList({filmPreviews} : GenreListProps): ReactElement {
  const dispatch = useDispatch();
  const [selectedGenre, setActiveGenre] = React.useState(useAppSelector(getGenre));
  const genres : string[] = getAllGenres(filmPreviews);

  const onClick = (genre : string) => {
    setActiveGenre(genre);
    dispatch(setGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li key = {crypto.randomUUID()}
            className={`catalog__genres-item ${genre === selectedGenre ? 'catalog__genres-item--active' : ''}`}
          >
            <button onClick={() => onClick(genre)}
              className="catalog__genres-link" style={transparentButtonStyle}
            >{genre}
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresList;
