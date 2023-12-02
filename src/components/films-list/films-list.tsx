import FilmCard from '../film-card/film-card';
import {FilmPreview} from '../../types/film-type';
import React, {ReactElement} from 'react';

type SimilarFilmsProps = {
  filmPreviews: FilmPreview[];
}

function FilmsList({filmPreviews} : SimilarFilmsProps): ReactElement {
  const [activeId, setActiveCardId] = React.useState(0);

  const onMouseEnter = React.useCallback((id: number) => {
    setActiveCardId(id);
  }, []);

  const onMouseExit = React.useCallback(() => {
    setActiveCardId(0);
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
