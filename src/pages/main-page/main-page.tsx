import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import MainPageCatalog from '../../components/main-page-catalog/main-page-catalog';
import {FilmPreview, PromoFilm} from '../../types/film-type';
import {ReactElement} from 'react';

type AppScreenProps = {
  promoFilm: PromoFilm;
  filmPreviews: FilmPreview[];
}

function MainPage({promoFilm, filmPreviews}: AppScreenProps): ReactElement {
  return (
    <>
      <PromoFilmCard promoFilm={promoFilm}/>
      <MainPageCatalog filmPreviews={filmPreviews}/>
    </>
  );
}

export default MainPage;
