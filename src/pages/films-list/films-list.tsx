import FilmCard from '../film-card/film-card';
import {FilmsInCatalogCount} from '../main-page/main-page';

function FilmsList(): JSX.Element {
  const films = [];
  for (let i = 0; i < FilmsInCatalogCount; i++) {
    films.push(<FilmCard key={i}/>);
  }
  return (
    <div className="catalog__films-list">
      {films}
    </div>
  );
}

export default FilmsList;
