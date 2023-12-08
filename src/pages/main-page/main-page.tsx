import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import MainPageCatalog from '../../components/main-page-catalog/main-page-catalog';
import {FilmPreview, PromoFilm} from '../../types/film-type';
import {ReactElement} from 'react';

type AppScreenProps = {
  filmPreviews: FilmPreview[];
  promoFilm: PromoFilm;
}

function MainPage({filmPreviews, promoFilm}: AppScreenProps): ReactElement {
  return (
    <>
      <PromoFilmCard promoFilm={promoFilm}/>
      <MainPageCatalog filmPreviews={filmPreviews}/>
    </>
  );
}

export default MainPage;
