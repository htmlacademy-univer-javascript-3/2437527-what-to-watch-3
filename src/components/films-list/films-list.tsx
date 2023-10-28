import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film-type';
import React, {ReactElement} from 'react';

function FilmsList(films : Film[]): ReactElement {
  const [, setActiveCardId] = React.useState(0);

  const onMouseEnter = (id: number) => {
    setActiveCardId(id);
  };

  const onMouseExit = () => {
    setActiveCardId(0);
  };

  const filmsList : JSX.Element[] = [];
  for (let i = 0; i < Object.keys(films).length; i++) {
    filmsList.push(
      <FilmCard
        onMouseEnter={onMouseEnter}
        onMouseExit={onMouseExit}
        key={films[i].id}
        film={films[i]}
      />);
  }

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}

export default FilmsList;
