import {Link, useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../const/app-routes';
import React, {ReactElement} from 'react';
import MiniPlayer from '../mini-player/mini-player';
import {FilmPreview} from '../../types/films/film-preview';

type FilmCardProps = {
  filmPreview: FilmPreview;
  onMouseEnter: (id : string) => void;
  onMouseExit: () => void;
  isPlaying: boolean;
};

function FilmCard({filmPreview, onMouseEnter, onMouseExit, isPlaying} : FilmCardProps): ReactElement {
  const navigate = useNavigate();

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseEnter(filmPreview.id)}
      onMouseLeave={() => onMouseExit()}
    >
      <div className="small-film-card__image" onClick={() => navigate(AppRoutes.Film(filmPreview.id))}>
        {
          (isPlaying)
            ?
            <MiniPlayer videoSrc={filmPreview.previewVideoLink} poster={filmPreview.previewImage}/>
            :
            <img src={filmPreview.previewImage} alt={filmPreview.name}
              width="280" height="175"
            />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoutes.Film(filmPreview.id)}>{filmPreview.name}</Link>
      </h3>
    </article>
  );
}

export const FilmCardMemo = React.memo(FilmCard);
export default FilmCardMemo;
