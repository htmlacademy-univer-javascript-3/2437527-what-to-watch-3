import Footer from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import React, {ReactElement} from 'react';
import {useAppSelector} from '../../hooks';
import {FilmPreview} from '../../types/film-type';
import ShowMore from '../show-more/show-more';
import {filterFilms} from '../../helpers/filter-films';
import {getGenre} from '../../store/data/selectors';

const FILMS_ON_PAGE = 8;

type MainPageCatalogProps = {
  filmPreviews: FilmPreview[];
}

function MainPageCatalog({filmPreviews} : MainPageCatalogProps): ReactElement {
  const [pagesToShowCount, setPagesToShowCount] = React.useState(1);
  const filmPreviewsOfGenre : FilmPreview[] = filterFilms(filmPreviews, useAppSelector(getGenre));
  const filmsToShow = pagesToShowCount * FILMS_ON_PAGE;

  const onClick = () => {
    setPagesToShowCount(pagesToShowCount + 1);
  };

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList filmPreviews={filmPreviews} />
        <FilmsList filmPreviews={filmPreviewsOfGenre.slice(0, filmsToShow)}/>
        {filmPreviewsOfGenre.length > filmsToShow && (
          <ShowMore onClick={onClick}/>
        )}
      </section>
      <Footer/>
    </div>
  );
}

export default MainPageCatalog;
