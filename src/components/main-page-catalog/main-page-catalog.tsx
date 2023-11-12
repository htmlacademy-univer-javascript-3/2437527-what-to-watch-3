import Footer from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import {ReactElement} from 'react';
import {useAppSelector} from '../../hooks';
import {Film} from '../../types/film-type';

function MainPageCatalog(): ReactElement {
  const films : Film[] = useAppSelector((state) => state.films);
  const filmsOfGenre : Film[] = useAppSelector((state) => state.filmsOfGenre);

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList films={films} />
        <FilmsList {...filmsOfGenre}/>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MainPageCatalog;
