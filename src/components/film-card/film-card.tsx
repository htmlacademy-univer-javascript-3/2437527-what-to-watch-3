import {FilmPreview} from '../../types/film-type';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../routes';
import React, {ReactElement} from 'react';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  filmPreview: FilmPreview;
  onMouseEnter: (id : string) => void;
  onMouseExit: () => void;
  isPlaying: boolean;
};

function FilmCard({filmPreview, onMouseEnter, onMouseExit, isPlaying} : FilmCardProps): ReactElement {
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseEnter(filmPreview.id)}
      onMouseLeave={() => onMouseExit()}
    >
      <div className="small-film-card__image">
        {
          (isPlaying)
            ?
            <VideoPlayer isMiniPlayer isPlaying
              videoSrc={filmPreview.previewVideoLink} poster={filmPreview.previewImage}
            />
            :
            <img src={filmPreview.previewImage} alt={filmPreview.name}
              width="280" height="175"
            />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film(filmPreview.id)}>{filmPreview.name}</Link>
      </h3>
    </article>
  );
}

export const FilmCardMemo = React.memo(FilmCard);
export default FilmCardMemo;
