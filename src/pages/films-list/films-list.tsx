import FilmCard from '../film-card/film-card';
import {FilmsInCatalogCount} from '../main-page/main-page';

export const Film = {
  src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  title: 'Fantastic Beasts: The Crimes of Grindelwald'
};

function FilmsList(): JSX.Element {
  const films : JSX.Element[] = [];
  for (let i = 0; i < FilmsInCatalogCount; i++) {
    films.push(<FilmCard key={i} src={Film.src} title={Film.title}/>);
  }
  return (
    <div className="catalog__films-list">
      {films}
    </div>
  );
}

export default FilmsList;
