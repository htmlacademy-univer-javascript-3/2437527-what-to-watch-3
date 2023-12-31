import Footer from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list/films-list';
import React, {ReactElement} from 'react';
import {useAppSelector} from '../../hooks/hooks';
import ShowMore from '../show-more/show-more';
import {filterFilms} from '../../helpers/filter-films';
import {getGenre} from '../../store/data/selectors';
import {getFilmPreviews} from '../../store/films/selectors';
import Loader from '../loader/loader';
import {FilmPreview} from '../../types/films/film-preview';

const FILMS_ON_PAGE = 8;

function MainPageCatalog(): ReactElement {
  const filmPreviewsData = useAppSelector(getFilmPreviews);
  const filmPreviews = filmPreviewsData.filmPreviews;
  const isFilmPreviewsLoaded = filmPreviewsData.isLoaded;
  const [pagesToShowCount, setPagesToShowCount] = React.useState(1);
  const filmPreviewsOfGenre : FilmPreview[] = filterFilms(filmPreviews, useAppSelector(getGenre));
  const filmsToShow = pagesToShowCount * FILMS_ON_PAGE;

  const handleButtonClick = () => {
    setPagesToShowCount(pagesToShowCount + 1);
  };

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {!isFilmPreviewsLoaded ? <Loader isScreenLoader={false}/> :
          <>
            <GenresList filmPreviews={filmPreviews}/>
            <FilmsList filmPreviews={filmPreviewsOfGenre.slice(0, filmsToShow)}/>
            {filmPreviewsOfGenre.length > filmsToShow && (
              <ShowMore onClick={handleButtonClick}/>
            )}
          </>}
      </section>
      <Footer/>
    </div>
  );
}

export default MainPageCatalog;
