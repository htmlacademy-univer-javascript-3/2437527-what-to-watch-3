import Footer from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import React, {ReactElement} from 'react';
import {useAppSelector} from '../../hooks';
import {Film} from '../../types/film-type';
import ShowMore from '../show-more/show-more';

const FILMS_ON_PAGE = 8;

function MainPageCatalog(): ReactElement {
  const [pagesToShowCount, setPagesToShowCount] = React.useState(1);
  const films : Film[] = useAppSelector((state) => state.films);
  const filmsOfGenre : Film[] = useAppSelector((state) => state.filmsOfGenre);
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
        <ShowMore isHidden={filmsOfGenre.length < filmsToShow} onClick={onClick}/>
      </section>
      <Footer/>
    </div>
  );
}

export default MainPageCatalog;
