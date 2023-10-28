import {Film} from '../../types/film-type';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../routes';
import {ReactElement} from 'react';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  onMouseEnter: (id : number) => void;
  onMouseExit: () => void;
  isPlaying: boolean;
};

function FilmCard({film, onMouseEnter, onMouseExit, isPlaying} : FilmCardProps): ReactElement {
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseEnter(film.id)}
      onMouseLeave={() => onMouseExit()}
    >
      <div className="small-film-card__image">
        {
          (isPlaying)
            ?
            <VideoPlayer isMiniPlayer isPlaying
              videoSrc={'https://doka.guide/html/video/demos/poster/video/frontend.mp4'} poster={film.src}
            />
            :
            <img src={film.src} alt={film.title}
              width="280" height="175"
            />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoutes.Film(film.id)}>{film.title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
