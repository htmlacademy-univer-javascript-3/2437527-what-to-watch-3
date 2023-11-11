import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film-type';
import React, {ReactElement} from 'react';
import {useAppSelector} from '../../hooks';

function FilmsList(): ReactElement {
  const [activeId, setActiveCardId] = React.useState(0);
  const films : Film[] = useAppSelector((state) => state.filmsOfGenre);

  const onMouseEnter = (id: number) => {
    setActiveCardId(id);
  };

  const onMouseExit = () => {
    setActiveCardId(0);
  };

  const filmsList : ReactElement[] = [];
  for (let i = 0; i < Object.keys(films).length; i++) {
    filmsList.push(
      <FilmCard
        onMouseEnter={onMouseEnter}
        onMouseExit={onMouseExit}
        key={films[i].id}
        film={films[i]}
        isPlaying={activeId === films[i].id}
      />);
  }

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}

export default FilmsList;
