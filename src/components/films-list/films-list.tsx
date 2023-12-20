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

  const filmsList : ReactElement[] = [];
  for (let i = 0; i < Object.keys(filmPreviews).length; i++) {
    filmsList.push(
      <FilmCard
        onMouseEnter={onMouseEnter}
        onMouseExit={onMouseExit}
        key={filmPreviews[i].id}
        filmPreview={filmPreviews[i]}
        isPlaying={activeId === filmPreviews[i].id}
      />);
  }

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}

export default FilmsList;
