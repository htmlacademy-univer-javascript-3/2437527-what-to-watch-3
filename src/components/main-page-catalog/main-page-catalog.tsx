import Footer from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import React, {ReactElement} from 'react';
import {useAppSelector} from '../../hooks';
import {Film} from '../../types/film-type';
import ShowMore from '../show-more/show-more';
import {filterFilms} from '../../helpers/filter-films';

const FILMS_ON_PAGE = 8;

type MainPageCatalogProps = {
  films: Film[];
}

function MainPageCatalog({films} : MainPageCatalogProps): ReactElement {
  const [pagesToShowCount, setPagesToShowCount] = React.useState(1);
  const filmsOfGenre : Film[] = filterFilms(films, useAppSelector((state) => state.genre));
  const filmsToShow = pagesToShowCount * FILMS_ON_PAGE;

  const onClick = () => {
    setPagesToShowCount(pagesToShowCount + 1);
  };

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList films={films} />
        <FilmsList {...filmsOfGenre.slice(0, filmsToShow)}/>
        {filmsOfGenre.length > filmsToShow && (
          <ShowMore onClick={onClick}/>
        )}
      </section>
      <Footer/>
    </div>
  );
}

export default MainPageCatalog;
