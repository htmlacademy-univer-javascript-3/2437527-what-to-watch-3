import {Film} from '../../types/film-type';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../routes';
import {ReactElement} from 'react';

type FilmCardProps = {
  film: Film;
  onMouseEnter: (id) => void;
  onMouseExit: () => void;
};

function FilmCard({film, onMouseEnter, onMouseExit} : FilmCardProps): ReactElement {
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseEnter(film.id)}
      onMouseLeave={() => onMouseExit()}
    >
      <div className="small-film-card__image">
        <img src={film.src} alt={film.title}
          width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoutes.Film(film.id)}>{film.title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
