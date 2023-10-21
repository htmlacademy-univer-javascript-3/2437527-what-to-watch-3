import Footer from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import {Film} from '../../types/film-type';
import {ReactElement} from 'react';

function MainPageCatalog(films : Film[]): ReactElement {
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList />
        <FilmsList {...films}/>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default MainPageCatalog;
