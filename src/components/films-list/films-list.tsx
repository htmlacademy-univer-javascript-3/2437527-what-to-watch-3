import FilmCard from '../film-card/film-card';
import React, {ReactElement} from 'react';
import {FilmPreview} from '../../types/films/film-preview';

type SimilarFilmsProps = {
  filmPreviews: FilmPreview[];
}

function FilmsList({filmPreviews} : SimilarFilmsProps): ReactElement {
  const [activeId, setActiveCardId] = React.useState('');

  const onMouseEnter = React.useCallback((id: string) => {
    setActiveCardId(id);
  }, []);

  const onMouseExit = React.useCallback(() => {
    setActiveCardId('');
  }, []);

  return (
    <div className="catalog__films-list">
      {filmPreviews.map((filmPreview) => (
        <FilmCard
          onMouseEnter={onMouseEnter}
          onMouseExit={onMouseExit}
          key={filmPreview.id}
          filmPreview={filmPreview}
          isPlaying={activeId === filmPreview.id}
        />
      ))}
    </div>
  );
}

export default FilmsList;
